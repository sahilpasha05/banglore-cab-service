// FleetCard.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle } from "lucide-react";

interface FleetCardProps {
  name: string;
  image: string;
  seats: string;
}

const FleetCard = ({ name, image, seats }: FleetCardProps) => {
  // Map of per km rates for specific vehicles
  const perKmRates: Record<string, string> = {
    "52 Seater Bus": "₹62 per km",
    "33 Seater Bus": "₹42 per km",
    "21 Seater Bus": "₹30 per km",
    "Urbania": "₹45 per km",
    "Tempo Traveller": "₹20 per km",
  };

  const handleBooking = () => {
    const phoneNumber = "919900987878"; // WhatsApp expects country code
    const message = `Hi, I need assistance regarding ${name} booking from Bangalore cab services.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="group min-w-[280px] sm:min-w-[320px] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 active:scale-95 touch-manipulation">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-110 group-active:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full font-bold text-sm">
          {seats}
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>

        {/* Show per km rate if available */}
        {perKmRates[name] && (
          <p className="text-accent font-semibold mb-4">{perKmRates[name]}</p>
        )}

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Users className="h-4 w-4" />
        </div>

        <Button variant="accent" className="w-full" onClick={handleBooking}>
          <MessageCircle className="h-4 w-4" />
          Inquire Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FleetCard;
