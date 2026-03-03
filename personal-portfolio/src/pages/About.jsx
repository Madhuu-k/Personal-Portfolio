import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
  }
};

export default function About() {
  // TODO: Replace with your actual image path e.g. "/images/madhu.jpg"
  const imageSrc = null;

  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* LEFT — title + text */}
      <div className="about-left">
        <motion.div variants={textVariants}>
          <PageTitle title="THE TARNISHED" />
        </motion.div>

        <motion.div className="about-content" variants={containerVariants}>
          <motion.p variants={textVariants}>
            Forged through repetition, failure, and discipline. I believe strong
            systems are built on fundamentals, not shortcuts.
          </motion.p>
          <motion.p variants={textVariants}>
            I focus on understanding problems deeply, designing solutions
            carefully, and executing with control.
          </motion.p>
          <motion.p variants={textVariants}>
            I don't chase tools. I master foundations — then scale.
          </motion.p>
        </motion.div>
      </div>

      {/* RIGHT — photo */}
      <motion.div className="about-image" variants={imageVariants}>
        {imageSrc ? (
          <img src={imageSrc} alt="Madhu" />
        ) : (
          <div className="about-image-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>Your photo here</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}