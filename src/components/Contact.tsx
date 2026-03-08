"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid #2a2a2a",
    color: "#f0f0f0",
    padding: "1rem 1.25rem",
    fontFamily: "var(--font-mono)",
    fontSize: "0.85rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ backgroundColor: "#0a0a0a", padding: "8rem 1.5rem", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "5rem" }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#e8ff47", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            05 — Contact
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Let us build<br />
              <span style={{ color: "#e8ff47" }}>something</span><br />
              great together.
            </h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#888888", lineHeight: 1.8, marginBottom: "3rem" }}>
              I am currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Email", value: "ahmadrao3226@gmail.com", href: "mailto:ahmadrao3226@gmail.com" },
                { label: "Location", value: "Pakpattan, Pakistan", href: "#" },
                { label: "Availability", value: "Open to work — Remote", href: "#" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {item.label}
                  </span>
                  <a href={item.href} style={{ fontFamily: "var(--font-syne)", fontSize: "0.95rem", fontWeight: 600, color: "#f0f0f0", textDecoration: "none" }}>
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "3rem", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Dribbble", href: "https://dribbble.com" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.05, color: "#e8ff47" }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#888888",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid #2a2a2a",
                    padding: "0.5rem 1rem",
                    transition: "all 0.2s",
                  }}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
            <textarea
              placeholder="Your Message"
              rows={7}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ ...inputStyle, resize: "none" }}
            />

            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{
                backgroundColor: sent ? "#1a1a1a" : "#e8ff47",
                color: sent ? "#e8ff47" : "#000",
                border: sent ? "1px solid #e8ff47" : "none",
                padding: "1rem 2rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
