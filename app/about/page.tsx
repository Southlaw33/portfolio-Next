"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "👨‍💻 Full Stack Developer",
    description:
      "I enjoy building robust web applications from the ground up. Whether it's crafting beautiful frontends or architecting scalable backends, I thrive in turning ideas into interactive experiences.",
  },
  {
    title: "🧠 Generative AI Enthusiast",
    description:
      "I'm deeply curious about the future of Generative AI. From large language models to image generation, I constantly experiment with new tools that push boundaries.",
  },
  {
    title: "🎮 Gamer & Creator",
    description:
      "When I'm not coding, I unwind by playing video games, cycling through scenic trails, or playing the guitar. These hobbies inspire creativity and fuel my passion for tech.",
  },
  {
    title: "📌 Club Involvement",
    description:
      "I proudly serve as the Event Management Lead at IEEE SIT SB, where I plan and execute engaging tech events and workshops to foster learning and innovation within our college community.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center text-center bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="max-w-3xl text-lg md:text-xl leading-relaxed text-base-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Hey there! I'm a passionate developer who loves exploring the
        intersection of creativity and technology.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl">
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-neutral/70 border border-primary/30 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {card.title}
            </h3>
            <p className="text-base-content">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
