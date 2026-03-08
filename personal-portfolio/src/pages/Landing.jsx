import { motion } from "framer-motion";
import PageTitle from '../components/PageTitle.jsx';
import Button from '../components/Button.jsx';

const fade = (delay, y = 20) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1], delay }
  }
});

export default function Landing({ onStart }) {
  return (
    <motion.div
      className="landing-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <motion.div
        className="arena-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      />

      <div className="corner-tl" />
      <div className="corner-bl" />

      {/* System status — 0.1s */}
      <motion.div className="sys-status" variants={fade(0.1)} initial="hidden" animate="visible">
        <p className="status-text">SYSTEM STATUS: ONLINE</p>
      </motion.div>

      {/* Name — 0.15s */}
      <motion.div variants={fade(0.15, 30)} initial="hidden" animate="visible">
        <PageTitle title="HELLO, I'M MADHU" info="SOFTWARE ENGINEER • SYSTEM BUILDER" />
      </motion.div>

      {/* Buttons — 0.35s */}
      <motion.div className="landing-body" variants={fade(0.35)} initial="hidden" animate="visible">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Button text="ENTER THE ARENA" onClick={onStart} />
        </motion.div>
        <motion.a
          href="./pdfs/madhu_resume.pdf"
          download="madhu-sudhan-rao-resume.pdf"
          className="resume-btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          ↓ &nbsp; DOWNLOAD CV
        </motion.a>
      </motion.div>

      {/* Version — 0.5s */}
      <motion.div className="version-info" variants={fade(0.5)} initial="hidden" animate="visible">
        <p>v2.0.26 // THE ENGINEERS SYSTEM</p>
      </motion.div>
    </motion.div>
  );
}