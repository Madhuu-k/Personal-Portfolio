import { motion } from "framer-motion";
import Box from "./Box";
import PageTitle from "../components/PageTitle";

/**
 * Add your real certificates here.
 *
 * Each entry supports:
 *   title    — certificate name (required)
 *   content  — description text, or pass an <img /> JSX element for a badge/image
 *   issuer   — issuing organisation (optional)
 *   date     — year / date string (optional)
 *   link     — credential URL — wraps the whole card in an <a> (optional)
 *
 * Example with image:
 *   content: <img src="/certs/az900.png" alt="AZ-900 badge" />
 */
const certs = [
  {
    title: "Certificate Title 1",
    content: "Credential description goes here. What you learned and what it covers.",
    issuer: "Issuing Body",
    date: "2024",
    link: "#"
  },
  {
    title: "Certificate Title 2",
    content: "Credential description goes here. What you learned and what it covers.",
    issuer: "Issuing Body",
    date: "2024",
    link: "#"
  },
  {
    title: "Certificate Title 3",
    content: "Credential description goes here. What you learned and what it covers.",
    issuer: "Issuing Body",
    date: "2023",
    link: "#"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Certificates() {
  return (
    <div className="certificates-section">
      <PageTitle title="CERTIFICATIONS" centered />

      <motion.div
        className="certificates-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {certs.map((c) => (
          <motion.div key={c.title} variants={cardVariants}>
            <Box
              title={c.title}
              content={c.content}
              issuer={c.issuer}
              date={c.date}
              link={c.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}