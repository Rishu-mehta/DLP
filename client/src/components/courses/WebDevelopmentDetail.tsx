import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingBag, Rocket, CheckCircle2, Globe, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function WebDevelopmentDetail() {
  const [, setLocation] = useLocation();

  const topics = [
    {
      icon: MonitorSmartphone,
      title: "Responsive Design",
      desc: "Learn how to create user-friendly websites that adapt seamlessly across devices using HTML5, CSS3, and modern frameworks like Tailwind CSS and Bootstrap."
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      desc: "Build secure and scalable e-commerce platforms with payment integration, inventory management, and customer engagement features using React, Node.js, and databases."
    },
    {
      icon: Rocket,
      title: "Progressive Web Apps (PWA)",
      desc: "Develop lightning-fast PWAs that offer offline capabilities, push notifications, and app-like user experiences with frameworks such as Next.js and Vite."
    }
  ];

  const benefits = [
    "Master front-end and back-end technologies for full-stack web apps.",
    "Learn modern design and deployment practices for real-world projects.",
    "Gain hands-on experience building responsive and scalable applications.",
    "Boost your employability with a portfolio ready for internships and jobs."
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
        Web Development
      </h2>

      {/* Intro paragraph */}
      <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Build modern, responsive, and scalable web applications with{" "}
        <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>.  
        This course equips you with the technical and creative skills needed to develop high-performance websites and web apps for today’s digital world.
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

      {/* How to Learn Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">How to Learn Web Development</h3>
        <p className="text-muted-foreground mb-2">
          Begin with the fundamentals of HTML, CSS, and JavaScript. Progress to advanced frameworks such as 
          React, Next.js, and Node.js to build dynamic front-end and back-end systems. Practice by creating 
          real-world projects — portfolios, e-commerce platforms, and PWAs — to strengthen your skills and 
          prepare for internships or freelance opportunities through{" "}
          <span className="text-primary font-semibold">DLP Global Skillers Solutions</span>.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-4">Benefits of Learning Web Development</h3>
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
          Skilled web developers are in constant demand across industries. Graduates of this program can pursue 
          roles such as Front-End Developer, Full-Stack Engineer, or UI/UX Developer. With DLP Global Skillers 
          Solutions’ job placement and project assistance, you’ll gain real-world exposure and a strong portfolio 
          to advance your career in tech.
        </p>
      </motion.div>
    </motion.div>
  );
}
