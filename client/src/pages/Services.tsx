import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, Briefcase, Server, CheckCircle2, ArrowRight, Laptop, Database, Cloud, Shield, UserCheck, GraduationCap, TrendingUp, Award } from "lucide-react";
import { Link, useLocation } from "wouter";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  //  const [location] = useLocation();
  const [location, setLocation] = useLocation();


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gsap-reveal").forEach((elem: any) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  //  useEffect(() => {
  //   const updateActiveTab = () => {
  //     const hash = window.location.hash;

  //     if (hash === "#tech") setActiveTab(0);
  //     else if (hash === "#nontech" || hash === "#non-tech") setActiveTab(1);
  //     else if (hash === "#jobs") setActiveTab(2);
  //     else if (hash === "#it") setActiveTab(3);

  //     const section = document.querySelector("[data-testid='section-services-tabs']");
  //     if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  //   };

  //   updateActiveTab();
  //   window.addEventListener("hashchange", updateActiveTab);
  //   return () => window.removeEventListener("hashchange", updateActiveTab);
  // }, []);

  useEffect(() => {
    const updateTabFromHash = () => {
      const hash = window.location.hash;
      if (hash === "#tech") setActiveTab(0);
      else if (hash === "#non-tech") setActiveTab(1);
      else if (hash === "#jobs") setActiveTab(2);
      else if (hash === "#it") setActiveTab(3);
    };

    // Run once on mount
    updateTabFromHash();

    // Listen for hash change
    window.addEventListener("hashchange", updateTabFromHash);

    // Cleanup on unmount
    return () => window.removeEventListener("hashchange", updateTabFromHash);
  }, []);

  const tabs = [
    { id: 0, name: "Tech Training", icon: Code },
    { id: 1, name: "Non-Tech Training", icon: Users },
    { id: 2, name: "Job Offerings", icon: Briefcase },
    { id: 3, name: "IT Services", icon: Server },
  ];

  const servicesContent = [
    {
      title: "Tech Training",
      subtitle: "Master the technologies shaping tomorrow",
      items: [
        { icon: Code, name: "Full-Stack Development", desc: "Build complete web applications", features: ["React & Node.js", "Database design", "API development"], path: "/services/FullStackDetail" },
        { icon: Cloud, name: "Cloud Computing", desc: "Deploy and scale on major platforms", features: ["AWS & Azure", "DevOps pipelines", "Containerization"], path: "/services/Cloud" },
        { icon: Database, name: "Data Science & AI", desc: "Harness data for intelligent insights", features: ["Machine learning", "Python analytics", "Deep learning"], path: "/services/DataScience" },
      ],
    },
    {
      title: "Non-Tech Training",
      subtitle: "Develop the skills that set you apart",
      items: [
        { icon: Users, name: "Leadership Development", desc: "Inspire and manage effectively", features: ["Team management", "Conflict resolution", "Strategic thinking"], path: "/services/leadership" },
        { icon: TrendingUp, name: "Business Skills", desc: "Core competencies for growth", features: ["Project management", "Financial literacy", "Communication"], path: "/services/Bussiness" },
        { icon: Award, name: "Soft Skills Training", desc: "Essential interpersonal abilities", features: ["Effective communication", "Time management", "Emotional intelligence"], path: "/services/SoftSkill" },
      ],
    },
    {
      title: "Job Offerings",
      subtitle: "Connect with your next opportunity",
      items: [
        { icon: UserCheck, name: "Career Counseling", desc: "Personalized career guidance", features: ["One-on-one mentoring", "Career path planning", "Skills assessment"], path: "/services/Career" },
        { icon: Briefcase, name: "Job Placement", desc: "Direct connections with employers", features: ["Exclusive job listings", "Company introductions", "Placement assistance"], path: "/services/JobPlacement" },
        { icon: GraduationCap, name: "Interview Preparation", desc: "Build interview confidence", features: ["Mock interviews", "Resume optimization", "Negotiation strategies"], path: "/services/InterviewPrep" },
      ],
    },
    {
      title: "IT Services",
      subtitle: "Custom solutions for your business",
      items: [
        { icon: Laptop, name: "Web Development", desc: "Modern web applications", features: ["Responsive design", "E-commerce solutions", "Progressive web apps"], path: "/services/webdev" },
        { icon: Server, name: "Enterprise Solutions", desc: "Scalable systems for organizations", features: ["CRM & ERP systems", "Business intelligence", "Integration services"], path: "/services/enterprise" },
        { icon: Shield, name: "Cloud & Security", desc: "Secure infrastructure solutions", features: ["Cloud migration", "Security audits", "Compliance management"], path: "/services/cloudDetails" },
      ],
    },
  ];

  const currentService = servicesContent[activeTab];


  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive solutions designed to empower individuals and transform organizations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-services-tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16" data-testid="tabs-services">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="lg"
                className="group"
                data-testid={`button-tab-${tab.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.name}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid={`text-service-category-title-${activeTab}`}>
                  {currentService.title}
                </h2>
                <p className="text-lg text-muted-foreground" data-testid={`text-service-category-subtitle-${activeTab}`}>
                  {currentService.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentService.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 overflow-hidden group" data-testid={`card-service-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <CardContent className="p-0">
                        <div className="p-8 pb-6">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" data-testid={`icon-service-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            <item.icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3" data-testid={`text-service-name-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.name}
                          </h3>
                          <p className="text-muted-foreground mb-6" data-testid={`text-service-desc-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.desc}
                          </p>
                        </div>

                        <div className="bg-muted/30 p-8 pt-6">
                          <div className="space-y-3 mb-6">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button
                            onClick={(e) => {
                              e.preventDefault();
                              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                              setLocation(item.path);
                            }}
                            className="w-full group/btn"
                            data-testid={`button-learn-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="gsap-reveal py-16 md:py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Capability Matrix
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive service offerings across all domains
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-card/50 backdrop-blur-sm border border-card-border rounded-tl-2xl">
                    <span className="text-foreground font-semibold">Service Domain</span>
                  </th>
                  <th className="p-4 text-center bg-card/50 backdrop-blur-sm border border-card-border">
                    <span className="text-foreground font-semibold">Foundation</span>
                  </th>
                  <th className="p-4 text-center bg-card/50 backdrop-blur-sm border border-card-border">
                    <span className="text-foreground font-semibold">Advanced</span>
                  </th>
                  <th className="p-4 text-center bg-card/50 backdrop-blur-sm border border-card-border rounded-tr-2xl">
                    <span className="text-foreground font-semibold">Expert</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { domain: "Tech Training", levels: ["✓", "✓", "✓"] },
                  { domain: "Non-Tech Training", levels: ["✓", "✓", "✓"] },
                  { domain: "Job Placement", levels: ["✓", "✓", "—"] },
                  { domain: "IT Services", levels: ["✓", "✓", "✓"] },
                ].map((row, index) => (
                  <motion.tr
                    key={row.domain}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="hover-elevate transition-all duration-300"
                  >
                    <td className="p-4 bg-card/30 backdrop-blur-sm border border-card-border">
                      <span className="font-medium text-foreground">{row.domain}</span>
                    </td>
                    {row.levels.map((level, idx) => (
                      <td key={idx} className="p-4 text-center bg-card/30 backdrop-blur-sm border border-card-border">
                        <span className={`text-xl ${level === "✓" ? "text-primary" : "text-muted-foreground"}`}>
                          {level}
                        </span>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
