import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <NavBar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">
              На главную
            </span>
          </Link>

          <div className="bg-white/5 backdrop-blur-xl rounded-sm border border-white/10 p-12">
            <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-12 text-center">
              Политика конфиденциальности
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed text-center mb-12">
              Мы гарантируем безопасность ваших данных и полное соответствие 152-ФЗ.
              Подробная политика будет добавлена в ближайшее время.
            </p>
            <div className="text-center space-y-4">
              <Link
                href="/features"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-black font-semibold uppercase text-sm tracking-[0.07em] rounded-sm hover:from-primary/90 hover:shadow-2xl transition-all"
              >
                Изучить функции
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
