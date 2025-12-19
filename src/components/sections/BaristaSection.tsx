import { motion } from "framer-motion";
import { Coffee, Award, Heart } from "lucide-react";

import barista1 from "@/assets/barista-1.jpg";
import barista2 from "@/assets/barista-2.jpg";

const baristas = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Head Barista",
    image: barista1,
    specialty: "Latte Art Master",
    signature: "Signature Caramel Latte",
    bio: "With 8 years of experience, Marcus brings precision and artistry to every cup. His latte art has won regional competitions.",
  },
  {
    id: 2,
    name: "Sofia Martinez",
    role: "Senior Barista",
    image: barista2,
    specialty: "Specialty Brew Expert",
    signature: "Lavender Honey Latte",
    bio: "Sofia's passion for unique flavor combinations has led to some of our most loved seasonal specials.",
  },
];

export function BaristaSection() {
  return (
    <section className="py-24 bg-background">
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
            Meet the Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Talented Baristas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The heart of The Vibes Caffee. Passionate artisans who turn every order into an experience.
          </p>
        </motion.div>

        {/* Barista Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {baristas.map((barista, index) => (
            <motion.div
              key={barista.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={barista.image}
                  alt={barista.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-cream mb-1">
                    {barista.name}
                  </h3>
                  <p className="text-cream/80 font-medium">{barista.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{barista.bio}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Specialty</span>
                      <p className="text-foreground font-medium">{barista.specialty}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Signature Drink</span>
                      <p className="text-foreground font-medium">{barista.signature}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ask a Barista CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full px-6 py-3">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              Not sure what to order? Ask our baristas for a personalized recommendation!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
