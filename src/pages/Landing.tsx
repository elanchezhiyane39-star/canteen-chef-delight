import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, ShoppingCart, UtensilsCrossed, Clock } from "lucide-react";
import chefMascot from "@/assets/chef-mascot.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <UtensilsCrossed className="w-24 h-24 text-white" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20 animate-bounce-slow">
        <ChefHat className="w-32 h-32 text-white" />
      </div>

      <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* Chef Mascot */}
        <div className="animate-float mb-8">
          <img 
            src={chefMascot} 
            alt="Chef Mascot" 
            className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 animate-slide-in-up drop-shadow-lg">
          Welcome to <span className="text-yellow-100">Tasty Canteen</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-2xl animate-slide-in-up drop-shadow-md">
          Delicious meals, fresh ingredients, and quick service. Order your favorite dishes with just a few taps!
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl animate-scale-in">
          <div className="glass-effect rounded-2xl p-6 text-center backdrop-blur-md hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy Ordering</h3>
            <p className="text-white/80 text-sm">Browse menu and order in seconds</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center backdrop-blur-md hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quick Pickup</h3>
            <p className="text-white/80 text-sm">Get your food ready in minutes</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center backdrop-blur-md hover-lift">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fresh & Tasty</h3>
            <p className="text-white/80 text-sm">Made with love and quality ingredients</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up">
          <Button 
            size="lg" 
            variant="hero"
            onClick={() => navigate("/menu")}
            className="text-lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Explore Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/auth")}
            className="text-lg border-white text-white hover:bg-white hover:text-primary"
          >
            Sign In
          </Button>
        </div>

        {/* Bottom tagline */}
        <p className="text-white/70 text-sm mt-12 animate-pulse-slow">
          Your favorite canteen, now digital! 🍽️
        </p>
      </div>
    </div>
  );
};

export default Landing;
