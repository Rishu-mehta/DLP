import { motion } from "framer-motion";

interface ScrollingMarqueeProps {
  items: string[];
  speed?: number;
}

export function ScrollingMarquee({ items, speed = 20 }: ScrollingMarqueeProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden py-8 bg-card/30 border-y border-border" data-testid="scrolling-marquee">
      <motion.div
        className="flex gap-12"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-2xl font-semibold text-muted-foreground whitespace-nowrap"
            data-testid={`marquee-item-${index}`}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
