import { motion } from "framer-motion";
import SideNav from "./SideNav.jsx";

export default function Layout({ sections, children }) {
  return (
    <motion.div
      className="layout-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page frame — constrains content + nav together */}
      <div className="page-frame">
        <SideNav sections={sections} />
        <main>{children}</main>
      </div>
    </motion.div>
  );
}