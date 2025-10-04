import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverse?: boolean;
  leftBg?: string;
  rightBg?: string;
  sticky?: boolean;
  className?: string;
}

export function SplitSection({
  leftContent,
  rightContent,
  reverse = false,
  leftBg = "",
  rightBg = "",
  sticky = false,
  className = "",
}: SplitSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${className}`} data-testid="split-section">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${leftBg} ${sticky ? "lg:sticky lg:top-20 lg:h-screen" : ""} flex items-center justify-center p-8 lg:p-16`}
        data-testid="split-section-left"
      >
        {leftContent}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${rightBg} flex items-center justify-center p-8 lg:p-16`}
        data-testid="split-section-right"
      >
        {rightContent}
      </motion.div>
    </div>
  );
}
