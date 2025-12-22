import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Интеграция с камерами",
    description:
      "Интегрируемся с существующей системой видеонаблюдения без замены оборудования: IP‑камеры и регистраторы с поддержкой RTSP.",
  },
  {
    id: 2,
    title: "Анализ данных",
    description:
      "Система анализирует видеопоток в реальном времени, распознаёт действия и выявляет отклонения от установленных стандартов.",
  },
  {
    id: 3,
    title: "Формирование отчётов и рекомендаций",
    description:
      "Генерация отчётов и событий в единую аналитику и формирование подсказок: где и что вы теряете, почему это происходит и какие действия стоит принять.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">
            Как это работает
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Полный путь от камеры до аналитики
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative bg-card border border-border/60 hover:border-primary/60 transition-all duration-300 p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-primary font-tech uppercase tracking-[0.2em] text-xs">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background/80 font-semibold">
                  0{step.id}
                </span>
                <span>ШАГ</span>
              </div>

              <h4 className="text-xl md:text-2xl font-display font-bold text-foreground">
                {step.title}
              </h4>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
