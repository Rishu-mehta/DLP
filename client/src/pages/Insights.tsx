import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { MasonryGrid } from "@/components/layouts/MasonryGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-post",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".featured-post",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const featuredPost = {
    title: "The Future of Tech Training in 2025",
    excerpt: "Discover how emerging technologies like AI, blockchain, and quantum computing are reshaping the landscape of technical education and what it means for aspiring developers.",
    category: "Tech Training",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
  };

  const insights = [
    {
      title: "Building Soft Skills for Career Success",
      excerpt: "Learn why soft skills are just as important as technical abilities in today's competitive job market.",
      category: "Career Tips",
      date: "March 12, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      size: "normal",
    },
    {
      title: "Cloud Computing: A Comprehensive Guide",
      excerpt: "Everything you need to know about cloud computing, from basics to advanced deployment strategies.",
      category: "Technology",
      date: "March 10, 2025",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      size: "normal",
    },
    {
      title: "Data Science Career Roadmap 2025",
      excerpt: "A complete guide to starting and advancing your career in data science.",
      category: "Data Science",
      date: "March 8, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      size: "tall",
    },
    {
      title: "Remote Work: Best Practices",
      excerpt: "Master the art of remote collaboration with proven strategies.",
      category: "Leadership",
      date: "March 5, 2025",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      size: "normal",
    },
    {
      title: "Cybersecurity Essentials",
      excerpt: "Protect your applications with essential security practices.",
      category: "Security",
      date: "March 3, 2025",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      size: "normal",
    },
    {
      title: "AI in Business Transformation",
      excerpt: "How AI is transforming business operations and decision-making.",
      category: "AI & ML",
      date: "March 1, 2025",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      size: "tall",
    },
    {
      title: "Agile Project Management",
      excerpt: "Implement agile methodologies effectively in your projects.",
      category: "Project Management",
      date: "February 28, 2025",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
      size: "normal",
    },
    {
      title: "Full-Stack Development Trends",
      excerpt: "Latest trends in full-stack development for 2025.",
      category: "Development",
      date: "February 25, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      size: "normal",
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
              Latest <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
              Stay informed with the latest trends, tips, and insights from the world of technology and professional development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="featured-post mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <Badge className="absolute top-6 left-6 z-10">{featuredPost.category}</Badge>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="h-10 w-10 rounded-full border-2 border-background"
                    />
                    <div>
                      <div className="text-sm font-medium text-foreground">{featuredPost.author}</div>
                      <div className="text-xs text-muted-foreground">{featuredPost.date}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Featured Article</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button size="lg" className="group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">More Insights</h2>
          </div>

          <MasonryGrid columns={3}>
            {insights.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-card-border rounded-2xl overflow-hidden hover-elevate transition-all duration-300 group">
                  <div className={`relative overflow-hidden ${post.size === 'tall' ? 'h-96' : 'h-64'}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <Button variant="ghost" size="sm" className="w-full group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </MasonryGrid>
        </div>
      </section>
    </div>
  );
}
