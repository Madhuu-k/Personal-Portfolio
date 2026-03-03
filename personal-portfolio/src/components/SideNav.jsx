import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function SideNav({ sections }) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          for (const [key, ref] of Object.entries(sections)) {
            if (ref?.current === entry.target) {
              setActiveSection(key);
              break;
            }
          }
        }
      });
    }, observerOptions);

    Object.values(sections).forEach((ref) => {
      if (ref?.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sections).forEach((ref) => {
        if (ref?.current) observer.unobserve(ref.current);
      });
    };
  }, [sections]);

  const scrollTo = (key) => {
    sections[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavItems = [
    { key: "about",        label: "THE TARNISHED" },
    { key: "skills",       label: "THE ARSENAL" },
    { key: "projects",     label: "BATTLES" },
    { key: "certificates", label: "RUNES" },
    { key: "contact",      label: "SUMMON" }
  ];

  const isOnLanding = activeSection === "landing";

  return (
    <AnimatePresence>
      {!isOnLanding && (
        <motion.nav
          className="side-nav"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {NavItems.map(({ key, label }) => (
            <motion.button
              key={key}
              className={`nav-link ${activeSection === key ? "active" : ""}`}
              onClick={() => scrollTo(key)}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="nav-arrow">▸</span>
              {label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}