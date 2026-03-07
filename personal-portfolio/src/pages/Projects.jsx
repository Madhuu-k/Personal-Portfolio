import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import plantdiseaseImg from "./images/plantdisease.jpg";
import heartDiseaseImg from "./images/heartdisease.png";
import sudarshanImg from "./images/sudarshan.png";
import pushupCounterImg from "./images/pushup-counter.png";
import apexStockImg from "./images/apexStock.jpg";
import talksmackImg from "./images/talksmack.png";

const projectsData = [
  {
    id: "pushup-counter",
    title: "AI PUSHUP COUNTER",
    description: "Real-time pose estimation system detecting pushups using OpenCV & MediaPipe.",
    stack: ["Python", "Scikit-learn", "OpenCV"],
    image: pushupCounterImg,
    github: "https://github.com/Madhuu-k/Pushup-Counter",
    live: "https://www.linkedin.com/posts/madhuu-k_computervision-machinelearning-opencv-activity-7417543601787650048-gXSM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEzjv4BzeGfH1FOhXAmj1glpZGFDeT8SaU",
  },
  {
    id: "sudarshan",
    title: "SUDARSHAN - AR CHAKRA",
    description: "Real Time Hand Gesture Recognition System",
    stack: ["Azure", "Docker", "GitHub Actions"],
    image: sudarshanImg,
    github: "https://github.com/Madhuu-k/Sudarshan",
    live: "https://www.linkedin.com/posts/madhuu-k_computervision-opencv-mediapipe-activity-7426282371269828609-qxHB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEzjv4BzeGfH1FOhXAmj1glpZGFDeT8SaU",
  },
  {
    id: "heart-disease",
    title: "HEART DISEASE RISK PREDICTION",
    description: "ML-based diagnosis pipeline using structured data",
    stack: ["Python", "Scikit-learn", "Logistic Regression"],
    image: heartDiseaseImg,
    github: "https://github.com/Madhuu-k/Heart-Disease-Prediction-Model",
    live: null,
  },
  {
    id: "apex-stock",
    title: "APEX STOCK",
    description: "Full-stack Inventory Management System for Retail Businesses.",
    stack: ["React", "Flask", "CI/CD"],
    image: apexStockImg,
    github: "https://github.com/Madhuu-k/Apex-Stock",
    live: null,
  },
  {
    id: "plant-leaf-disease",
    title: "PLANT LEAF DISEASE PREDICTION",
    description: "Image-based plant leaf disease prediction using deep learning.",
    stack: ["Python", "DCGAN", "Streamlit"],
    image: plantdiseaseImg,
    github: "https://github.com/Madhuu-k/Plant-Leaf-Disease-Predition",
    live: null,
  },
  {
    id: "talk-smack",
    title: "TALK SMACK - REAL-TIME CHAT",
    description: "Real time chat application with user authentication and message persistence.",
    stack: ["Python", "Flask", "Rest APIs"],
    image: talksmackImg,
    github: "https://github.com/Madhuu-k/Talk-Smack",
    live: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <div className="projects-container">
      <PageTitle
        title="SYSTEMS I BUILT"
        info="Projects where I applied engineering principles to build real working systems."
        centered
      />

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} className="project-card" variants={cardVariants}>

            <div className="project-img-bg">
              {project.image
                ? <img src={project.image} alt={project.title} />
                : <div className="project-img-placeholder"><span>{project.stack[0]}</span></div>
              }
            </div>

            <div className="project-img-fade" />

            <div className="project-body">
              <div className="project-stack">
                {project.stack.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
                    <span>GitHub</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-btn project-btn--live">
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}