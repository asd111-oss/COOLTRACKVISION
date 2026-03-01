import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Benefits } from "@/components/sections/benefits";
import { Industries } from "@/components/sections/industries";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import CasesInBrief from "@/components/sections/cases-in-brief"; // ✅ НОВЫЙ БЛОК

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <NavBar />
      
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Industries />
        <HowItWorks />
        <CasesInBrief /> {/* ✅ НОВОЕ НАЗВАНИЕ */}
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
