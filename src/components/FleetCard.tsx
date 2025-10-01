import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Fuel, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FleetCardProps {
  name: string;
  price: string;
  image: string;
  seats: string;
  fuel?: string;
}

const FleetCard = ({ name, price, image, seats, fuel = "Fuel Included" }: FleetCardProps) => {
  const navigate = useNavigate();
  
  const handleBooking = () => {
    window.open(`/fleet-booking?vehicle=${encodeURIComponent(name)}`, "_blank");
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full font-bold text-sm">
          {seats}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{fuel}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-accent">{price}</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <Fuel className="h-4 w-4" />
          </div>
        </div>

        <Button variant="accent" className="w-full" onClick={handleBooking}>
          <MessageCircle className="h-4 w-4" />
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FleetCard;
