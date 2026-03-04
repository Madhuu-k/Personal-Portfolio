import { motion } from "framer-motion";

export default function Checkpoint({ point }) {
  return (
    <motion.div
      className="checkpoint"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="checkpoint-inner">
        <span className="checkpoint-sog">UP NEXT</span>
        <span className="checkpoint-sep" />
        <span className="checkpoint-title">{point} ahead</span>
      </div>
    </motion.div>
  );
}