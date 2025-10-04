import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  delay?: number;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  image,
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 20)}`}
    >
      <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <Badge className="absolute top-4 left-4" data-testid={`badge-blog-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
            {category}
          </Badge>
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span data-testid="text-blog-date">{date}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2" data-testid="text-blog-title">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3" data-testid="text-blog-excerpt">
            {excerpt}
          </p>
          <Button variant="ghost" className="w-full group" data-testid="button-blog-read-more">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
