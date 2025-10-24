import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react"; // 1. Removed Clock import
import bgImage from "../assets/bangalore-vidhana-soudha.jpg";
// 2. Removed the local logo import

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const callUs = () => {
    window.location.href = "tel:+919900987878";
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1F144D] via-[#301A5B] via-[#00F5A0] to-[#00D9F5]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up mt-16 md:mt-32">
          {/* Responsive heading font size */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Experience Premium
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-lg">
              Travel Services
            </span>
          </h1>

          {/* Phone Numbers - Clean Style */}
          <div className="flex flex-col items-center justify-center gap-2 mx-auto py-4">
            <div className="flex items-center gap-3">
              <div
                className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-2xl"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Call us:
              </div>

              {/* 24/7 Logo Icon */}
              <div className="flex items-center gap-2">
                {/* 3. Updated src to the URL */}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/654/654994.png"
                  alt="24/7 Service"
                  className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg"
                />
                <span className="text-2xl md:text-4xl font-black text-cyan-300 drop-shadow-lg">
                  
                </span>
              </div>
            </div>

            <div
              className="flex flex-col items-center gap-1 text-2xl md:text-4xl font-bold text-white tracking-wide drop-shadow-2xl"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              <div>+91 9900987878</div>
              <div>+91 9844822287</div>
            </div>
          </div>

          {/* Responsive paragraph font size */}
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-lg">
            Premium Comfort, Effortless Booking. Travel in a Sedan, Traveller, or
            Toyota Luxury—Your Journey, Perfected.
          </p>

          {/* Responsive button layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="accent" size="xl" onClick={scrollToBooking}>
              Book Now
              <ArrowRight className="h-5 w-5 ml-1" />
            </Button>

            <Button variant="accent" size="xl" onClick={callUs}>
              <Phone className="h-5 w-5 mr-2" />
              Call Us
            </Button>
          </div>

          {/* Responsive stats layout */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[
              { label: "Happy Customers", value: "10,000+" },
              { label: "Years Experience", value: "15+" },
              { label: "Vehicles", value: "50+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm text-white drop-shadow-md">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;