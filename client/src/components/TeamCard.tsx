import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  delay?: number;
}

export default function TeamCard({
  name,
  role,
  bio,
  image,
  delay = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-team-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </h3>
            <p className="text-sm text-primary font-medium" data-testid={`text-team-role-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {role}
            </p>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground" data-testid={`text-team-bio-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {bio}
          </p>
          <div className="flex space-x-2">
            <button
              className="h-9 w-9 rounded-md bg-muted/50 hover-elevate flex items-center justify-center text-muted-foreground transition-colors"
              aria-label="LinkedIn"
              data-testid={`button-linkedin-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <FaLinkedin className="h-4 w-4" />
            </button>
            <button
              className="h-9 w-9 rounded-md bg-muted/50 hover-elevate flex items-center justify-center text-muted-foreground transition-colors"
              aria-label="Twitter"
              data-testid={`button-twitter-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <FaTwitter className="h-4 w-4" />
            </button>
            <button
              className="h-9 w-9 rounded-md bg-muted/50 hover-elevate flex items-center justify-center text-muted-foreground transition-colors"
              aria-label="Email"
              data-testid={`button-email-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Mail className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
