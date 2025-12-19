import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  menu: [
    { name: "Coffee", href: "#menu" },
    { name: "Specialty Drinks", href: "#menu" },
    { name: "Food", href: "#menu" },
    { name: "Seasonal Items", href: "#menu" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Story", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "FAQs", href: "#" },
    { name: "Gift Cards", href: "#" },
    { name: "Catering", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Coffee className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl font-semibold">
                The Vibes Caffee
              </span>
            </a>
            <p className="text-cream/70 mb-6 max-w-sm">
              Where every sip tells a story. Experience the perfect blend of artisan coffee and welcoming vibes.
            </p>
            <div className="space-y-3 text-sm text-cream/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>123 Coffee Street, Downtown, NY</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>hello@thevibescaffee.com</span>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} The Vibes Caffee. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-cream/50 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
