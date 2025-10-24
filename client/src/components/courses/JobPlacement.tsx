import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Building2, Users2, CheckCircle2, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function JobPlacementDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: Briefcase,
      title: "Exclusive Job Listings",
      desc: "Access curated job openings from verified companies and partner organizations of DLP Global Skillers Solutions, tailored to your skills and career goals."
    },
    {
      icon: Building2,
      title: "Company Introductions",
      desc: "Get connected directly with hiring managers and HR teams through our placement support network, helping you make strong first impressions."
    },
    {
      icon: Users2,
      title: "Placement Assistance",
      desc: "Receive dedicated support for resume building, mock interviews, and professional profile setup to boost your chances of landing your dream job."
    }
  ];

  const benefits = [
    "Gain access to exclusive job openings across industries.",
    "Personalized placement support and interview guidance.",
    "Strong employer network through DLP Global Skillers Solutions partners.",
    "Higher job placement success with direct recruiter introductions."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Job Placement
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        At <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>, we bridge the gap between skilled candidates and top employers. 
        Our Job Placement program connects you directly with companies, offering exclusive listings, introductions, and end-to-end placement assistance.
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

      {/* How it Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">How Job Placement Works</h3>
        <p className="text-muted-foreground mb-2">
          Once you complete your training or skill development program with DLP Global Skillers Solutions, 
          our placement cell connects you with hiring partners. We guide you through resume refinement, 
          profile optimization, and mock interviews. You’ll also receive access to exclusive openings and 
          direct introductions to companies that are actively hiring for your skill set.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Job Placement</h3>
        <ul className="space-y-2">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Growth Potential */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Career Growth & Opportunities</h3>
        <p className="text-muted-foreground">
          With DLP Global Skillers Solutions’ Job Placement program, you gain more than just job listings — 
          you gain mentorship, visibility, and employer access. From startups to multinational corporations, 
          we help you find the right fit and advance confidently into your career journey.
        </p>
      </motion.div>
    </motion.div>
  );
}
