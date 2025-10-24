import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Server, Database, CheckCircle2, Settings, Box } from "lucide-react";

export default function CloudComputingDetail() {
  const topics = [
    {
      icon: Cloud,
      title: "AWS & Azure",
      desc: "Learn the most popular cloud platforms: AWS and Azure. Understand services like EC2, S3, Lambda, and Azure App Services to deploy scalable applications."
    },
    {
      icon: Server,
      title: "DevOps Pipelines",
      desc: "Automate your software deployment with CI/CD pipelines using tools like Jenkins, GitHub Actions, and Azure DevOps. Ensure faster, reliable releases."
    },
    {
      icon: Box,
      title: "Containerization",
      desc: "Master Docker and Kubernetes to containerize applications for consistent deployment across environments and scale easily in production."
    },
    {
      icon: Database,
      title: "Cloud Databases",
      desc: "Learn cloud-based databases like Amazon RDS, DynamoDB, and Azure SQL to store and manage your application data efficiently."
    },
    {
      icon: Settings,
      title: "Infrastructure as Code",
      desc: "Use Terraform or AWS CloudFormation to automate your cloud infrastructure setup, making deployments repeatable and reliable."
    }
  ];

  const benefits = [
    "High-demand skillset for modern IT and software roles.",
    "Ability to deploy scalable applications globally.",
    "Opportunities in cloud consulting, DevOps, and SaaS companies.",
    "Strong foundation for learning AI/ML and serverless architectures."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Cloud Computing
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Cloud Computing allows you to deploy, manage, and scale applications on remote servers, eliminating the need for on-premise infrastructure and enabling global accessibility.
      </p>

      {/* Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {topics.map((topic) => (
          <Card key={topic.title} className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <topic.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{topic.desc}</p>
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
          Start with core cloud concepts and choose a cloud provider (AWS or Azure). Learn virtual servers, storage, and networking. Practice deploying small applications. Then move on to CI/CD pipelines, containerization with Docker/Kubernetes, and Infrastructure as Code tools.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Cloud Computing</h3>
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
        <h3 className="text-2xl font-bold text-foreground mb-4">Career & Salary Potential</h3>
        <p className="text-muted-foreground">
          Cloud Computing specialists are in high demand. Entry-level cloud engineers earn around ₹5-7 LPA, mid-level DevOps or cloud developers earn ₹10-15 LPA, and senior architects can earn ₹20-30+ LPA. Freelancing and consulting opportunities further increase income potential.
        </p>
      </motion.div>
    </motion.div>
  );
}
