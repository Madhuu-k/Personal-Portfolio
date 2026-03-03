import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const contactData = [
  { title: "GITHUB",   link: "https://github.com/Madhuu-k" },
  { title: "LINKEDIN", link: "https://www.linkedin.com/in/madhuu-k/" },
  { title: "EMAIL",    link: "mailto:madhusudhan2k6@gmail.com" }
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

export default function Contact() {
  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageTitle
          title="SUMMON"
          info="SUMMON THE ENGINEER"
          centered
        />
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
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{contact.title}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="contact-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.9 }}
      >
        © 2026 Madhu. All rights reserved.
      </motion.p>
    </div>
  );
}