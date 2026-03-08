"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid #2a2a2a", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Big CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid #2a2a2a" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Available for freelance work
          </p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.5rem, 8vw, 6rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1, marginBottom: "2rem" }}>
            Got a project?
          </h2>
          <motion.a
            href="mailto:ahmadrao3226@gmail.com"
            whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#e8ff47" }}
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              backgroundColor: "#e8ff47",
              color: "#000",
              padding: "1rem 3rem",
              textDecoration: "none",
              border: "1px solid #e8ff47",
              transition: "all 0.3s",
            }}
          >
            Let us Talk →
          </motion.a>
        </motion.div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>

          {/* Logo */}
          <a href="#" style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", fontWeight: 700, textDecoration: "none" }}>
            <span style={{ color: "#e8ff47" }}>{"<"}</span>
            <span style={{ color: "white" }}>Ahmad Akhtar</span>
            <span style={{ color: "#e8ff47" }}>{"/>"}</span>
          </a>

          {/* Copyright */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#444", letterSpacing: "0.1em" }}>
            © {year} Ahmad Akhtar. All rights reserved.
          </p>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#444",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
