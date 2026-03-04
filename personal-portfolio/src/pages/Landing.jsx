import { motion } from "framer-motion";
import PageTitle from '../components/PageTitle.jsx';
import Button from '../components/Button.jsx';

const fade = (delay, y = 20) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
  }
});

export default function Landing({ onStart }) {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <motion.div
        className="arena-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1 }}
      />

      <div className="corner-tl" />
      <div className="corner-bl" />

      {/* System status — top right, 0.2s */}
      <motion.div className="sys-status" variants={fade(0.2)} initial="hidden" animate="visible">
        <p className="status-text">SYSTEM STATUS: ONLINE</p>
      </motion.div>

      {/* Name — 0.4s */}
      <motion.div variants={fade(0.4, 40)} initial="hidden" animate="visible">
        <PageTitle title="HELLO, I'M MADHU" info="SOFTWARE ENGINEER" />
      </motion.div>

      {/* Buttons — 1.8s */}
      <motion.div className="landing-body" variants={fade(1.8)} initial="hidden" animate="visible">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button text="ENTER THE ARENA" onClick={onStart} />
        </motion.div>
        <motion.a
          href="/Madhu's_Resume.pdf"
          download
          className="resume-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          ↓ &nbsp; DOWNLOAD RESUME
        </motion.a>
      </motion.div>

      {/* Version — 2.3s */}
      <motion.div className="version-info" variants={fade(2.3)} initial="hidden" animate="visible">
        <p>v2.0.24 // THE TARNISHED SYSTEM</p>
      </motion.div>
    </motion.div>
  );
}