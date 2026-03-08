"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Company Inc.",
    period: "2023 — Present",
    location: "Remote",
    description: "Led the frontend architecture of a SaaS platform serving 50k+ users. Built reusable component libraries, improved performance by 40%, and mentored junior developers.",
    tags: ["Next.js", "TypeScript", "React", "AWS"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency Co.",
    period: "2022 — 2023",
    location: "Lahore, Pakistan",
    description: "Developed and maintained 10+ client websites and web apps. Worked directly with clients to translate requirements into polished, production-ready products.",
    tags: ["React", "Node.js", "MongoDB", "Figma"],
  },
  {
    role: "Frontend Developer",
    company: "Startup Studio",
    period: "2021 — 2022",
    location: "Remote",
    description: "Built responsive UIs for early-stage startups. Collaborated closely with designers to implement pixel-perfect interfaces and smooth animations.",
    tags: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    period: "2020 — 2021",
    location: "Pakistan",
    description: "Delivered 15+ freelance projects ranging from landing pages to full e-commerce stores. Managed client relationships and full project lifecycles.",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const education = [
  {
    degree: "BS Computer Science",
    school: "Your University",
    period: "2020 — 2024",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
            04 — Experience
          </span>
          <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#f0f0f0", lineHeight: 1.1, marginBottom: "4rem" }}
        >
          Where I have<br />
          <span style={{ color: "#e8ff47" }}>worked.</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem" }}>

          {/* Left — Work experience timeline */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem" }}
            >
              Work Experience
            </motion.p>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: "7px", top: 0, bottom: 0, width: "1px", backgroundColor: "#2a2a2a" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    style={{ display: "flex", gap: "1.5rem", paddingLeft: "0.5rem" }}
                  >
                    {/* Dot */}
                    <div style={{ flexShrink: 0, marginTop: "0.4rem" }}>
                      <div style={{ width: "15px", height: "15px", borderRadius: "50%", border: "2px solid #e8ff47", backgroundColor: "#0a0a0a", position: "relative", zIndex: 1 }} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.3rem" }}>
                        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1rem", fontWeight: 700, color: "#f0f0f0" }}>
                          {exp.role}
                        </h3>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.05em" }}>
                          {exp.period}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#e8ff47" }}>
                          {exp.company}
                        </span>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "#444" }}>
                          {exp.location}
                        </span>
                      </div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#888888", lineHeight: 1.7, marginBottom: "1rem" }}>
                        {exp.description}
                      </p>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.6rem",
                              color: "#888",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              border: "1px solid #2a2a2a",
                              padding: "0.2rem 0.5rem",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Education + extras */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2rem" }}
            >
              Education
            </motion.p>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                style={{ backgroundColor: "#111111", border: "1px solid #2a2a2a", padding: "1.5rem", marginBottom: "1.5rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1rem", fontWeight: 700, color: "#f0f0f0" }}>
                    {edu.degree}
                  </h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444" }}>
                    {edu.period}
                  </span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#e8ff47", marginBottom: "0.5rem" }}>
                  {edu.school}
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#888888", lineHeight: 1.7 }}>
                  {edu.description}
                </p>
              </motion.div>
            ))}

            {/* Achievements */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", margin: "2.5rem 0 1.5rem" }}
            >
              Highlights
            </motion.p>

            {[
              { icon: "🏆", text: "Built 20+ production projects" },
              { icon: "🌍", text: "Worked with clients in 5+ countries" },
              { icon: "⭐", text: "Top rated freelancer on Upwork" },
              { icon: "🚀", text: "Launched 3 SaaS products" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.85rem 0", borderBottom: "1px solid #2a2a2a" }}
              >
                <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#888888" }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
