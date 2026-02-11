import { FloatingHeader } from "@/components/ui/floating-header";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import HeroSection from "@/components/hero/HeroSection";

// Lazy load below-the-fold sections for better FCP/LCP
const PourquoiSection = dynamic(() => import("@/components/sections/PourquoiSection"));

// Lazy load below-the-fold sections for better FCP/LCP
const PresentationSection = dynamic(() => import("@/components/sections/PresentationSection"));
const BeneficesSection = dynamic(() => import("@/components/sections/BeneficesSection"));
const PrixSection = dynamic(() => import("@/components/sections/PrixSection"));
const ReassuranceSection = dynamic(() => import("@/components/sections/ReassuranceSection"));
const AvisSection = dynamic(() => import("@/components/sections/AvisSection"));
const CTAFinalSection = dynamic(() => import("@/components/sections/CTAFinalSection"));

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
        <Link
          href="/presentation"
          className="text-[10px] text-gray-300 hover:text-[#DC143C] transition-colors mt-4 inline-block border-b border-transparent hover:border-[#DC143C] pb-0.5"
        >
          Voir la Présentation du Projet
        </Link>
      </footer>
    </div>
  );
}
