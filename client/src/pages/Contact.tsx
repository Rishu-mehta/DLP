import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@dlpglobal.com",
      link: "mailto:info@dlpglobal.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Business Street, Tech City, TC 12345",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  const testimonials = [
    {
      quote: "DLP Global transformed my career. The training was comprehensive and the job placement support was exceptional.",
      author: "Michael Chen",
      role: "Full-Stack Developer",
      company: "Tech Corp",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop",
    },
    {
      quote: "The best investment I made in my professional development. The instructors are world-class and the curriculum is cutting-edge.",
      author: "Sarah Williams",
      role: "Data Scientist",
      company: "Analytics Inc",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    },
    {
      quote: "From zero coding experience to landing my dream job in 6 months. DLP Global made it possible.",
      author: "James Rodriguez",
      role: "Software Engineer",
      company: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(43,122,120,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(230,126,34,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let's Start a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Conversation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question or ready to start your journey? Our team is here to help you succeed
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours. We're excited to hear from you!
                </p>
                <ContactForm />
              </motion.div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                              <info.icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h3>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                                  data-testid={`link-info-${index}`}
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-sm text-muted-foreground break-words" data-testid={`text-info-${index}`}>
                                  {info.value}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="mt-8"
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-card-border">
                    <div className="relative h-64 w-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
                      <div className="text-center z-10">
                        <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground px-6">
                          Interactive map location will be displayed here
                        </p>
                      </div>
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl" />
                        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Success stories from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-muted-foreground mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
