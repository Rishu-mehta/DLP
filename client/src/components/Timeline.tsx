import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative" data-testid="timeline-container">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative flex items-start space-x-6"
            data-testid={`timeline-item-${index}`}
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background z-10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>

            <div className="flex-1 bg-card/50 backdrop-blur-sm border border-card-border rounded-lg p-6 hover-elevate transition-all duration-300">
              <div className="text-sm font-semibold text-primary mb-2" data-testid={`timeline-year-${index}`}>
                {item.year}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`timeline-title-${index}`}>
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`timeline-description-${index}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
