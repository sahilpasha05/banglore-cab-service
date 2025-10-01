import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import FleetCard from "@/components/FleetCard";
import PackageCard from "@/components/PackageCard";
import ReviewCard from "@/components/ReviewCard";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { AutoScrollCarousel } from "@/components/AutoScrollCarousel";
import hatchbackImage from "@/assets/hatchback-white.jpg";
import sedanImage from "@/assets/sedan-white.jpg";
import sedanPrimeImage from "@/assets/sedan-prime-white.jpg";
import ertigaImage from "@/assets/ertiga-white.jpg";
import innovaImage from "@/assets/innova-white.jpg";
import crystaImage from "@/assets/crysta-white.jpg";
import hycrossImage from "@/assets/hycross-white.jpg";
import tempoTravellerImage from "@/assets/tempo-traveller-white.jpg";
import urbaniaImage from "@/assets/urbania-white.jpg";
import bus21Image from "@/assets/21-seater-bus-white.jpg";
import bus33Image from "@/assets/33-seater-bus-white.jpg";
import bus50Image from "@/assets/50-seater-bus-white.jpg";
import coorgImage from "@/assets/coorg-destination.jpg";
import ootyImage from "@/assets/ooty-destination.jpg";
import gokarnaImage from "@/assets/gokarna-destination.jpg";
import mysoreImage from "@/assets/mysore-destination.jpg";
import chikmagalurImage from "@/assets/chikmagalur-destination.jpg";
import hampiImage from "@/assets/hampi-destination.jpg";
import goaImage from "@/assets/goa-destination.jpg";
import reviewAvatar1 from "@/assets/review-avatar-1.jpg";
import reviewAvatar2 from "@/assets/review-avatar-2.jpg";
import reviewAvatar3 from "@/assets/review-avatar-3.jpg";
import reviewAvatar4 from "@/assets/review-avatar-4.jpg";
import reviewAvatar5 from "@/assets/review-avatar-5.jpg";

const Index = () => {
  const fleetData = [
    {
      name: "Hatchback",
      price: "₹1,200/-",
      image: hatchbackImage,
      seats: "04 Seats",
    },
    {
      name: "Sedan",
      price: "₹1,500/-",
      image: sedanImage,
      seats: "04 Seats",
    },
    {
      name: "Sedan Prime",
      price: "₹2,000/-",
      image: sedanPrimeImage,
      seats: "04 Seats",
    },
    {
      name: "Ertiga",
      price: "₹1,800/-",
      image: ertigaImage,
      seats: "06 Seats",
    },
    {
      name: "Innova",
      price: "₹2,200/-",
      image: innovaImage,
      seats: "07 Seats",
    },
    {
      name: "Crysta",
      price: "₹2,499/-",
      image: crystaImage,
      seats: "07 Seats",
    },
    {
      name: "Hycross",
      price: "₹2,800/-",
      image: hycrossImage,
      seats: "07 Seats",
    },
    {
      name: "Tempo Traveller",
      price: "₹3,999/-",
      image: tempoTravellerImage,
      seats: "17 Seats",
    },
    {
      name: "Urbania",
      price: "₹4,500/-",
      image: urbaniaImage,
      seats: "17 Seats",
    },
    {
      name: "21 Seater Bus",
      price: "₹4,999/-",
      image: bus21Image,
      seats: "21 Seats",
    },
    {
      name: "33 Seater Bus",
      price: "₹6,999/-",
      image: bus33Image,
      seats: "33 Seats",
    },
    {
      name: "50 Seater Bus",
      price: "₹8,999/-",
      image: bus50Image,
      seats: "50 Seats",
    },
  ];

  const packages = [
    {
      title: "Coorg Paradise",
      destination: "Coorg, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹6,999/-",
      rating: "4.9",
      image: coorgImage,
    },
    {
      title: "Ooty Hill Station",
      destination: "Ooty, Tamil Nadu",
      duration: "3 Days 2 Nights",
      price: "₹8,999/-",
      rating: "4.8",
      image: ootyImage,
    },
    {
      title: "Gokarna Beach",
      destination: "Gokarna, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹5,999/-",
      rating: "4.7",
      image: gokarnaImage,
    },
    {
      title: "Mysore Heritage",
      destination: "Mysore, Karnataka",
      duration: "1 Day Trip",
      price: "₹2,999/-",
      rating: "4.8",
      image: mysoreImage,
    },
    {
      title: "Chikmagalur Hills",
      destination: "Chikmagalur, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹7,499/-",
      rating: "4.9",
      image: chikmagalurImage,
    },
    {
      title: "Hampi Heritage",
      destination: "Hampi, Karnataka",
      duration: "2 Days 1 Night",
      price: "₹6,499/-",
      rating: "4.8",
      image: hampiImage,
    },
    {
      title: "Goa Beaches",
      destination: "Goa",
      duration: "3 Days 2 Nights",
      price: "₹9,999/-",
      rating: "4.9",
      image: goaImage,
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      image: reviewAvatar1,
      rating: 5,
      review: "Excellent service! The driver was professional and the car was clean. Highly recommended for outstation trips.",
    },
    {
      name: "Priya Sharma",
      image: reviewAvatar2,
      rating: 5,
      review: "Amazing experience with Bangalore Cab Service. Punctual, safe, and comfortable journey to Coorg. Will book again!",
    },
    {
      name: "Arun Prakash",
      image: reviewAvatar3,
      rating: 4,
      review: "Great service and reasonable prices. The booking process was smooth and the staff was very helpful.",
    },
    {
      name: "Sneha Reddy",
      image: reviewAvatar4,
      rating: 5,
      review: "Best travel experience! The Innova Crysta was in perfect condition and the driver knew all the best routes.",
    },
    {
      name: "Vikram Singh",
      image: reviewAvatar5,
      rating: 5,
      review: "Professional service from start to finish. The team made our family trip to Ooty memorable and hassle-free.",
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

          <AutoScrollCarousel 
            className="w-full" 
            align="start" 
            basis="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            interval={2000}
          >
            {fleetData.map((vehicle, index) => (
              <FleetCard key={index} {...vehicle} />
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Holiday Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore amazing destinations with our curated travel packages
            </p>
          </div>

          <AutoScrollCarousel 
            className="w-full" 
            align="start" 
            basis="md:basis-1/3"
            interval={2000}
          >
            {packages.map((pkg, index) => (
              <PackageCard key={index} {...pkg} />
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-lg text-muted-foreground">What our customers say about us</p>
          </div>

          <AutoScrollCarousel 
            className="w-full" 
            align="start" 
            basis="md:basis-1/2 lg:basis-1/3"
            interval={2000}
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
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
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
