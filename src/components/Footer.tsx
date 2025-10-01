import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              BANGALORE CAB SERVICE
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted travel partner for comfortable and reliable journeys across Karnataka.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61581385033094"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bangalurucabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><a href="/#fleet" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Fleet</a></li>
              <li><a href="/#packages" className="text-primary-foreground/80 hover:text-accent transition-colors">Packages</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Car Booking</li>
              <li className="text-primary-foreground/80">Van Booking</li>
              <li className="text-primary-foreground/80">Mini Bus Booking</li>
              <li className="text-primary-foreground/80">Bus Booking</li>
              <li className="text-primary-foreground/80">Holiday Packages</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <a href="tel:+918147260587" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 9900987878
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <a href="mailto:bangalurucabs7@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  bangalurucabs7@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Bangalore Cab Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
