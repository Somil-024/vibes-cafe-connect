import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Leaf, IceCream, Croissant, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import drinkLatte from "@/assets/drink-latte.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import foodCroissant from "@/assets/food-croissant.jpg";

const categories = [
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "specialty", name: "Specialty", icon: Leaf },
  { id: "cold", name: "Cold Drinks", icon: IceCream },
  { id: "food", name: "Food", icon: Croissant },
];

const menuItems = {
  coffee: [
    { id: 1, name: "Espresso", description: "Double shot of pure coffee perfection", price: "$3.50", image: drinkCappuccino, popular: true },
    { id: 2, name: "Americano", description: "Espresso with hot water for a smooth finish", price: "$4.00", image: drinkCappuccino },
    { id: 3, name: "Cappuccino", description: "Equal parts espresso, steamed milk, and foam", price: "$4.75", image: drinkCappuccino, popular: true },
    { id: 4, name: "Flat White", description: "Velvety microfoam with double ristretto", price: "$5.00", image: drinkCappuccino },
    { id: 5, name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$5.50", image: drinkCappuccino },
    { id: 6, name: "Cortado", description: "Equal parts espresso and warm milk", price: "$4.25", image: drinkCappuccino },
  ],
  specialty: [
    { id: 7, name: "Signature Caramel Latte", description: "House-made caramel with vanilla bean", price: "$5.50", image: drinkLatte, popular: true },
    { id: 8, name: "Lavender Honey Latte", description: "Floral notes with local wildflower honey", price: "$6.00", image: drinkLatte, seasonal: true },
    { id: 9, name: "Ceremonial Matcha", description: "Premium Japanese matcha with oat milk", price: "$6.00", image: drinkMatcha },
    { id: 10, name: "Golden Turmeric Latte", description: "Anti-inflammatory spice blend", price: "$5.75", image: drinkMatcha },
    { id: 11, name: "Chai Latte", description: "House-spiced chai with steamed milk", price: "$5.25", image: drinkLatte },
  ],
  cold: [
    { id: 12, name: "Cold Brew", description: "20-hour steeped for smooth richness", price: "$4.50", image: drinkLatte, popular: true },
    { id: 13, name: "Iced Latte", description: "Espresso over ice with cold milk", price: "$5.00", image: drinkLatte },
    { id: 14, name: "Nitro Cold Brew", description: "Cascading, creamy cold brew on tap", price: "$5.50", image: drinkLatte },
    { id: 15, name: "Vietnamese Iced Coffee", description: "Sweetened condensed milk delight", price: "$5.25", image: drinkLatte },
    { id: 16, name: "Affogato", description: "Espresso poured over vanilla gelato", price: "$6.50", image: drinkLatte },
  ],
  food: [
    { id: 17, name: "Butter Croissant", description: "Flaky, buttery, baked fresh daily", price: "$3.50", image: foodCroissant, popular: true },
    { id: 18, name: "Almond Croissant", description: "Filled with almond cream and sliced almonds", price: "$4.50", image: foodCroissant },
    { id: 19, name: "Avocado Toast", description: "Smashed avo, cherry tomatoes, microgreens", price: "$9.50", image: foodCroissant },
    { id: 20, name: "Breakfast Burrito", description: "Eggs, cheese, beans, and house salsa", price: "$10.00", image: foodCroissant },
    { id: 21, name: "Banana Bread", description: "Moist, walnut-studded house recipe", price: "$4.00", image: foodCroissant },
  ],
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Something for Everyone
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From classic espresso drinks to innovative seasonal specials, find your perfect cup.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-4 p-4 bg-card rounded-xl hover:shadow-medium transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg text-foreground truncate">
                      {item.name}
                    </h3>
                    <span className="text-accent font-semibold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 mb-2">
                    {item.popular && (
                      <Badge variant="secondary" className="text-xs bg-gold/20 text-gold-dark">
                        Popular
                      </Badge>
                    )}
                    {item.seasonal && (
                      <Badge variant="secondary" className="text-xs bg-teal/20 text-teal-dark">
                        Seasonal
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                      <Plus className="w-3 h-3 mr-1" />
                      Add
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <Info className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
