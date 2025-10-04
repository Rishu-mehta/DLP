import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${className}`} data-testid="bento-grid">
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: "1" | "2" | "3" | "4";
  rowSpan?: "1" | "2" | "3";
  delay?: number;
}

export function BentoCard({ children, className = "", colSpan = "1", rowSpan = "1", delay = 0 }: BentoCardProps) {
  const colSpanClasses = {
    "1": "md:col-span-1",
    "2": "md:col-span-2",
    "3": "md:col-span-3",
    "4": "md:col-span-4",
  };

  const rowSpanClasses = {
    "1": "md:row-span-1",
    "2": "md:row-span-2",
    "3": "md:row-span-3",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-6 hover-elevate transition-all duration-300 ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}`}
      data-testid={`bento-card-${colSpan}x${rowSpan}`}
    >
      {children}
    </motion.div>
  );
}
