import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import vidhanaSoudhaImage from "@/assets/bangalore-vidhana-soudha.jpg";
import palaceImage from "@/assets/bangalore-palace.jpg";
import lalbaghImage from "@/assets/bangalore-lalbagh.jpg";
import cubbonParkImage from "@/assets/bangalore-cubbon-park.jpg";
import ubCityImage from "@/assets/bangalore-ub-city.jpg";

const Hero = () => {
  const images = [
    vidhanaSoudhaImage,
    palaceImage,
    lalbaghImage,
    cubbonParkImage,
    ubCityImage,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const callUs = () => {
    window.location.href = "tel:9900987878"; // Opens dialer
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images with Gradient Overlay */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Your Trusted Travel Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Experience Premium
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Travel Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Book cars, vans, and buses for your perfect journey. Comfortable, reliable, and professional service across Bangalore and beyond.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="accent" size="xl" onClick={scrollToBooking}>
              Book Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="accent" size="xl" onClick={callUs}>
              Call Us
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              { label: "Happy Customers", value: "10,000+" },
              { label: "Years Experience", value: "15+" },
              { label: "Vehicles", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
