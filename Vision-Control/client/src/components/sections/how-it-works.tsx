import { motion } from "framer-motion";
import { Camera, BarChart3, ClipboardList } from "lucide-react";

const steps = [
  {
    title: "Интеграция с камерами",
    description: "Интегрируемся с существующей системой видеонаблюдения без замены оборудования: IP-камеры и регистраторы с поддержкой RTSP.",
    icon: Camera,
  },
  {
    title: "Анализ данных",
    description: "Система анализирует видеопоток в реальном времени, распознаёт действия и выявляет отклонения от установленных стандартов.",
    icon: BarChart3,
  },
  {
    title: "Формирование отчётов и рекомендаций",
    description: "Генерация отчётов и событий в единую аналитику и формирование подсказок: где и что вы теряете, почему это происходит и какие действия стоит принять.",
    icon: ClipboardList,
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <span className="text-primary text-xs font-tech tracking-widest uppercase mb-4 block">
            КАК ЭТО РАБОТАЕТ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight max-w-2xl leading-tight">
            Полный путь от камеры до аналитики
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-lg border border-white/5 bg-[#0f172a]/20 backdrop-blur-sm flex flex-col items-center text-center transition-all duration-300 hover:border-primary/30"
            >
              {/* Иконка в рамке */}
              <div className="w-12 h-12 border border-primary/40 flex items-center justify-center rounded-sm mb-8 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Заголовок */}
              <h3 className="text-xl font-display font-bold text-white mb-6 tracking-tight">
                {step.title}
              </h3>

              {/* Описание */}
              <p className="text-slate-400 text-base leading-relaxed font-sans">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
