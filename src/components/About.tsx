"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        backgroundColor: "#0a0a0a",
        padding: "8rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
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
            01 — About
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        </motion.div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ position: "relative" }}
          >
            <div style={{ width: "100%", aspectRatio: "3/4", maxWidth: "380px", backgroundColor: "#111111", border: "1px solid #2a2a2a", position: "relative", overflow: "hidden" }}>
              <img
                src="/id.jpeg"
                alt="Ahmad Akhtar"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", backgroundColor: "#e8ff47" }} />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                backgroundColor: "#e8ff47",
                color: "#000",
                padding: "1rem 1.5rem",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              <div style={{ fontSize: "1.8rem", fontWeight: 800 }}>3+</div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.05em" }}>Years of<br />Experience</div>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              I craft digital<br />
              <span style={{ color: "#e8ff47" }}>experiences</span><br />
              that matter.
            </h2>

            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#888888", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Hey! I am a full-stack developer and UI designer passionate about
              building products that live at the intersection of great engineering
              and thoughtful design. I started coding at 16 and never stopped.
            </p>

            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.875rem", color: "#888888", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              When I am not writing code, you will find me exploring design trends,
              contributing to open source, or enjoying a strong cup of coffee while
              planning my next project.
            </p>

            {/* Info grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                { label: "Name", value: "Ahmad Akhtar" },
                { label: "Location", value: "Pakpattan, Pakistan" },
                { label: "Email", value: "ahmadrao3226@gmail.com" },
                { label: "Availability", value: "Open to work" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-syne)", fontSize: "0.9rem", color: "#f0f0f0", fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                padding: "0.85rem 2rem",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid #e8ff47",
                color: "#e8ff47",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
