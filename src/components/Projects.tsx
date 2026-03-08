"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory, payment integration, and an admin dashboard built with Next.js and MongoDB.",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    year: "2024",
    link: "#",
    color: "#e8ff47",
  },
  {
    number: "02",
    title: "AI Chat Application",
    description: "Real-time AI-powered chat app with streaming responses, conversation history, and multi-model support using OpenAI and Anthropic APIs.",
    tags: ["React", "Node.js", "OpenAI", "Socket.io"],
    year: "2024",
    link: "#",
    color: "#ff6b35",
  },
  {
    number: "03",
    title: "Portfolio Dashboard",
    description: "A personal finance dashboard with live stock tracking, portfolio analytics, beautiful charts and automated reporting features.",
    tags: ["Next.js", "PostgreSQL", "Chart.js", "TypeScript"],
    year: "2023",
    link: "#",
    color: "#e8ff47",
  },
  {
    number: "04",
    title: "Social Media App",
    description: "A modern social platform with real-time feeds, stories, direct messaging and content recommendation engine.",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    year: "2023",
    link: "#",
    color: "#ff6b35",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        backgroundColor: "#0a0a0a",
        padding: "8rem 1.5rem",
        position: "relative",
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
            03 — Projects
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        </motion.div>

        {/* Heading */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1.1 }}
          >
            Selected<br />
            <span style={{ color: "#e8ff47" }}>work.</span>
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#888888", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid #2a2a2a", paddingBottom: "2px" }}
          >
            View All Projects →
          </motion.a>
        </div>

        {/* Projects list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid #2a2a2a",
                padding: "2.5rem 0",
                cursor: "pointer",
                transition: "all 0.3s",
                backgroundColor: hovered === index ? "#111111" : "transparent",
                paddingLeft: hovered === index ? "1.5rem" : "0",
                paddingRight: hovered === index ? "1.5rem" : "0",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>

                {/* Left side */}
                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flex: 1 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#444", letterSpacing: "0.1em", paddingTop: "0.4rem", minWidth: "2rem" }}>
                    {project.number}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(1.2rem, 3vw, 1.8rem)", fontWeight: 800, color: hovered === index ? project.color : "#f0f0f0", transition: "color 0.3s" }}>
                        {project.title}
                      </h3>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.1em" }}>
                        {project.year}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "#888888", lineHeight: 1.7, maxWidth: "600px", marginBottom: "1rem" }}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            color: "#888",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            border: "1px solid #2a2a2a",
                            padding: "0.25rem 0.6rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right — Arrow */}
                <motion.a
                  href={project.link}
                  animate={{ x: hovered === index ? 0 : -10, opacity: hovered === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    border: `1px solid ${project.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: project.color,
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    marginTop: "0.25rem",
                  }}
                >
                  ↗
                </motion.a>
              </div>
            </motion.div>
          ))}

          {/* Last border */}
          <div style={{ borderTop: "1px solid #2a2a2a" }} />
        </div>

      </div>
    </section>
  );
}
