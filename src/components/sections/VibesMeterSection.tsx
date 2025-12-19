import { motion } from "framer-motion";
import { Users, Volume2, Wifi, Coffee, Clock } from "lucide-react";

const vibeStates = [
  {
    level: "quiet",
    name: "Quiet Study Zone",
    description: "Perfect for focused work",
    color: "bg-teal",
    icon: Volume2,
    capacity: 35,
  },
  {
    level: "social",
    name: "Social Buzz",
    description: "Great for catching up",
    color: "bg-gold",
    icon: Users,
    capacity: 65,
  },
  {
    level: "lively",
    name: "Lively Hangout",
    description: "Full energy atmosphere",
    color: "bg-destructive",
    icon: Coffee,
    capacity: 90,
  },
];

// Current vibe (would be real-time in production)
const currentVibe = vibeStates[1];

export function VibesMeterSection() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-medium p-6 md:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Vibes Meter Info */}
            <div className="flex items-center gap-6">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-16 h-16 rounded-full ${currentVibe.color} flex items-center justify-center shadow-lg`}
              >
                <currentVibe.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Current Vibe
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    Updated 5 min ago
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground">
                  {currentVibe.name}
                </h3>
                <p className="text-muted-foreground">
                  {currentVibe.description}
                </p>
              </div>
            </div>

            {/* Capacity Bar */}
            <div className="flex-1 max-w-md w-full">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Current Capacity</span>
                <span className="font-semibold text-foreground">
                  {currentVibe.capacity}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${currentVibe.capacity}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full ${currentVibe.color} rounded-full`}
                />
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-muted-foreground">Quiet</span>
                <span className="text-muted-foreground">Busy</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-teal">
                <Wifi className="w-4 h-4" />
                <span className="font-medium">Free WiFi</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>~25 people</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
