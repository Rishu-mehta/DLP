import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UserCheck, Route, ClipboardCheck, CheckCircle2, Compass, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Career () {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: UserCheck,
      title: "One-on-One Mentoring",
      desc: "Receive personalized guidance from experienced mentors who help you understand your strengths, explore industries, and prepare for interviews and internships."
    },
    {
      icon: Route,
      title: "Career Path Planning",
      desc: "Chart a clear roadmap for your career — identify goals, choose relevant skills, and plan realistic milestones for professional success."
    },
    {
      icon: ClipboardCheck,
      title: "Skills Assessment",
      desc: "Evaluate your technical and soft skills through expert analysis to uncover growth areas and match you with suitable internship or job opportunities."
    }
  ];

  const benefits = [
    "Personalized guidance tailored to your career goals.",
    "Helps you identify strengths, weaknesses, and ideal job roles.",
    "Builds confidence through structured career planning.",
    "Connects you with internship and job opportunities at DLP Global Skillers Solutions partners."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Career Counseling
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Personalized career guidance — At <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>, 
        we help students and professionals plan their careers with one-on-one mentoring, strategic planning, and skill assessments designed 
        to connect you with the right internships and job opportunities.
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
        <h3 className="text-2xl font-bold text-foreground mb-4">How Career Counseling Works</h3>
        <p className="text-muted-foreground mb-2">
          Start by booking a one-on-one session with a certified mentor at DLP Global Skillers Solutions. 
          You'll undergo a career and skill assessment to evaluate your strengths, preferences, and goals. 
          Based on this, mentors help you plan a personalized career path, recommend relevant training programs, 
          and connect you with suitable internship or job opportunities through our partner network.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Career Counseling</h3>
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
          With personalized career guidance, individuals gain clarity and confidence in pursuing the right path. 
          Whether you’re seeking your first internship, transitioning careers, or aiming for leadership roles, 
          our counseling sessions empower you to make informed choices and unlock high-growth opportunities 
          across industries — all through the expert mentorship of <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>.
        </p>
      </motion.div>
    </motion.div>
  );
}
