import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { toast } from "sonner";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isVeg: boolean;
}

const FoodCard = ({ name, description, price, image, category, rating, isVeg }: FoodCardProps) => {
  const handleAddToCart = () => {
    toast.success(`${name} added to cart! 🛒`);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-md group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <Badge 
          className={`absolute top-3 left-3 ${isVeg ? 'bg-secondary' : 'bg-accent'} text-white border-0
            animate-in fade-in-0 duration-300 hover:scale-110 transition-transform`}
        >
          {isVeg ? '🌱 Veg' : '🍖 Non-Veg'}
        </Badge>
        <Badge className="absolute top-3 right-3 bg-white/90 text-foreground border-0
          animate-in fade-in-0 duration-300 hover:scale-110 transition-transform">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors duration-300">{name}</h3>
          <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded-full transform transition-transform hover:scale-105">
            <Star className="w-3 h-3 fill-secondary text-secondary animate-pulse-slow" />
            <span className="text-xs font-semibold text-secondary">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            ₹{price}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={handleAddToCart}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
