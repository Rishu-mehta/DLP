import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SplitSection } from "@/components/layouts/SplitSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".timeline-item").forEach((elem: any, index) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveYear(index),
          onEnterBack: () => setActiveYear(index),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "DLP Global Skillers Solutions was founded with a vision to bridge the skills gap and empower individuals through transformative education.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      year: "2017",
      title: "Program Expansion",
      description: "Launched comprehensive non-tech training programs, expanding our impact beyond technical skills to include leadership and business competencies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      year: "2019",
      title: "Job Placement Launch",
      description: "Established dedicated career services, creating a direct bridge between trained professionals and leading companies seeking skilled talent.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      year: "2021",
      title: "IT Services Division",
      description: "Expanded into custom IT solutions, offering software development and enterprise technology consulting to complement our training programs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    },
    {
      year: "2023",
      title: "Global Impact",
      description: "Reached milestone of 10,000+ trained professionals and established partnerships with 500+ companies across multiple continents.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    },
  ];

  const cultureMosaic = [
    {
      title: "Innovation First",
      description: "Embracing new technologies and methodologies to stay ahead",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    },
    {
      title: "Collaborative Spirit",
      description: "Building success through teamwork and shared knowledge",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
    {
      title: "Continuous Learning",
      description: "Never stop growing, never stop improving",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    },
    {
      title: "Global Mindset",
      description: "Diverse perspectives driving innovative solutions",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Empowering Skills, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creating Futures</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12">
              We're more than a training company—we're architects of career transformations, building bridges between talent and opportunity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: "Our Mission", desc: "Empower individuals with skills for the digital age" },
                { icon: Eye, title: "Our Vision", desc: "World's leading skills development platform" },
                { icon: Heart, title: "Our Values", desc: "Excellence, integrity, innovation, inclusivity" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-timeline-title">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-timeline-description">
              A decade of growth, innovation, and impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="lg:sticky lg:top-24 lg:h-[600px] flex items-center justify-center">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <img
                  src={timeline[activeYear].image}
                  alt={timeline[activeYear].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-6xl font-bold text-primary mb-2">{timeline[activeYear].year}</div>
                  <div className="text-2xl font-bold text-foreground">{timeline[activeYear].title}</div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="timeline-item"
                >
                  <Card
                    className={`bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300 ${
                      activeYear === index ? "ring-2 ring-primary" : ""
                    }`}
                    data-testid={`card-timeline-${index}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold" data-testid={`badge-timeline-number-${index}`}>
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary" data-testid={`text-timeline-year-${index}`}>{item.year}</div>
                          <h3 className="text-xl font-bold text-foreground" data-testid={`text-timeline-title-${index}`}>{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground" data-testid={`text-timeline-description-${index}`}>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Culture & Values
            </h2>
            <p className="text-lg text-muted-foreground">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cultureMosaic.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        leftContent={
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of a community that's shaping the future of work. Whether you're looking to learn, grow, or transform your career—we're here for you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">10,000+ Students</div>
                  <div className="text-sm text-muted-foreground">Trained and employed</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+ Partnerships</div>
                  <div className="text-sm text-muted-foreground">Leading companies worldwide</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">95% Success Rate</div>
                  <div className="text-sm text-muted-foreground">Job placement within 6 months</div>
                </div>
              </div>
            </div>
            <Button size="lg" className="mt-8 group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        }
        rightContent={
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop",
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        }
        className="bg-background"
      />
    </div>
  );
}
