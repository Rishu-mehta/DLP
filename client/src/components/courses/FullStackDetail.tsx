import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Code, Database, Server, Cloud } from "lucide-react";

export default function FullStackDetail() {
  const topics = [
    {
      icon: Code,
      title: "React & Node.js",
      desc: "React is a popular front-end library for building interactive UIs, while Node.js allows you to run JavaScript on the server side. Learning these together lets you build full-featured web apps from front-end to back-end."
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "Database design ensures your application can efficiently store, retrieve, and manage data. Learn SQL for relational databases like MySQL/PostgreSQL, and NoSQL for scalable solutions like MongoDB."
    },
    {
      icon: Server,
      title: "API Development",
      desc: "APIs (Application Programming Interfaces) let your front-end communicate with your back-end. You'll learn to create RESTful and GraphQL APIs to handle data requests securely and efficiently."
    }
  ];

  const benefits = [
    "High demand in tech industry with competitive salaries.",
    "Ability to build complete web applications independently.",
    "Opportunities in startups, IT companies, and freelancing.",
    "Foundation for learning advanced technologies like DevOps, Cloud, and AI integration."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Full-Stack Development
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Full-Stack Development is the art of building complete web applications, handling both front-end (user interface) and back-end (server, database, API). It's one of the most versatile and in-demand domains in software development.
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
          Start with front-end basics: HTML, CSS, JavaScript. Then learn React to build dynamic UIs. For back-end, learn Node.js and Express.js to handle server logic, and databases like MySQL or MongoDB. Practice by building small projects and gradually move to complete web applications.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Full-Stack Development</h3>
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
          Full-Stack Developers are highly sought after. Entry-level salaries typically start around ₹4-6 LPA in India, mid-level developers earn ₹8-15 LPA, and senior developers or specialists can earn ₹20+ LPA. With freelancing or startups, income potential is even higher.
        </p>
      </motion.div>
    </motion.div>
  );
}
