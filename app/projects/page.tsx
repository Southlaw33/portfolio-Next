"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "HackerNews Server",
    description:
      "A PostgreSQL-based Hono project that mirrors the functionality (Backend) of Hacker News.",
    techStack: ["Hono", "TypeScript", "PostgreSQL"],
    link: "https://github.com/Southlaw33/hackernews-server",
  },
  {
    title: "Toxic Text Classifier",
    description:
      "A machine learning model that detects toxicity in text/comments using NLP techniques.",
    techStack: ["Python", "Scikit-learn", "NLP", "Machine Learning"],
    link: "https://github.com/Southlaw33/Toxic-text-classifier",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-base-100 text-base-content py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-1">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col md:flex-row items-start gap-6 bg-base-200 dark:bg-neutral border border-primary/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-primary group-hover:underline">
                {project.title}
              </h3>
              <p className="text-base-content/80 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/10 text-sm px-3 py-1 rounded-full text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm text-primary font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
