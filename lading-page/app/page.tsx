import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingButton from "@/components/floating-button";
import AnimationProvider from "@/components/animation-provider";

export default function Home() {
  return (
    <AnimationProvider>
      <main className="overflow-x-hidden">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
        <FloatingButton />
      </main>
    </AnimationProvider>
  );
}
