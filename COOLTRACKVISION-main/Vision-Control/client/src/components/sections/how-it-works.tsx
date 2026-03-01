import { motion } from "framer-motion";
import { Camera, BarChart3, ClipboardList } from "lucide-react";

const steps = [
  { title: "Интеграция с камерами", description: "Интегрируемся с существующей системой видеонаблюдения без замены оборудования: IP-камеры и регистраторы с поддержкой RTSP.", icon: Camera },
  { title: "Анализ данных", description: "Система анализирует видеопоток в реальном времени, распознаёт действия и выявляет отклонения от установленных стандартов.", icon: BarChart3 },
  { title: "Отчёты и рекомендации", description: "Генерация отчётов и событий в единую аналитику и формирование подсказок: где и что вы теряете.", icon: ClipboardList }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <span className="text-primary text-xs font-tech tracking-widest uppercase mb-4 block">КАК ЭТО РАБОТАЕТ</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">Полный путь от камеры до аналитики</h2>
        </div>

        {/* ПРИНУДИТЕЛЬНЫЙ FLEX ДЛЯ МОБИЛЬНЫХ */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {steps.map((step, index) => (
            <div key={index} className="w-[85vw] min-w-[85vw] md:w-auto md:min-w-0 shrink-0 snap-center">
              <div className="h-full p-10 rounded-lg border border-white/5 bg-[#0f172a]/20 backdrop-blur-sm flex flex-col items-center text-center transition-all hover:border-primary/30">
                <div className="w-12 h-12 border border-primary/40 flex items-center justify-center rounded-sm mb-8 bg-primary/5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}