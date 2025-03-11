"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./consultation.module.css";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Error sending email");
      } else {
        setStatus("Email sent successfully!");
        setFormData({ name: "", number: "", email: "", description: "" });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Network or server error");
    }
  };

  return (
    <section className={styles.consultation} id="consultation">
      <div className="container">
        <div className={styles.consultation__wrapper}>
          <h2>Consultation</h2>
          <p>We`ll contact you shortly</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <label htmlFor="number" className="sr-only">
              Phone number
            </label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone number"
              required
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
            />

            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="6"
              placeholder="Tell us about the design, style, and details..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <input type="submit" value="Send" />
          </form>

          {status && <p className={styles.consultation__status}>{status}</p>}

          <Link href="/privacy_policy" id={styles.privacy_policy}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
