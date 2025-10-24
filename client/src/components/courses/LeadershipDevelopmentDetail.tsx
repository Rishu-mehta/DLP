import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Handshake, Brain, CheckCircle2, Compass, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function LeadershipDevelopmentDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: Users,
      title: "Team Management",
      desc: "Develop the ability to lead teams effectively, delegate tasks, set clear expectations, and create a culture of accountability and motivation."
    },
    {
      icon: Handshake,
      title: "Conflict Resolution",
      desc: "Learn techniques to mediate conflicts, foster open communication, and transform disagreements into opportunities for collaboration."
    },
    {
      icon: Brain,
      title: "Strategic Thinking",
      desc: "Strengthen your decision-making skills by understanding long-term goals, analyzing risks, and crafting strategies for organizational growth."
    }
  ];

  const benefits = [
    "Enhances your ability to inspire and influence others.",
    "Improves communication and emotional intelligence.",
    "Builds credibility and confidence in leadership roles.",
    "Increases career advancement opportunities across industries."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Leadership Development
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Inspire and manage effectively — Leadership Development empowers you to guide teams, resolve conflicts, and think strategically to achieve organizational success.
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
                  setLocation(`/leadership/${topic.title.toLowerCase().replace(/\s+/g, '-')}`);
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
          Begin by understanding leadership styles and emotional intelligence. Engage in active listening, team exercises, and feedback sessions. 
          Explore case studies and role-play scenarios to practice decision-making, empathy, and communication under pressure.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Leadership Development</h3>
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
          Leadership skills are essential across every sector. Professionals with strong management and communication abilities often advance into 
          roles like Team Lead, Project Manager, or Director. Senior leadership positions can command salaries upwards of ₹15–40 LPA, 
          along with significant influence and responsibility.
        </p>
      </motion.div>
    </motion.div>
  );
}
