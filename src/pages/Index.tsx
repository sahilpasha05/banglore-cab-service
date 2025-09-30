import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import FleetCard from "@/components/FleetCard";
import PackageCard from "@/components/PackageCard";
import Footer from "@/components/Footer";
import sedanImage from "@/assets/sedan-white.jpg";
import suvImage from "@/assets/suv-white.jpg";
import vanImage from "@/assets/van-white.jpg";
import busImage from "@/assets/bus-white.jpg";

const Index = () => {
  const fleetData = [
    {
      name: "Toyota Etios",
      price: "₹1300/-",
      image: sedanImage,
      seats: "04 Seats",
    },
    {
      name: "BMW 5 Series",
      price: "₹5999/-",
      image: sedanImage,
      seats: "04 Seats",
    },
    {
      name: "Honda City",
      price: "₹1999/-",
      image: sedanImage,
      seats: "04 Seats",
    },
    {
      name: "AUDI A6",
      price: "₹5999/-",
      image: suvImage,
      seats: "04 Seats",
    },
    {
      name: "Innova Crysta",
      price: "₹2499/-",
      image: vanImage,
      seats: "07 Seats",
    },
    {
      name: "Tempo Traveller",
      price: "₹3999/-",
      image: vanImage,
      seats: "17 Seats",
    },
    {
      name: "Mini Bus",
      price: "₹5999/-",
      image: busImage,
      seats: "32 Seats",
    },
    {
      name: "Luxury Coach",
      price: "₹8999/-",
      image: busImage,
      seats: "52 Seats",
    },
  ];

  const packages = [
    {
      title: "Coorg Paradise",
      destination: "Coorg, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹6,999/-",
      rating: "4.9",
    },
    {
      title: "Ooty Hill Station",
      destination: "Ooty, Tamil Nadu",
      duration: "3 Days 2 Nights",
      price: "₹8,999/-",
      rating: "4.8",
    },
    {
      title: "Gokarna Beach",
      destination: "Gokarna, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹5,999/-",
      rating: "4.7",
    },
    {
      title: "Mysore Heritage",
      destination: "Mysore, Karnataka",
      duration: "1 Day Trip",
      price: "₹2,999/-",
      rating: "4.8",
    },
    {
      title: "Chikmagalur Hills",
      destination: "Chikmagalur, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹7,499/-",
      rating: "4.9",
    },
    {
      title: "Hampi Heritage",
      destination: "Hampi, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹6,499/-",
      rating: "4.8",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BookingForm />

      {/* Fleet Section */}
      <section id="fleet" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles for your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fleetData.map((vehicle, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FleetCard {...vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Holiday Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore amazing destinations with our curated travel packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground">Experience the best in travel services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Professional Drivers",
                description: "Experienced and courteous drivers ensuring your safety and comfort throughout the journey.",
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support to assist you anytime, anywhere during your trip.",
              },
              {
                title: "Best Prices",
                description: "Competitive pricing with no hidden charges. Get the best value for your money.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
