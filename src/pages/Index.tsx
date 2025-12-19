import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { VibesMeterSection } from "@/components/sections/VibesMeterSection";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BaristaSection } from "@/components/sections/BaristaSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VibesMeterSection />
        <FeaturedSection />
        <MenuSection />
        <AboutSection />
        <BaristaSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
