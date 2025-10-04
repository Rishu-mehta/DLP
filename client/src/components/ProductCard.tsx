import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  image: string;
  category: string;
  rating: number;
  delay?: number;
}

export default function ProductCard({
  name,
  description,
  features,
  image,
  category,
  rating,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
      data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <Badge className="absolute top-4 right-4" data-testid={`badge-product-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
            {category}
          </Badge>
          <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium" data-testid="text-product-rating">{rating}</span>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl" data-testid={`text-product-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground" data-testid={`text-product-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">✓</span>
                <span data-testid={`text-product-feature-${index}`}>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full group" data-testid={`button-explore-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            Explore Platform
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
