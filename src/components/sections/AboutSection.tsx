import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Leaf, Users, Award } from "lucide-react";
import { useRef } from "react";

import cafeInterior from "@/assets/cafe-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Quality",
    description: "Every bean is carefully selected from sustainable farms around the world.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Eco-friendly practices from sourcing to serving, including compostable packaging.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "A welcoming space for connection, creativity, and genuine conversation.",
  },
  {
    icon: Award,
    title: "Craft Excellence",
    description: "Our baristas are trained artisans dedicated to perfecting every drink.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="about" ref={ref} className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <motion.img
                style={{ y: imageY }}
                src={cafeInterior}
                alt="The Vibes Caffee Interior"
                className="w-full h-[500px] object-cover scale-110"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-strong"
            >
              <div className="text-center">
                <div className="font-display text-4xl text-accent mb-1">2018</div>
                <div className="text-muted-foreground text-sm">Est.</div>
              </div>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              More Than Just
              <br />
              <span className="text-accent">A Coffee Shop</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              The Vibes Caffee was born from a simple dream: to create a space where 
              exceptional coffee meets genuine community. Founded in 2018, we've grown 
              from a small corner café into a beloved neighborhood destination.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Every cup we serve carries our commitment to quality, sustainability, 
              and the belief that great coffee should bring people together.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
