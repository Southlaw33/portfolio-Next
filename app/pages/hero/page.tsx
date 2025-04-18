"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const router = useRouter();

  const goToContact = () => {
    router.push("/contact");
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <motion.section
      id="profile"
      className="min-h-[90vh] flex flex-col items-center justify-center px-6 pb-4 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-6"
      >
        <Image
          src="/Untitled.jpg"
          alt="Atchutha Rao Profile Picture"
          width={170}
          height={180}
          className="rounded-full border-4 border-primary shadow-xl hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full border border-primary blur-xl opacity-20 animate-pulse"></div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-2 text-center text-primary"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Atchutha Rao T A
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-base-content/70 mb-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        A full stack AI developer and a Gen AI enthusiast.
      </motion.p>

      <motion.div
        className="flex gap-4 mt-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button
          className="btn btn-primary rounded-xl px-4 py-2 text-white bg-primary hover:bg-blue-950 transition"
          onClick={goToContact}
        >
          Connect with me
        </button>
        <button
          className="btn rounded-xl px-4 py-2 bg-base-200 hover:bg-blue-950 transition"
          onClick={openResume}
        >
          My Resume
        </button>
      </motion.div>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://github.com/Southlaw33"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-red-500 transition-all flex items-center gap-2"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          <span className="hidden md:inline text-sm">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/atchutha-rao-t-a-50241a24b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-red-500 transition-all flex items-center gap-2"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          <span className="hidden md:inline text-sm">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/atchutha_rao_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base-content/70 hover:text-red-500 transition-all flex items-center gap-2"
          aria-label="Instagram Profile"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <span className="hidden md:inline text-sm">Instagram</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
