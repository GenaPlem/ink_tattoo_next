"use client";
import { useState } from "react";
import styles from "./consultation.module.css";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  return (
    <section className={styles.consultation} id="consultation">
      <div className="container">
        <div className={styles.consultation__wrapper}>
          <h2>Consultation</h2>
          <p>We`ll contact you shortly</p>
          <form>
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

          {status && <p>{status}</p>}

          <a href="privacy_policy.html" id={styles.privacy_policy}>
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
