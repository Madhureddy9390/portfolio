import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./AnimatedStatus.css";

const statuses = [
  "Available for Opportunities",
  "Immediate Joiner",
  "React Frontend Engineer",
  "Open to Full-time Roles",
];

function AnimatedStatus() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statuses.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-status">
      <span className="status-dot" />

      <div className="status-text">
        <AnimatePresence mode="wait">
          <motion.span
            key={statuses[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {statuses[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AnimatedStatus;
