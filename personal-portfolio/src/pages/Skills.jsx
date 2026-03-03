import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const skillsData = [
  {
    category: "CORE ENGINEERING",
    items: ["Data Structures & Algorithms (Java)", "Problem-solving patterns", "Complexity & optimization"]
  },
  {
    category: "BACKEND SYSTEMS",
    items: ["Python", "APIs", "Databases", "System logic"]
  },
  {
    category: "MACHINE LEARNING",
    items: ["Data preprocessing", "Model training", "Evaluation & metrics"]
  },
  {
    category: "CLOUD",
    items: ["Azure fundamentals", "Deployment concepts", "CI/CD basics"]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Skills() {
  return (
    <div className="skills-container">
      <PageTitle title="THE ARSENAL" centered />

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}