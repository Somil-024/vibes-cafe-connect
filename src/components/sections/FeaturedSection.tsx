import { motion } from "framer-motion";
import { Star, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import drinkLatte from "@/assets/drink-latte.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import foodCroissant from "@/assets/food-croissant.jpg";

const featuredItems = [
  {
    id: 1,
    name: "Signature Caramel Latte",
    description: "Velvety espresso with house-made caramel and steamed milk",
    price: "$5.50",
    image: drinkLatte,
    badge: "Bestseller",
    badgeIcon: Star,
  },
  {
    id: 2,
    name: "Classic Cappuccino",
    description: "Rich espresso with perfectly textured milk foam",
    price: "$4.75",
    image: drinkCappuccino,
    badge: "Popular",
    badgeIcon: Flame,
  },
  {
    id: 3,
    name: "Ceremonial Matcha",
    description: "Premium Japanese matcha with oat milk and honey",
    price: "$6.00",
    image: drinkMatcha,
    badge: "New",
    badgeIcon: Sparkles,
  },
  {
    id: 4,
    name: "Fresh Butter Croissant",
    description: "Flaky, golden pastry baked fresh every morning",
    price: "$3.50",
    image: foodCroissant,
    badge: "Chef's Pick",
    badgeIcon: Star,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function FeaturedSection() {
  return (
    <section id="featured" className="py-24 bg-warm-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Featured Favorites
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Crafted with Passion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every drink tells a story. Discover our most loved creations, made with
            carefully sourced beans and ingredients.
          </p>
        </motion.div>

        {/* Featured Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-accent text-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                  <item.badgeIcon className="w-3 h-3" />
                  {item.badge}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-foreground group-hover:border-accent transition-all">
                  Add to Order
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg">
            Explore Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
