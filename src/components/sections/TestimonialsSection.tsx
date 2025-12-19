import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    avatar: "SJ",
    rating: 5,
    text: "The Vibes Caffee has become my second home. The atmosphere is perfect for both work and catching up with friends. Their caramel latte is absolutely divine!",
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "Coffee Enthusiast",
    avatar: "MT",
    rating: 5,
    text: "As a coffee snob, I'm impressed by the quality here. The baristas really know their craft, and the single-origin options are always interesting.",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Local Artist",
    avatar: "EC",
    rating: 5,
    text: "I've hosted two art shows here and the team has been incredibly supportive. It's not just a café—it's a community hub.",
  },
];

export function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it—hear from the amazing people who make our café special.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Quote className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-secondary rounded-full px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="text-foreground">
              <span className="font-display text-xl font-semibold">4.9</span>
              <span className="text-muted-foreground ml-2">from 500+ reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
