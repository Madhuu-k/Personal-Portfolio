import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const projectsData = {
  "gesture-system": {
    title: "Gesture Gated Air Interaction",
    description:
      "Real-time hand tracking system enabling pinch zoom and air mouse control using MediaPipe and OpenCV.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    demo: "#"
  },
  "productivity-tracker": {
    title: "Gym & Productivity System",
    description:
      "Integrated system tracking workouts, diet, sleep, and productivity with structured backend logic.",
    tech: ["Flask", "SQLite", "AI Logic"],
    github: "#",
    demo: "#"
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return <h2>Project not found.</h2>;
  }

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link to="/projects">← Back to Projects</Link>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div>
        <h3>Tech Stack</h3>
        <ul>
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={project.demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}