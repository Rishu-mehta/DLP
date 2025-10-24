import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText, MessageSquare, Handshake, CheckCircle2, Target, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function InterviewPreparationDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: MessageSquare,
      title: "Mock Interviews",
      desc: "Practice realistic interview sessions with expert mentors to simulate HR, technical, and behavioral interview scenarios. Get detailed feedback to build confidence and improve performance."
    },
    {
      icon: FileText,
      title: "Resume Optimization",
      desc: "Create a job-winning resume that highlights your skills, achievements, and strengths. Our team helps you tailor your resume for specific roles and industries."
    },
    {
      icon: Handshake,
      title: "Negotiation Strategies",
      desc: "Learn how to confidently negotiate your salary, benefits, and work terms. Develop communication and persuasion skills to secure the best offers."
    }
  ];

  const benefits = [
    "Boosts confidence with realistic interview practice.",
    "Professional feedback to identify improvement areas.",
    "Learn to craft a strong personal brand through resume and speaking skills.",
    "Gain negotiation techniques to maximize job offers and opportunities."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Interview Preparation
      </h2>

      {/* Intro paragraph */}
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Build interview confidence and stand out in competitive hiring processes with 
        <span className="text-primary font-semibold"> DLP Global Skillers Solutions</span>.  
        From mock interviews and resume building to advanced negotiation tactics, we help you 
        perform your best and land the job you deserve.
      </p>

      {/* Topics Section */}
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
           
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Prepare Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">How to Prepare for Interviews</h3>
        <p className="text-muted-foreground mb-2">
          Start by understanding the job role and company. Research common questions and prepare STAR-based 
          (Situation, Task, Action, Result) responses. Through DLP Global Skillers Solutions, participate in 
          guided mock interviews, polish your resume with expert input, and build strong communication and 
          negotiation skills that set you apart from other candidates.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Interview Preparation</h3>
        <ul className="space-y-2">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Career Growth Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Career Growth & Long-Term Value</h3>
        <p className="text-muted-foreground">
          Strong interview skills can make the difference between being shortlisted or overlooked. 
          With <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>, 
          you’ll gain not only the technical and behavioral preparation needed for interviews but 
          also the confidence and communication skills that accelerate your career advancement.
        </p>
      </motion.div>
    </motion.div>
  );
}
