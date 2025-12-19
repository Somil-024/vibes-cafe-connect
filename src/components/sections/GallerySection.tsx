import { motion } from "framer-motion";
import { Instagram, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroCoffee from "@/assets/hero-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import drinkLatte from "@/assets/drink-latte.jpg";
import drinkCappuccino from "@/assets/drink-cappuccino.jpg";
import drinkMatcha from "@/assets/drink-matcha.jpg";
import foodCroissant from "@/assets/food-croissant.jpg";
import barista1 from "@/assets/barista-1.jpg";
import barista2 from "@/assets/barista-2.jpg";

const galleryImages = [
  { src: heroCoffee, alt: "Signature latte art", span: "col-span-2 row-span-2" },
  { src: cafeInterior, alt: "Café interior", span: "col-span-1 row-span-1" },
  { src: drinkMatcha, alt: "Matcha latte", span: "col-span-1 row-span-1" },
  { src: barista1, alt: "Our barista at work", span: "col-span-1 row-span-2" },
  { src: foodCroissant, alt: "Fresh pastries", span: "col-span-1 row-span-1" },
  { src: drinkCappuccino, alt: "Classic cappuccino", span: "col-span-1 row-span-1" },
  { src: barista2, alt: "Friendly service", span: "col-span-1 row-span-1" },
  { src: drinkLatte, alt: "Iced specialty", span: "col-span-1 row-span-1" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
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
            #TheVibesCaffee
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Capture the Vibes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See what makes our café special. Tag us in your photos for a chance to be featured!
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${image.span} relative group rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-coffee-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-cream">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" className="gap-2">
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
