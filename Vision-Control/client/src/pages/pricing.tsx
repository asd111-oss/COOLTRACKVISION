import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link href="/features" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">
              Функции
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Здесь размести блоки тарифов / текста */}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
