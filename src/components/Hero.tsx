"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 1.5rem",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Glowing orb top right */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Glowing orb bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          paddingTop: "6rem",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            border: "1px solid #2a2a2a",
            borderRadius: "999px",
            padding: "0.35rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#e8ff47",
              display: "inline-block",
              boxShadow: "0 0 8px #e8ff47",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#888888",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "#f0f0f0",
              marginBottom: "0.2rem",
            }}
          >
            Creative
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "#e8ff47",
              marginBottom: "0.2rem",
            }}
          >
            Developer
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 800,
              lineHeight: 1,
              color: "#f0f0f0",
              marginBottom: "2rem",
            }}
          >
            {"& Designer"}
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            marginTop: "1rem",
          }}
        >
          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.9rem",
              color: "#888888",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}
          >
            I build fast, modern web experiences with clean code and bold design.
            Focused on React, Next.js and turning ideas into polished products.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, backgroundColor: "#e8ff47", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "var(--font-mono)",
                padding: "0.85rem 2rem",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                backgroundColor: "#e8ff47",
                color: "#000",
                textDecoration: "none",
                fontWeight: 700,
                transition: "all 0.2s",
                display: "inline-block",
              }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff1a" }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontFamily: "var(--font-mono)",
                padding: "0.85rem 2rem",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid #2a2a2a",
                color: "#f0f0f0",
                textDecoration: "none",
                transition: "all 0.2s",
                display: "inline-block",
              }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "5rem",
            paddingTop: "3rem",
            borderTop: "1px solid #2a2a2a",
            flexWrap: "wrap",
          }}
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Done" },
            { number: "15+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#e8ff47",
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#888888",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            color: "#444",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Scroll down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom, #e8ff47, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
