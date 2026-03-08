"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 60 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 85 },
    ],
  },
];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
  "PostgreSQL", "Tailwind", "Figma", "Git", "Docker",
  "Vercel", "Express", "Redux", "GraphQL", "Firebase",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
            02 — Skills
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#f0f0f0",
            lineHeight: 1.1,
            marginBottom: "4rem",
          }}
        >
          Tools I work<br />
          <span style={{ color: "#e8ff47" }}>with daily.</span>
        </motion.h2>

        {/* Skill categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", marginBottom: "6rem" }}>
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #2a2a2a",
                padding: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                <div style={{ width: "8px", height: "8px", backgroundColor: "#e8ff47" }} />
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", fontWeight: 700, color: "#f0f0f0" }}>
                  {category.title}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#888888" }}>
                        {skill.name}
                      </span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#e8ff47" }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div style={{ width: "100%", height: "2px", backgroundColor: "#2a2a2a", position: "relative", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.08, ease: "easeOut" }}
                        style={{ height: "100%", backgroundColor: "#e8ff47", position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Tech Stack
          </p>
          <div style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a", padding: "1.25rem 0" }}>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "3rem", width: "max-content" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: i % 3 === 0 ? "#e8ff47" : "#444",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech}
                  <span style={{ marginLeft: "3rem", color: "#2a2a2a" }}>✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
