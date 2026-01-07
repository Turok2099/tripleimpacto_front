import BondaBenefitsSection from "@/components/sections/BondaBenefits/bondaBenefitsSection";
import CTASection from "@/components/sections/CTA/ctaSection";
import FAQSection from "@/components/sections/FAQ/faqSection";
import HeroSection from "@/components/sections/Hero/heroSection";
import HowItWorksSection from "@/components/sections/HowItWorks/howItWorksSection";
import WhyDonateSection from "@/components/sections/WhyDonate/whyDonateSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <BondaBenefitsSection />
      <WhyDonateSection />
      <CTASection />
      <FAQSection />
    </div>
  );
}
