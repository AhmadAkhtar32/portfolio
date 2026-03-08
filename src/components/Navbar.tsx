"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #2a2a2a" : "none",
          transition: "all 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "1.2rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <span style={{ color: "#e8ff47" }}>{"<"}</span>
            <span style={{ color: "white" }}>Ahmad Akhtar</span>
            <span style={{ color: "#e8ff47" }}>{"/>"}</span>
          </motion.a>

          <div
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                style={{
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: active === link.label ? "#e8ff47" : "#888888",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
            style={{
              fontFamily: "var(--font-mono)",
              padding: "0.5rem 1.25rem",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid #e8ff47",
              color: "#e8ff47",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Resume
          </motion.a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "white",
                transformOrigin: "center",
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "white",
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{
                display: "block",
                width: "24px",
                height: "1.5px",
                background: "white",
                transformOrigin: "center",
              }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            style={{
              position: "fixed",
              top: "65px",
              left: 0,
              right: 0,
              zIndex: 40,
              background: "#111111",
              borderBottom: "1px solid #2a2a2a",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => {
                  setActive(link.label);
                  setMenuOpen(false);
                }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#888888",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontFamily: "var(--font-mono)",
                padding: "0.75rem 1.25rem",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: "1px solid #e8ff47",
                color: "#e8ff47",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
