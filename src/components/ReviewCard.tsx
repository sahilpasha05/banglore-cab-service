import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  image: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ name, image, rating, review }: ReviewCardProps) => {
  return (
    <Card className="flex-shrink-0 w-80 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < rating ? 'fill-gold text-gold' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">{review}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
