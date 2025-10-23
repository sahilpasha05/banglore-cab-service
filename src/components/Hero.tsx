import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const callUs = () => {
    window.location.href = "tel:+919900987878";
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#F4EAD5]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up mt-24 md:mt-32">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Experience Premium
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Travel Services
            </span>
          </h1>

          {/* Phone Number Display Below Heading */}
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-accent rounded-full mx-auto w-max">
            <div className="w-10 h-10 bg-background/20 rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="text-xl font-bold text-accent-foreground tracking-wide">
              +91 9900987878
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            Premium Comfort, Effortless Booking. Travel in a Sedan, Traveller, or
            Toyota Luxury—Your Journey, Perfected.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="accent" size="xl" onClick={scrollToBooking}>
              Book Now
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>

            {/* Call Now Button Below Book Now */}
            <Button variant="accent" size="xl" onClick={callUs}>
              <Phone className="h-5 w-5 mr-2" />
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
                <div className="text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;