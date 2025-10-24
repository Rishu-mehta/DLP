import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, BarChart3, Share2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function EnterpriseSolutionsDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: Building2,
      title: "CRM & ERP Systems",
      desc: "Understand and implement Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems like Salesforce, SAP, and Oracle to optimize enterprise operations."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      desc: "Learn to leverage BI tools such as Power BI and Tableau to analyze data, generate insights, and support strategic decision-making across organizational departments."
    },
    {
      icon: Share2,
      title: "Integration Services",
      desc: "Master integration techniques using APIs, middleware, and cloud connectors to ensure smooth communication between enterprise software systems."
    }
  ];

  const benefits = [
    "Develop enterprise-level skills valued by large organizations.",
    "Learn to manage complex, interconnected business systems.",
    "Gain knowledge in automation, analytics, and digital transformation.",
    "Open doors to roles in enterprise consulting and IT architecture."
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
        Enterprise Solutions
      </h2>

      {/* Intro paragraph */}
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Build scalable, integrated systems that empower organizations to streamline workflows, manage data efficiently, and make informed business decisions — all with{" "}
        <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>.
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
        <h3 className="text-2xl font-bold text-foreground mb-4">How to Learn Enterprise Solutions</h3>
        <p className="text-muted-foreground mb-2">
          Begin by understanding how enterprises manage data and processes. Learn CRM and ERP platforms such as Salesforce and SAP. 
          Explore BI tools like Power BI and Tableau to visualize business data. Finally, master integration tools and APIs to connect multiple enterprise systems and drive digital efficiency.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Enterprise Solutions</h3>
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
          With expertise in Enterprise Solutions, you can pursue roles such as ERP Consultant, CRM Specialist, BI Analyst, or Enterprise Integration Engineer.  
          <span className="text-primary font-semibold"> DLP Global Skillers Solutions</span> connects you directly with organizations seeking skilled professionals for digital transformation projects.
        </p>
      </motion.div>
    </motion.div>
  );
}
