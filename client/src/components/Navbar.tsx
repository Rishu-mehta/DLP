import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logo from "@assets/WhatsApp Image 2025-09-23 at 22.18.39_bd478b5e_1759513265424.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Tech Training", path: "/services#tech" },
    { name: "Non-Tech Training", path: "/services#non-tech" },
    { name: "Job Offerings", path: "/services#jobs" },
    { name: "IT Services", path: "/services#it" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Products", path: "/products" },
    { name: "Insights", path: "/insights" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaYoutube, url: "#", label: "YouTube" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-background/40 backdrop-blur-md"
      }`}
      data-testid="navbar-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-brand">
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={logo} alt="DLP Logo" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-lg font-semibold text-foreground">
                  DLP Global Skillers Solutions
                </h1>
              </div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover-elevate rounded-md transition-colors"
                    data-testid="button-services-dropdown"
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-popover/95 backdrop-blur-lg border border-popover-border rounded-md shadow-lg overflow-hidden"
                        data-testid="dropdown-services"
                      >
                        {services.map((service, index) => (
                          <Link key={service.name} href={service.path} data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="block px-4 py-3 text-sm text-popover-foreground hover-elevate transition-colors cursor-pointer"
                            >
                              {service.name}
                            </motion.span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.name} href={link.path} data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate cursor-pointer ${
                      location === link.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                size="icon"
                variant="ghost"
                className="h-9 w-9"
                asChild
                data-testid={`button-social-${social.label.toLowerCase()}`}
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-popover/95 backdrop-blur-lg border-t border-popover-border"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-foreground hover-elevate rounded-md"
                      data-testid="button-mobile-services"
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-1 mt-1"
                        >
                          {services.map((service) => (
                            <Link key={service.name} href={service.path} data-testid={`link-mobile-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}>
                              <span
                                className="block px-3 py-2 text-sm text-muted-foreground hover-elevate rounded-md cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.name} href={link.path} data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span
                      className={`block px-3 py-2 text-base font-medium rounded-md hover-elevate cursor-pointer ${
                        location === link.path
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </span>
                  </Link>
                )
              )}
              <div className="flex items-center space-x-2 px-3 pt-4 border-t border-border mt-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9"
                    asChild
                    data-testid={`button-mobile-social-${social.label.toLowerCase()}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
