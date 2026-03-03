import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const projectsData = [
  {
    id: "disease-pred",
    title: "DISEASE PREDICTION SYSTEM",
    description: "ML-based diagnosis pipeline using structured data"
  },
  {
    id: "cloud-deploy",
    title: "CLOUD DEPLOYMENT PIPELINE",
    description: "Automated CI/CD system for Azure infrastructure"
  },
  {
    id: "algo-visual",
    title: "ALGORITHM VISUALIZER",
    description: "Interactive tool for understanding data structures"
  },
  {
    id: "api-gateway",
    title: "API GATEWAY SERVICE",
    description: "Scalable backend routing and authentication layer"
  },
  {
    id: "data-engine",
    title: "DATA PROCESSING ENGINE",
    description: "High-performance ETL pipeline for analytics"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Projects() {
  return (
    <div className="projects-container">
      <PageTitle title="BATTLES FOUGHT" centered />

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}