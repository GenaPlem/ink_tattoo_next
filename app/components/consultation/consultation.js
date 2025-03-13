"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

import Link from "next/link";
import styles from "./consultation.module.css";

// Zod validation
const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  number: z.string().min(7, "Phone number must be at least 7 digits"),
  email: z.string().email("Invalid email format"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

export default function Consultation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("");
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.error || "Error sending email");
      } else {
        setStatus("Email sent successfully!");
        reset(); // Clear the form
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
          <p className={styles.consultation__info}>We`ll contact you shortly</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <div className={styles.consultation__field}>
              <input
                type="text"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <p className={styles.consultation__error}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className={styles.consultation__field}>
              <input
                type="text"
                placeholder="Phone number"
                {...register("number")}
              />
              {errors.number && (
                <p className={styles.consultation__error}>
                  {errors.number.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className={styles.consultation__field}>
              <input type="email" placeholder="E-mail" {...register("email")} />
              {errors.email && (
                <p className={styles.consultation__error}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Description Field */}
            <div className={styles.consultation__field}>
              <textarea
                placeholder="Tell us about the design, style, and details..."
                {...register("description")}
                className={styles.textarea}
                rows="6"
              />
              {errors.description && (
                <p className={styles.consultation__error}>
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
              className={styles.submitButton}
            />
            {status && <p className={styles.consultation__status}>{status}</p>}
          </form>

          <Link href="/privacy-policy" id={styles.privacy_policy}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
