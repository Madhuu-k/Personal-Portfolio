import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import mongoDB from "./images/MONGODB.jpg"; 
import oracle from "./images/ORACLE.png";
import pythonUdem from "./images/PYTHON-UDEM.png";
import virtualIntern from "./images/VIR-INT.png";
import mongodbCert from "./pdfs/mongodbAssc.pdf"
import oracleCert from "./pdfs/oracleGenAi.pdf";
import pythoncert from "./pdfs/PYTHON-UDEM.jpg"
import virtualInternCert from "./pdfs/virtualIntern.pdf";

const certs = [
  {
    id: "cert-1",
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB University",
    date: "2025",
    image: mongoDB,
    view: "https://drive.google.com/file/d/1FeA6IWdk1YwsKtpFXyT-i-P8LTZoiY4z/view?usp=drive_link",       // replace with credential URL
    download: mongodbCert, // downloads the PDF directly
  },
  {
    id: "cert-2",
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    image: oracle,
    view: "https://drive.google.com/file/d/1vUvN5KtAfq3KNlBXblXNxemPVa0lbFFw/view?usp=sharing",
    download: oracleCert,
  },
  {
    id: "cert-3",
    title: "Python Programming Certification",
    issuer: "Udemy",
    date: "2024",
    image: pythonUdem,
    view: "https://drive.google.com/file/d/1Z9NtmWhwVi-Jl6M9J0Lbx3rZzJLpPgQu/view?usp=sharing",
    download: pythoncert,
  },
  {
    id: "cert-4",
    title: "Virtual Internship Program",
    issuer: "SkillDzire",
    date: "2024",
    image: virtualIntern,
    view: "https://drive.google.com/file/d/17M0o8VP2PfFrWmr-qo5ADgjFVydUnAki/view?usp=sharing",
    download: virtualInternCert,
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
          <motion.div
            key={cert.id}
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

            {/* Text + buttons — always at bottom */}
            <div className="cert-body">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
              </div>

              {/* View + Download buttons */}
              <div className="cert-actions">
                <a
                  href={cert.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn cert-btn--view"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>↗ VIEW</span>
                </a>
                <a
                  href={cert.download}
                  download={`${cert.title}.png`}
                  className="cert-btn cert-btn--download"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>↓ DOWNLOAD</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}