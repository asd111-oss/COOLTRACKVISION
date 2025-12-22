import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Benefits } from "@/components/sections/benefits";
import { Industries } from "@/components/sections/industries";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Contact } from "@/components/sections/contact";

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
      </main>
      
      <footer className="bg-background border-t border-border py-8 text-center text-sm text-muted-foreground font-mono">
        <div className="container mx-auto">
          <p>© 2024 COOLTRACKVISION. ВСЕ СИСТЕМЫ РАБОТАЮТ.</p>
        </div>
      </footer>
    </div>
  );
}
