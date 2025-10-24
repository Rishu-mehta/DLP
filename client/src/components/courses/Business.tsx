import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, MessageSquare, CheckCircle2, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Business () {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: Briefcase,
      title: "Project Management",
      desc: "Learn to plan, execute, and oversee projects efficiently. Master methodologies like Agile and Scrum to ensure timely and cost-effective delivery."
    },
    {
      icon: BarChart3,
      title: "Financial Literacy",
      desc: "Understand budgeting, forecasting, and financial statements to make data-driven business decisions and manage resources wisely."
    },
    {
      icon: MessageSquare,
      title: "Communication",
      desc: "Develop persuasive and clear communication — both verbal and written — to lead meetings, pitch ideas, and collaborate effectively across teams."
    }
  ];

  const benefits = [
    "Enhances analytical and strategic decision-making.",
    "Improves teamwork and stakeholder communication.",
    "Strengthens financial understanding for better resource allocation.",
    "Opens doors to leadership and consulting opportunities."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Business Skills
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Core competencies for growth — Business Skills empower professionals to manage projects, understand finances, and communicate effectively, driving both personal and organizational success.
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
                <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{topic.desc}</p>

              {/* Inline Learn More Button */}
             
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
          Start by mastering project management fundamentals and tools like Trello, Jira, or Asana. 
          Learn basic finance concepts — budgeting, ROI, and cost analysis — to interpret key financial metrics. 
          Finally, refine your communication skills through presentation practice, feedback sessions, and active listening techniques.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Business Skills</h3>
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
          Business Skills are critical across industries — from startups to enterprises. 
          Professionals can grow into roles such as Business Analyst, Project Manager, or Operations Head. 
          Experienced professionals often transition into senior management, consulting, or entrepreneurship with earning potential of ₹10–25 LPA and beyond.
        </p>
      </motion.div>
    </motion.div>
  );
}
