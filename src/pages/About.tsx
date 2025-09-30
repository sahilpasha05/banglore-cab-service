import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Car, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Siddeshwara Travels</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in premium travel services since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Siddeshwara Travels was founded with a simple mission: to provide reliable, comfortable, and 
                professional travel services to our customers. Over the years, we have grown from a small local 
                operator to one of the most trusted travel service providers in Bangalore and Karnataka.
              </p>
              <p className="text-muted-foreground mb-4">
                With over 15 years of experience in the travel industry, we have served thousands of satisfied 
                customers, helping them create memorable journeys. Our commitment to excellence, safety, and 
                customer satisfaction has made us the preferred choice for both corporate and leisure travelers.
              </p>
              <p className="text-muted-foreground">
                Today, we operate a modern fleet of vehicles and continue to expand our services to meet the 
                evolving needs of our customers. Whether it's a business trip, a family vacation, or a pilgrimage, 
                we are here to make your journey comfortable and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service delivery.",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Your satisfaction and comfort are our top priorities.",
              },
              {
                icon: Car,
                title: "Quality Fleet",
                description: "Well-maintained vehicles equipped with modern amenities.",
              },
              {
                icon: Shield,
                title: "Safety",
                description: "Your safety is paramount. All our drivers are trained professionals.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "50+", label: "Vehicles" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
