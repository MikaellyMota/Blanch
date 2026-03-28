import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import UrgencySection from "@/components/UrgencySection";
import SolutionSection from "@/components/SolutionSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ChoiceSection from "@/components/ChoiceSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import StickyBar from "@/components/StickyBar";
import PurchaseToast from "@/components/PurchaseToast";

const Index = () => (
  <div className="min-h-screen bg-background pb-16">
    <TopBar />
    <HeroSection />
    <PainSection />
    <UrgencySection />
    <SolutionSection />
    <BonusSection />
    <TestimonialsSection />
    <PricingSection />
    <ChoiceSection />
    <FAQSection />
    <FinalCTA />
    <PurchaseToast />
    <StickyBar />
  </div>
);

export default Index;
