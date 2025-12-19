import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Friday", time: "7:00 AM - 9:00 PM" },
  { day: "Saturday", time: "8:00 AM - 10:00 PM" },
  { day: "Sunday", time: "8:00 AM - 8:00 PM" },
];

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Visit Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Find Your Way to
              <br />
              <span className="text-accent">Great Coffee</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Located in the heart of downtown, we're easy to find and always ready to welcome you with a warm cup and a friendly smile.
            </p>

            {/* Location Details */}
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    123 Coffee Street<br />
                    Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Hours</h3>
                  <div className="space-y-1">
                    {hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="text-foreground font-medium ml-4">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Contact</h3>
                  <p className="text-muted-foreground">
                    (555) 123-4567<br />
                    hello@thevibescaffee.com
                  </p>
                </div>
              </div>
            </div>

            <Button variant="gold" size="lg" className="gap-2">
              <Navigation className="w-5 h-5" />
              Get Directions
            </Button>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-strong h-[500px]">
              {/* Placeholder Map - In production, integrate real map */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">
                    123 Coffee Street
                  </h3>
                  <p className="text-muted-foreground">Downtown District, NY</p>
                </div>
              </div>

              {/* Interactive elements overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-card rounded-lg shadow-soft flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="text-lg font-semibold text-foreground">+</span>
                </button>
                <button className="w-10 h-10 bg-card rounded-lg shadow-soft flex items-center justify-center hover:bg-secondary transition-colors">
                  <span className="text-lg font-semibold text-foreground">−</span>
                </button>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 left-6 right-6 bg-card rounded-xl p-4 shadow-medium flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                <span className="text-foreground font-medium">Open Now</span>
                <span className="text-muted-foreground">• Closes at 9:00 PM</span>
              </div>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
