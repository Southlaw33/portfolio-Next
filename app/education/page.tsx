"use client";

import { motion } from "framer-motion";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

const education: EducationItem[] = [
  {
    degree: "B.E in AI & Data Science",
    institution: "Siddaganga Institute of Technology, Tumkur",
    period: "2021 – 2025",
    details: "CGPA: 8.49",
  },
  {
    degree: "2nd PUC",
    institution: "Vidya Vardhaka Sangha Sardar Patel PU College",
    period: "2021",
    details: "Percentage: 92.8%",
  },
  {
    degree: "10th Standard",
    institution: "Vidya Vardhaka Sangha Sardar Patel High School",
    period: "2019",
    details: "Percentage: 94.6%",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-16 px-4 max-w-5xl mx-auto bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-white/80 dark:bg-neutral/70 border-l-4 border-primary backdrop-blur p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-primary">
              {edu.degree}
            </h3>
            <p className="text-sm mt-1">
              <span className="font-medium">{edu.institution}</span> —{" "}
              <span className="text-base-content/80">{edu.period}</span>
            </p>
            {edu.details && (
              <p className="mt-2 text-base-content/90">{edu.details}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
