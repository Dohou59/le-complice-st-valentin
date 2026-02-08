import { FloatingHeader } from "@/components/ui/floating-header";
import HeroSection from "@/components/hero/HeroSection";
import PourquoiSection from "@/components/sections/PourquoiSection";
import PresentationSection from "@/components/sections/PresentationSection";
import BeneficesSection from "@/components/sections/BeneficesSection";
import PrixSection from "@/components/sections/PrixSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import AvisSection from "@/components/sections/AvisSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-pink-100 selection:text-[#DC143C]">
      <FloatingHeader />
      <main>
        <HeroSection />
        <PourquoiSection />
        <PresentationSection />
        <BeneficesSection />
        <PrixSection />
        <ReassuranceSection />
        <AvisSection />
        <CTAFinalSection />
      </main>
      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">
          &copy; 2026 Le Complice - Emma-Alk DOHOU
        </p>
      </footer>
    </div>
  );
}
