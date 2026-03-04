import PageTitle from "../components/PageTitle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function About() {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title — centered */}
      <motion.div variants={textVariants} style={{ width: "100%", textAlign: "center" }}>
        <PageTitle title="ABOUT ME" centered />
      </motion.div>

      {/* Content — left aligned */}
      <motion.div className="about-content" variants={containerVariants}>
        <motion.p variants={textVariants}>
          Forged through repetition, failure, and discipline. I believe strong systems are built on fundamentals, not shortcuts.
        </motion.p>
        <motion.p variants={textVariants}>
          I focus on understanding problems deeply, designing solutions carefully, and executing with control.
        </motion.p>
        <motion.p variants={textVariants}>
          I don't chase tools. I master foundations — then scale.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}