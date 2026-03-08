import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const contactData = [
  { title: "GITHUB",   link: "https://github.com/Madhuu-k" },
  { title: "LINKEDIN", link: "https://www.linkedin.com/in/madhuu-k/" },
  { title: "EMAIL",    link: "mailto:madhusudhan2k6@gmail.com" },
  { title: "RESUME",   link: "./pdfs/MadhuResume.pdf", download: true },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <PageTitle title="CONTACT ME" info="The Best in The Code" centered />
      </motion.div>

      <motion.div
        className="contact-links"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {contactData.map((contact) => (
          <motion.a
            key={contact.title}
            href={contact.link}
            target={contact.download ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={contact.download ? "Madhu-Sudhan-Rao-Resume.pdf" : undefined}
            className={`contact-link${contact.title === "RESUME" ? " contact-link--resume" : ""}`}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{contact.title === "RESUME" ? "↓ RESUME" : contact.title}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        © 2026 MADHU SUDHAN RAO • BUILT WITH REACT
      </motion.p>
    </div>
  );
}