import { motion } from "framer-motion";

export default function Button({ text, onClick }) {
  return (
    <motion.button
      className="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {text}
    </motion.button>
  );
}