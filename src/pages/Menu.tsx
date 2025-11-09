import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, ArrowLeft } from "lucide-react";

import biryaniImg from "@/assets/food-biryani.jpg";
import dosaImg from "@/assets/food-dosa.jpg";
import saladImg from "@/assets/food-salad.jpg";
import butterChickenImg from "@/assets/food-butter-chicken.jpg";
import lassiImg from "@/assets/drink-lassi.jpg";
import thaliImg from "@/assets/food-thali.jpg";

const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with tender chicken pieces, fragrant spices, and fried onions",
    price: 180,
    image: biryaniImg,
    category: "Main Course",
    rating: 4.8,
    isVeg: false,
  },
  {
    id: 2,
    name: "Masala Dosa",
    description: "Crispy golden dosa filled with spiced potato masala, served with chutney and sambar",
    price: 80,
    image: dosaImg,
    category: "South Indian",
    rating: 4.7,
    isVeg: true,
  },
  {
    id: 3,
    name: "Fresh Garden Salad",
    description: "Colorful mix of fresh vegetables with a tangy dressing",
    price: 120,
    image: saladImg,
    category: "Healthy",
    rating: 4.5,
    isVeg: true,
  },
  {
    id: 4,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato-based curry",
    price: 220,
    image: butterChickenImg,
    category: "Main Course",
    rating: 4.9,
    isVeg: false,
  },
  {
    id: 5,
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink with sweet mango pulp",
    price: 60,
    image: lassiImg,
    category: "Beverages",
    rating: 4.6,
    isVeg: true,
  },
  {
    id: 6,
    name: "Special Thali",
    description: "Complete meal with rice, rotis, multiple curries, and dessert",
    price: 250,
    image: thaliImg,
    category: "Combos",
    rating: 4.9,
    isVeg: true,
  },
];

const categories = ["All", "Main Course", "South Indian", "Healthy", "Beverages", "Combos"];

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  Our Menu
                </h1>
                <p className="text-sm text-muted-foreground">Choose your favorite dish</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="default" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative mb-8 animate-slide-in-up">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base shadow-sm"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide animate-slide-in-right">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm whitespace-nowrap transition-all ${
                selectedCategory === category 
                  ? "gradient-primary text-white shadow-md" 
                  : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No items found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
