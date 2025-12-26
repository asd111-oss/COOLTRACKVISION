import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Zap } from "lucide-react";

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      
      {/* 
        === BACKGROUND LAYER === 
        Здесь мы применяем маску: прозрачно сверху -> видно в центре -> прозрачно снизу.
        Убрали старые "накладные" градиенты, теперь это честная прозрачность.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        {/* Базовый фон */}
        <div className="absolute inset-0 bg-secondary/20" />
        
        {/* Боковой акцент */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        {/* Добавил очень легкую сетку, чтобы связать с Hero-секцией (еле заметная) */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            color: 'var(--primary)'
          }} 
        />
      </div>
      
      {/* === CONTENT LAYER === */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">Ключевые преимущества</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              ЭФФЕКТИВНОСТЬ <br />
              <span className="text-muted-foreground">И БЕЗОПАСНОСТЬ</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-12">
              CoolTrackVision связывает данные, выявляет проблемы, находит потери и формирует готовые рекомендации по их устранению
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: BarChart3,
                  title: "Глубокая аналитика",
                  desc: "Превращаем видеопоток в структурированные данные для принятия управленческих решений."
                },
                {
                  icon: Zap,
                  title: "Инсайты вместо архивов",
                  desc: "Вместо гигабайтов записей вы получаете понятный вывод: что пошло не так, где вы теряете, что и как нужно изменить"
                },
                {
                  icon: ShieldCheck,
                  title: "Исключение человеческого фактора",
                  desc: "Платформа обеспечивает 100% концентрации 24/7, гарантируя, что ни одно нарушение регламента или ошибка в процессах не останутся незамеченными"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-card border border-primary/20 flex items-center justify-center rounded-sm">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abstract UI Mockup */}
          <div className="relative">
             <div className="relative aspect-square border border-primary/20 bg-background/50 backdrop-blur p-4 rounded-sm">
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary rounded-tr-xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary rounded-bl-xl" />
                
                <div className="h-full w-full bg-card/80 border border-white/5 p-6 grid grid-rows-3 gap-4">
                  {/* Fake Charts */}
                  <div className="row-span-2 grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 border border-white/5 p-4 flex flex-col justify-end">
                      <div className="h-24 w-full flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                           <div key={i} className="flex-1 bg-primary/80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="mt-2 text-xs font-mono text-muted-foreground">РОСТ ЧИСТОЙ ПРИБЫЛИ</div>
                    </div>
                    <div className="bg-secondary/50 border border-white/5 p-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                        </div>
                        <div className="absolute bottom-4 left-4 text-xs font-mono text-muted-foreground">СКАНИРОВАНИЕ СИСТЕМЫ...</div>
                    </div>
                  </div>
                  <div className="bg-secondary/50 border border-white/5 p-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-display font-bold text-primary">98.4%</span>
                      <span className="text-xs font-mono text-muted-foreground">СНИЖЕНИЕ НАРУШЕНИЙ</span>
                    </div>
                    <div className="h-2 w-32 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[98%]" />
                    </div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}