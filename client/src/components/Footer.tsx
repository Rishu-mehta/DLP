import { Link } from "wouter";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@assets/WhatsApp Image 2025-09-23 at 22.18.39_bd478b5e_1759513265424.jpg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Insights", path: "/insights" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Tech Training",
    "Non-Tech Training",
    "Job Offerings",
    "IT Services",
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaYoutube, url: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="DLP Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              DLP Global Skillers Solutions
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Empowering Skills, Creating Futures
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-md bg-muted/50 hover-elevate flex items-center justify-center text-muted-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>
                    <a
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@dlpglobal.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">
                  info@dlpglobal.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span data-testid="text-footer-address">
                  123 Business Street, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} DLP Global Skillers Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
