import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DiagonalSectionProps {
  children: ReactNode;
  direction?: "left" | "right";
  bgColor?: string;
  className?: string;
}

export function DiagonalSection({
  children,
  direction = "right",
  bgColor = "bg-card/30",
  className = "",
}: DiagonalSectionProps) {
  const skewClass = direction === "right" ? "-skew-y-2" : "skew-y-2";
  const unskewClass = direction === "right" ? "skew-y-2" : "-skew-y-2";

  return (
    <div className={`${skewClass} ${bgColor} py-24 overflow-hidden ${className}`} data-testid="diagonal-section">
      <div className={unskewClass}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
