import { motion } from "framer-motion";
import { Coffee, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const perks = [
  { icon: Coffee, text: "Weekly brewing tips" },
  { icon: Gift, text: "Exclusive member discounts" },
  { icon: Sparkles, text: "Early access to new drinks" },
];

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Club!",
      description: "You'll receive our next Daily Brew newsletter soon.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            The Daily Brew
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Join Our Coffee Community
          </h2>
          <p className="text-cream/80 text-lg mb-8">
            Subscribe to our newsletter for exclusive offers, brewing tips, and the latest updates from The Vibes Caffee.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 text-cream/90"
              >
                <perk.icon className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{perk.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus:border-gold"
            />
            <Button type="submit" variant="hero" size="xl">
              Subscribe
            </Button>
          </form>

          <p className="text-cream/50 text-xs mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
