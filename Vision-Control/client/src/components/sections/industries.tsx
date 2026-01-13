import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { 
  Factory, 
  Building, 
  ShoppingBag, 
  Coffee, 
  Car, 
  ChevronRight, 
  ArrowUpRight 
} from "lucide-react";

const industries = [
  { 
    id: "industry", 
    title: "Промышленность", 
    description: "Контроль производственных процессов и безопасность персонала", 
    icon: Factory, 
    video: "/videos/industry.mp4" 
  },
  { 
    id: "construction", 
    title: "Строительство", 
    description: "Обеспечение удаленного мониторинга площадок и минимизация рисков на объектах", 
    icon: Building, 
    video: "/videos/construction.mp4" 
  },
  { 
    id: "retail", 
    title: "Ритейл", 
    description: "Автоматизация контроля кассовых зон и торговых залов для обеспечения безопасности и прозрачности операций", 
    icon: ShoppingBag, 
    video: "/videos/retail.mp4" 
  },
  { 
    id: "horeca", 
    title: "HoReCa", 
    description: "Автоматизация контроля стандартов сервиса и гигиены для поддержания стабильного качества обслуживания", 
    icon: Coffee, 
    video: "/videos/horeca.mp4" 
  },
  { 
    id: "logistics", 
    title: "Логистика", 
    description: "Оптимизация работы распределительных центров и контроль обработки грузов на всех этапах", 
    icon: Car, 
    video: "/videos/logistics.mp4" 
  },
];

export function Industries() {
  const [activeId, setActiveId] = useState<string>(industries[0].id);

  const handleButtonClick = (id: string) => {
    const element = document.getElementById(`card-${id}`);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">Отрасли применения</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase">
            РЕШЕНИЯ <br /><span className="text-slate-500">ДЛЯ ЛЮБОГО БИЗНЕСА</span>
          </h3>
        </div>

        <div className="hidden md:flex gap-12 items-start relative">
          {/* ЛЕВАЯ ПАНЕЛЬ С НАВИГАЦИЕЙ */}
          <div className="w-full max-w-[260px] sticky top-[120px] self-start shrink-0 z-30">
            <div className="space-y-2 mb-8">
              {industries.map((industry) => (
                <button 
                  key={industry.id} 
                  onClick={() => handleButtonClick(industry.id)} 
                  className={`w-full flex items-center gap-3 p-3 rounded-sm border transition-all duration-300 ${
                    activeId === industry.id 
                      ? "bg-primary/5 border-primary text-white shadow-[0_0_20px_rgba(255,165,0,0.1)]" 
                      : "border-white/5 text-slate-500 hover:border-white/20"
                  }`}
                >
                  <div className={`w-8 h-8 border flex items-center justify-center rounded-sm transition-colors ${
                    activeId === industry.id ? "border-primary/50 bg-primary/10 text-primary" : "border-white/10 text-slate-700"
                  }`}>
                    <industry.icon className="w-4 h-4" />
                  </div>
                  <span className="font-tech font-bold uppercase text-[10px] tracking-wider text-left">{industry.title}</span>
                  {activeId === industry.id && <ChevronRight className="ml-auto w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>

            {/* КОМПАКТНАЯ КНОПКА ПЕРЕХОДА */}
<div className="pt-4 border-t border-white/10 -mt-5">
  <Link href="/industry-solutions">
    <a className="group block p-3 bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 rounded-sm relative">
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="font-tech text-slate-500 group-hover:text-primary text-[8px] uppercase tracking-[0.2em] transition-colors">
            База сценариев
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        {/* Изменено здесь: убран <br /> и добавлено whitespace-nowrap */}
        <div className="text-white font-tech font-bold text-[10px] uppercase leading-tight tracking-[0.2em] whitespace-nowrap">
          Смотреть все <span className="text-primary group-hover:text-white transition-colors">AI-детекторы</span>
        </div>
      </div>
    </a>
  </Link>
</div>
          </div>

          {/* КОНТЕНТНАЯ ЧАСТЬ */}
          <div className="flex-1 space-y-20">
            {industries.map((industry) => (
              <IndustryCard 
                key={industry.id} 
                industry={industry} 
                isActive={activeId === industry.id}
                onInView={() => setActiveId(industry.id)}
              />
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-2">
            {industries.map((industry) => (
              <div key={industry.id} className="w-[85vw] min-w-[85vw] shrink-0 snap-center">
                <div className="relative border border-primary/30 rounded-sm overflow-hidden bg-[#020617]">
                  <div className="relative aspect-video w-full">
                    <video src={industry.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-white font-bold">{industry.title}</h4>
                    <p className="text-slate-400 text-xs">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/industry-solutions">
            <a className="w-full flex items-center justify-between p-4 bg-primary text-black font-tech font-bold uppercase text-[10px] tracking-widest rounded-sm shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
              База AI-детекторов
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, isActive, onInView }: { industry: any, isActive: boolean, onInView: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -70% 0px" });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <div 
      id={`card-${industry.id}`}
      ref={ref}
      className={`relative border rounded-sm overflow-hidden bg-[#020617] transition-all duration-700 ${
        isActive ? "border-primary shadow-2xl shadow-primary/10 opacity-100" : "border-white/5 opacity-20 scale-[0.99]"
      }`}
    >
      <div className="relative aspect-[21/8] w-full bg-slate-900">
        <video src={industry.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute top-4 left-4 z-20 w-10 h-10 border flex items-center justify-center rounded-sm transition-all duration-500 backdrop-blur-md ${
          isActive ? "border-primary/50 bg-primary/20 text-primary" : "border-white/10 bg-black/40 text-white/40"
        }`}>
          <industry.icon className="w-5 h-5" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent z-10" />
      </div>
      <div className="p-6 relative z-20 -mt-14">
        <h4 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tight">{industry.title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{industry.description}</p>
      </div>
    </div>
  );
}