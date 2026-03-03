import PageTitle from '../components/PageTitle.jsx';
import Button from '../components/Button.jsx';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Landing({ onStart }) {
  return (
    <motion.div
      className='landing-container'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Four corner decorations */}
      <div className='corner-tl'></div>
      <div className='corner-bl'></div>

      {/* System Status - top center */}
      <motion.div className='sys-status' variants={textVariants}>
        <p className="status-text">SYSTEM STATUS: ONLINE</p>
      </motion.div>

      {/* Main Title */}
      <motion.div variants={textVariants}>
        <PageTitle
          title="HELLO, I'M MADHU"
          info="SOFTWARE ENGINEER"
          centered
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div className='landing-body' variants={textVariants}>
        <Button text="PRESS ENTER TO BEGIN" onClick={onStart} />
      </motion.div>

      {/* Version bottom center */}
      <div className='version-info'>
        <p>v2.0.24 // THE TARNISHED SYSTEM</p>
      </div>
    </motion.div>
  );
}