import { motion } from "framer-motion";

export default function Checkpoint({ point }) {
  return (
    <motion.div
      className="checkpoint"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Site of Grace */}
      <motion.p
        className="checkpoint-sog"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Site of Grace
      </motion.p>

      {/* Full-width divider line */}
      <div className="checkpoint-divider">
        <motion.div
          className="checkpoint-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Section name — smaller */}
      <motion.h3
        className="checkpoint-title"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        {point} ahead
      </motion.h3>
    </motion.div>
  );
}