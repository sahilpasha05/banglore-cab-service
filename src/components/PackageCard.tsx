import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star, MessageCircle } from "lucide-react";

interface PackageCardProps {
  title: string;
  destination: string;
  duration: string;
  price: string;
  rating?: string;
  image?: string;
}

const PackageCard = ({ title, destination, duration, price, rating = "4.8", image }: PackageCardProps) => {
  const handleBooking = () => {
    const message = `Hi! I'd like to book the ${title} package.\n\nDestination: ${destination}\nDuration: ${duration}\nPrice: ${price}`;
    const whatsappUrl = `https://wa.me/918147260587?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden bg-gradient-accent">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-accent-foreground">
            <MapPin className="h-16 w-16 opacity-50" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="font-semibold text-sm">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{destination}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-accent">{price}</p>
          </div>
        </div>

        <Button variant="accent" className="w-full" onClick={handleBooking}>
          <MessageCircle className="h-4 w-4" />
          Book via WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
