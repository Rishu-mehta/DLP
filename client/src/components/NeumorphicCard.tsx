import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NeumorphicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function NeumorphicCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: NeumorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="group"
      data-testid={`card-neumorphic-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="bg-background rounded-2xl p-8 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.05)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.15),-12px_-12px_24px_rgba(255,255,255,0.08)] transition-all duration-300">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Icon className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground" data-testid={`text-neumorphic-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-neumorphic-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
