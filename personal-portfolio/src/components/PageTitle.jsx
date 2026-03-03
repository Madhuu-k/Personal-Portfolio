import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const infoVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }
  }
};

export default function PageTitle({ title, info, centered = false }) {
  return (
    <div className={`page-title${centered ? " centered" : ""}`}>
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>

      {info && (
        <motion.p
          variants={infoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {info}
        </motion.p>
      )}
    </div>
  );
}