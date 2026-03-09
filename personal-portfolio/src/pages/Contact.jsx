import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

const contactData = [
  { title: "GITHUB",   link: "https://github.com/Madhuu-k",                                                                                          target: "_blank" },
  { title: "LINKEDIN", link: "https://www.linkedin.com/in/madhuu-k/",                                                                                target: "_blank" },
  { title: "RESUME",   link: "https://raw.githubusercontent.com/Madhuu-k/Personal-Portfolio/main/personal-portfolio/MadhuResume.pdf", download: true, target: "_self"  },
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
            target={contact.target}
            rel="noopener noreferrer"
            download={contact.download ? "MadhuResume.pdf" : undefined}
            className={`contact-link${contact.title === "RESUME" ? " contact-link--resume" : ""}`}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{contact.title === "RESUME" ? "↓ RESUME" : contact.title}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Email line */}
      <motion.p
        className="contact-email"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        REACH OUT AT&nbsp;
        <span className="contact-email-address">madhusudhan2k6@gmail.com</span>
      </motion.p>

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