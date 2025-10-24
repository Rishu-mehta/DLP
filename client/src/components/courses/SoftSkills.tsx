import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Clock, HeartHandshake, CheckCircle2, Users2, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function SoftSkills () {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: MessageCircle,
      title: "Effective Communication",
      desc: "Enhance your verbal and written communication to express ideas clearly, build trust, and foster collaboration across diverse teams."
    },
    {
      icon: Clock,
      title: "Time Management",
      desc: "Learn to prioritize tasks, set realistic goals, and manage workloads efficiently to maintain productivity and reduce stress."
    },
    {
      icon: HeartHandshake,
      title: "Emotional Intelligence",
      desc: "Develop self-awareness, empathy, and relationship management skills to handle workplace challenges with composure and understanding."
    }
  ];

  const benefits = [
    "Improves teamwork and collaboration in professional settings.",
    "Boosts self-awareness and adaptability under pressure.",
    "Enhances productivity through better time and stress management.",
    "Strengthens interpersonal relationships and leadership potential."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Soft Skills Training
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Essential interpersonal abilities — Soft Skills Training helps you communicate effectively, manage your time, and build emotional intelligence to thrive in any professional environment.
      </p>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {topics.map((topic) => (
          <Card
            key={topic.title}
            className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <topic.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  {topic.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{topic.desc}</p>

              {/* Inline Learn More Button */}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  setLocation(`/softskills/${topic.title.toLowerCase().replace(/\s+/g, '-')}`);
                }}
                className="w-full group/btn"
                data-testid={`button-learn-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Learn */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">How to Learn</h3>
        <p className="text-muted-foreground mb-2">
          Begin by practicing active listening and empathy in daily conversations. 
          Use planners or digital tools to organize tasks and set priorities for better time management. 
          Participate in workshops, team activities, and feedback sessions to enhance your communication and emotional intelligence skills.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Soft Skills Training</h3>
        <ul className="space-y-2">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Career Scope */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Career & Growth Potential</h3>
        <p className="text-muted-foreground">
          Soft skills are universally valuable across every industry. Professionals with strong communication, emotional intelligence, and time management abilities 
          are often preferred for leadership, client-facing, and managerial roles. 
          These skills can accelerate your career growth, collaboration success, and long-term professional fulfillment.
        </p>
      </motion.div>
    </motion.div>
  );
}
