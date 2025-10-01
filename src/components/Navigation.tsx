import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Fleet", path: "fleet" },
    { name: "Packages", path: "packages" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleQuickContactClick = () => {
    const phoneNumber = "9900987878";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // navigate home first
      setTimeout(() => {
        const el = document.getElementById("home");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200); // delay to ensure DOM updates
    } else {
      const el = document.getElementById("home");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              BANGALORE CABS
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              SERVICE
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.path === "fleet" || link.path === "packages" ? (
                <button
                  key={link.path}
                  onClick={() => handleScrollToSection(link.path)}
                  className={`text-sm font-medium transition-colors hover:text-accent text-foreground`}
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop Phone Number Display */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleQuickContactClick}
              className="flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full hover:shadow-elegant transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-accent-foreground/80">Call Us Now</div>
                <div className="text-lg font-bold text-accent-foreground tracking-wide">+91 9900987878</div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.path === "fleet" || link.path === "packages" ? (
                  <button
                    key={link.path}
                    onClick={() => handleScrollToSection(link.path)}
                    className="text-sm font-medium transition-colors hover:text-accent text-foreground text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-accent ${
                      location.pathname === link.path
                        ? "text-accent"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <button
                onClick={handleQuickContactClick}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-accent rounded-lg hover:shadow-elegant transition-all duration-300 w-full"
              >
                <Phone className="h-5 w-5 text-accent-foreground" />
                <div className="text-center">
                  <div className="text-xs font-medium text-accent-foreground/80">Call Us</div>
                  <div className="text-base font-bold text-accent-foreground">+91 9900987878</div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
