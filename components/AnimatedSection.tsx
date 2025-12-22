"use client";

import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Component to wrap sections with animation (initial load only)
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
