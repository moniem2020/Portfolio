"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Workflow, Users } from "lucide-react";

const groups = [
  {
    label: "Programming",
    icon: Code2,
    color: "#2563eb",
    skills: ["Python", "C++", "Java", "C#", "Scala"],
  },
  {
    label: "Data Science & AI",
    icon: BrainCircuit,
    color: "#f97316",
    skills: ["Machine Learning", "RAG", "LangChain", "Few-Shot Learning", "Data Cleaning", "Web Scraping"],
  },
  {
    label: "Automation & Tools",
    icon: Workflow,
    color: "#2563eb",
    skills: ["n8n", "Power BI", "SQL", "TensorFlow", "Git", "GitHub", "VS Code"],
  },
  {
    label: "Strengths",
    icon: Users,
    color: "#f97316",
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
          className="card card-hover relative overflow-hidden p-6"
        >
          <span className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: group.color }} />
          <div className="flex items-center gap-3 pl-1.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: group.color }}
            >
              <group.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold tracking-tight text-ink">
              {group.label}
            </h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 pl-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  color: group.color,
                  borderColor: `${group.color}40`,
                  backgroundColor: `${group.color}0d`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
