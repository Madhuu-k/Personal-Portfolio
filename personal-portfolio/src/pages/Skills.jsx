import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import TaleOfTheTape from "../components/TaleOfTheTape";

const skillsData = [
  
  { category: "PROGRAMMING LANGUAGES",  items: ["Java", "Python", "C/C++", "JavaScript" ] },
  { category: "BACKEND & FULL-STACK",   items: ["React", "Flask/FastAPI", "REST APIs", "PostgreSQL"] },
  { category: "MACHINE LEARNING",  items: ["Computer Vision", "Neural Networks", "Deep Learning", "Model Training & Evaluation"] },
  { category: "CORE FUNDAMENTALS", items: ["Data Structures & Algorithms", "Version Control (Git & GitHub)", "Operating Systems", "DevOps Fundamentals (Docker, CI/CD, Kubernetes)"] }
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  return (
    <div className="skills-container">
      <PageTitle title="THE ARSENAL" info="Tools forged through discipline" />

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div key={index} className="skill-card" variants={cardVariants} whileHover={{ y: -6 }}>
            <h3>{skill.category}</h3>
            <ul>{skill.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </motion.div>
        ))}
      </motion.div>

      {/* ③ TALE OF THE TAPE */}
      <motion.div
        className="tape-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <p className="tape-heading">◆ &nbsp; TECHNICAL STRENGTH &nbsp; ◆</p>
        <TaleOfTheTape />
      </motion.div>
    </div>
  );
}