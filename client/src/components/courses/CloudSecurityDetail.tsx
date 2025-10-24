import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {   ShieldCheck, FileCheck, CheckCircle2, ArrowRight, CloudLightning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function CloudSecurityDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: CloudLightning,
      title: "Cloud Migration",
      desc: "Learn strategies for moving applications and data securely to cloud platforms like AWS, Azure, and Google Cloud. Master cost optimization and seamless scalability during migration."
    },
    {
      icon: ShieldCheck,
      title: "Security Audits",
      desc: "Understand how to perform security risk assessments and audits to identify vulnerabilities. Learn best practices for protecting infrastructure, networks, and data assets."
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      desc: "Gain knowledge of compliance standards such as ISO 27001, GDPR, and SOC 2. Learn how organizations maintain data privacy and regulatory security requirements."
    }
  ];

  const benefits = [
    "Develop critical skills in cybersecurity and cloud protection.",
    "Learn to secure cloud infrastructures against modern threats.",
    "Understand compliance standards that govern enterprise systems.",
    "Prepare for roles like Cloud Security Engineer or Compliance Analyst."
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
        Cloud & Security
      </h2>

      {/* Intro paragraph */}
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Secure, scalable infrastructure is the backbone of modern organizations.  
        Learn how to design, protect, and maintain cloud systems with{" "}
        <span className="text-primary font-semibold">DLP Global Skillers Solutions</span> — 
        combining performance, compliance, and cybersecurity excellence.
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
                <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{topic.desc}</p>

              {/* Inline Learn More Button */}
              
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How to Learn Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">How to Learn Cloud & Security</h3>
        <p className="text-muted-foreground mb-2">
          Start by understanding cloud fundamentals — compute, networking, and storage. Then move to security layers, 
          encryption, and identity management. Practice by auditing demo environments and implementing compliance 
          policies. Finally, learn automation tools for monitoring and securing large-scale infrastructures on AWS, Azure, or GCP.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Cloud & Security</h3>
        <ul className="space-y-2">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Career Opportunities Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Career Opportunities</h3>
        <p className="text-muted-foreground">
          With the rise of cloud computing and digital threats, roles like Cloud Security Engineer, Compliance Analyst, and Cyber Risk Consultant are in high demand.  
          <span className="text-primary font-semibold"> DLP Global Skillers Solutions</span> helps you build the technical confidence and professional credibility 
          needed to enter this critical domain.
        </p>
      </motion.div>
    </motion.div>
  );
}
