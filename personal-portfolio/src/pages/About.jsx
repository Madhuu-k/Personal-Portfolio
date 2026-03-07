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
          Hello — I'm Madhu, a Computer Science student focused on software engineering and system design.
          I enjoy building reliable systems, solving complex problems, and turning ideas into working software.
        </motion.p>

        <motion.p variants={textVariants}>
          Currently, I’m focused on pushing deeper into machine learning and intelligent systems. 
I build projects that combine real-time computer vision, data-driven models, and scalable pipelines — 
turning raw data into systems that actually perform when the pressure is on.
        </motion.p>
        <motion.p variants={textVariants}>
          My approach to engineering is simple.
        </motion.p>
        <motion.p variants={textVariants}>
          I believe strong systems are built on fundamentals, not shortcuts.
          I focus on understanding problems deeply, designing solutions carefully, and executing with precision.
          I don't chase tools. I master foundations — then scale.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}