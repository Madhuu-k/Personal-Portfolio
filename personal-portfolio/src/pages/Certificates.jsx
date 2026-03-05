import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import mongoDB from "./images/MONGODB.jpg"; 
import oracle from "./images/ORACLE.png";
import pythonUdem from "./images/PYTHON-UDEM.png"
import virtualIntern from "./images/VIR-INT.png"

/**
 * Add cert images by importing them at the top:
 *   import az900 from "../assets/certs/az900.png";
 * Then set image: az900 in the cert object.
 */
const certs = [
  {
    id: "cert-1",
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB University",
    date: "2025",
    image: mongoDB,
    link: "#",
  },
  {
    id: "cert-2",
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    image: oracle,
    link: "#",
  },
  {
    id: "cert-3",
    title: "Python From Zero to Hero",
    issuer: "Udemy",
    date: "2024",
    image: pythonUdem,
    link: "#",
  },
  {
    id: "cert-4",
    title: "Virtual Internship Program",
    issuer: "SkillDzire",
    date: "2023",
    image: virtualIntern,
    link: "#",
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

export default function Certificates() {
  return (
    <div className="certificates-section">
      <PageTitle title="RUNES EARNED" centered />

      <motion.div
        className="certificates-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {certs.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            variants={cardVariants}
          >
            {/* Image — slides in from top on hover */}
            <div className="cert-img-bg">
              {cert.image
                ? <img src={cert.image} alt={cert.title} />
                : <div className="cert-img-placeholder"><span>CERT</span></div>
              }
            </div>

            {/* Gradient fade */}
            <div className="cert-img-fade" />

            {/* Text — always at bottom */}
            <div className="cert-body">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}