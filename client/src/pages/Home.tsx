import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Hero3D from "@/components/Hero3D";
import { BentoGrid, BentoCard } from "@/components/layouts/BentoGrid";
import { DiagonalSection } from "@/components/layouts/DiagonalSection";
import { ScrollingMarquee } from "@/components/layouts/ScrollingMarquee";
import { SplitSection } from "@/components/layouts/SplitSection";
import { Button } from "@/components/ui/button";
import { Code, Users, Briefcase, Server, ArrowRight, CheckCircle2, TrendingUp, Award, Target } from "lucide-react";
import { Link } from "wouter";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

  const partners = ["Microsoft", "Google Cloud", "AWS", "Oracle", "SAP", "Salesforce", "IBM", "Adobe"];

  return (
    <div className="min-h-screen">
      <Hero3D />

      <section className="gsap-reveal py-16 md:py-32 bg-background" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-section-title-services">
              Comprehensive Solutions  
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-section-description-services">
              Four pillars of excellence designed to transform your future
            </p>
          </motion.div>

          <BentoGrid>
            <BentoCard colSpan="2" rowSpan="2" delay={0}>
              <div className="h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <Code className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4" data-testid="text-bento-tech-title">
                    Tech Training
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Master cutting-edge technologies with hands-on projects and real-world applications. From full-stack development to cloud computing and AI.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Industry-standard curriculum</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Live coding sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Portfolio-worthy projects</span>
                  </div>
                  <Button className="mt-4 w-full group" data-testid="button-explore-tech">
                    <Link href="/services#tech">Explore Programs</Link>
                    
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </BentoCard>

            <BentoCard colSpan="2" delay={0.1}>
              <Link href="/services#non-tech"  > 
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-bento-nontech-title">
                    Non-Tech Training
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Develop leadership, communication, and business skills essential for career growth.
                  </p>
                </div>
              </div></Link >
            </BentoCard>

            <BentoCard colSpan="1" delay={0.2}>
              <Link href="/services#jobs"  > 
              <div className="text-center cursor-pointer">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-bento-jobs-title">
                  Job Offerings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect with 500+ partner companies
                </p>
              </div></Link >
            </BentoCard>

            <BentoCard colSpan="1" delay={0.3}>
              <Link href="/services#it"  > 
              <div className="text-center cursor-pointer">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-bento-it-title">
                  IT Services
                </h3>
                <p className="text-sm text-muted-foreground">
                  Custom software solutions
                </p>
              </div></Link >
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      <DiagonalSection direction="right" bgColor="bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="section-learning-earning">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-learning-earning-title">
                From Learning to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Earning</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-learning-earning-description">
                Our proven methodology bridges the gap between education and employment, ensuring you're not just learning—you're building a career.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-3xl font-bold text-foreground">95%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Placement Rate</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-secondary" />
                    <span className="text-3xl font-bold text-foreground">10K+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Success Stories</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-card-border rounded-3xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                {[
                  { step: "01", title: "Enroll", description: "Choose your path and begin your journey" },
                  { step: "02", title: "Learn", description: "Master skills through hands-on projects" },
                  { step: "03", title: "Build", description: "Create a portfolio that showcases expertise" },
                  { step: "04", title: "Launch", description: "Land your dream job with our support" },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 group hover-elevate rounded-xl p-4 transition-all duration-300"
                    data-testid={`step-${item.step}`}
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </DiagonalSection>

      <section className="gsap-reveal py-16 bg-background" data-testid="section-partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-partners-title">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-partners-description">
              Partnering with the world's leading technology companies
            </p>
          </div>
        </div>
        <ScrollingMarquee items={partners} speed={30} />
      </section>

      <SplitSection
        leftContent={
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Why Choose DLP Global</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just teach—we transform. Our holistic approach combines expert instruction, real-world projects, and career support to ensure your success.
            </p>
            <Button size="lg" className="group" data-testid="button-learn-more" >
              <Link href="/about"  >   Learn More About Us  </Link>
            
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        }
        rightContent={
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, title: "Expert Instructors", desc: "Industry veterans" },
              { icon: Target, title: "Focused Curriculum", desc: "Job-ready skills" },
              { icon: TrendingUp, title: "Career Growth", desc: "Continuous support" },
              { icon: CheckCircle2, title: "Proven Results", desc: "10K+ success stories" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl p-6 text-center hover-elevate transition-all duration-300"
                data-testid={`feature-${index}`}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        }
        className="bg-card/30"
      />
    </div>
  );
}
