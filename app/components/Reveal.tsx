"use client";

import React from "react";
import { motion } from "motion/react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    // Safari < 14
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  return reduced;
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  viewportMargin = "-90px",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  viewportMargin?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

