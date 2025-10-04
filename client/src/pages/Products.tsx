import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SplitSection } from "@/components/layouts/SplitSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Zap, Shield, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".product-narrative").forEach((elem: any) => {
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

  const products = [
    {
      name: "CodeMaster Pro",
      tagline: "Your Path to Development Excellence",
      description: "Transform from beginner to professional developer with our comprehensive learning platform. Build real projects, master industry tools, and earn certifications that matter.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      category: "Learning Platform",
      rating: 4.8,
      stats: [
        { value: "500+", label: "Coding Challenges" },
        { value: "24/7", label: "Mentor Support" },
        { value: "98%", label: "Completion Rate" },
      ],
      features: ["Interactive coding environment", "Real-world project portfolio", "Industry certifications", "Job placement assistance"],
    },
    {
      name: "SkillTrack LMS",
      tagline: "Enterprise Learning at Scale",
      description: "Advanced learning management system designed for corporate training and workforce development. Track progress, measure impact, and scale your training programs effortlessly.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "Enterprise Solution",
      rating: 4.9,
      stats: [
        { value: "1000+", label: "Courses Hosted" },
        { value: "50K+", label: "Active Learners" },
        { value: "99.9%", label: "Uptime" },
      ],
      features: ["Custom course creation", "Advanced analytics dashboard", "Mobile app access", "SSO integration"],
    },
    {
      name: "CareerPath AI",
      tagline: "AI-Powered Career Intelligence",
      description: "Let artificial intelligence guide your career journey. Get personalized job recommendations, skill gap analysis, and interview preparation powered by machine learning.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      category: "Career Tool",
      rating: 4.7,
      stats: [
        { value: "10K+", label: "Job Matches" },
        { value: "85%", label: "Match Accuracy" },
        { value: "95%", label: "User Satisfaction" },
      ],
      features: ["AI job matching", "Skills gap analysis", "Resume builder with AI suggestions", "Interview simulation"],
    },
  ];

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
              Innovative <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Cutting-edge platforms designed to accelerate learning and drive business transformation
            </p>
          </motion.div>
        </div>
      </section>

      {products.map((product, index) => (
        <SplitSection
          key={product.name}
          reverse={index % 2 === 1}
          className="product-narrative bg-background"
          leftContent={
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="mb-4">{product.category}</Badge>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          }
          rightContent={
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.name}
                </h2>
                <p className="text-xl text-primary mb-6 font-semibold">
                  {product.tagline}
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {product.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button size="lg" className="group">
                  Explore {product.name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          }
        />
      ))}

      <section className="py-16 md:py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with excellence, designed for impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "User-Centric", desc: "Designed with real user needs in mind" },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for performance and speed" },
              { icon: Shield, title: "Enterprise Secure", desc: "Bank-level security standards" },
              { icon: TrendingUp, title: "Proven Results", desc: "Measurable impact on success" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-8 text-center hover-elevate transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
