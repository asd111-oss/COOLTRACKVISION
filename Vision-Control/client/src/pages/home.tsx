import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Benefits } from "@/components/sections/benefits";
import { Industries } from "@/components/sections/industries";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq"; // Правильный импорт FAQ

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Industries />
        <HowItWorks />
        <Contact />
        <FAQ /> {/* Добавили FAQ один раз в самом конце списка */}
      </main>

      <Footer />
    </div>
  );
}
