import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Database, Cpu, TrendingUp, CheckCircle2, Code, Layers } from "lucide-react";

export default function DataScienceDetail() {
  const topics = [
    {
      icon: Cpu,
      title: "Machine Learning",
      desc: "Understand algorithms that allow computers to learn from data. Build predictive models for classification, regression, and recommendation systems."
    },
    {
      icon: Code,
      title: "Python Analytics",
      desc: "Leverage Python libraries like Pandas, NumPy, and Matplotlib to clean, process, visualize, and analyze data effectively."
    },
    {
      icon: Layers,
      title: "Deep Learning",
      desc: "Dive into neural networks, CNNs, and RNNs to create advanced AI solutions like image recognition, NLP, and autonomous systems."
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Learn to manage, store, and process large datasets using SQL, NoSQL databases, and ETL pipelines."
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      desc: "Transform raw data into actionable insights for decision making and business strategy."
    }
  ];

  const benefits = [
    "High-demand skillset in AI, analytics, and tech industry.",
    "Ability to make data-driven decisions.",
    "Opportunities in startups, MNCs, and consulting.",
    "Foundation for advanced AI research and product development."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-10"
    >
      <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
        Data Science & AI
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Learn to harness data for intelligent insights. From cleaning and visualizing data to building predictive models and deep learning solutions, this domain equips you with the tools to transform information into impactful decisions.
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
          Start with Python and data analysis libraries. Move on to machine learning algorithms and projects. Then explore deep learning models using frameworks like TensorFlow and PyTorch. Practice with real datasets to gain practical experience.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Data Science & AI</h3>
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
          Data Science and AI professionals are highly sought after. Entry-level data analysts earn ₹4-6 LPA, data scientists earn ₹10-15 LPA, and senior AI/ML engineers can earn ₹20-35+ LPA. Freelancing, AI consulting, and research roles further enhance opportunities.
        </p>
      </motion.div>
    </motion.div>
  );
}
