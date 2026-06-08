"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Workflow, Users } from "lucide-react";

const groups = [
  {
    label: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "Java", "C#", "Scala"],
  },
  {
    label: "Data Science & AI",
    icon: BrainCircuit,
    skills: ["Machine Learning", "RAG", "LangChain", "Few-Shot Learning", "Data Cleaning", "Web Scraping"],
  },
  {
    label: "Automation & Tools",
    icon: Workflow,
    skills: ["n8n", "Power BI", "SQL", "TensorFlow", "Git", "GitHub", "VS Code"],
  },
  {
    label: "Strengths",
    icon: Users,
    skills: ["Cross-Team Collaboration", "Research", "Issue Prioritization", "Problem Solving"],
  },
];

export default function SkillsMatrix() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {groups.map((group, i) => (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <group.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold tracking-tight text-ink">
              {group.label}
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
