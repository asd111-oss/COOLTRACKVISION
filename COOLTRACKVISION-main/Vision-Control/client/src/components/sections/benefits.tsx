import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Benefits() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* === CONTENT LAYER === */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">
                Ключевые преимущества
              </h2>
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] uppercase mb-8 tracking-tighter">
                ЭФФЕКТИВНОСТЬ <br />
                <span className="text-slate-500">И БЕЗОПАСНОСТЬ</span>
              </h3>
              
              <p className="text-lg text-slate-400 mb-12 max-w-xl">
                CoolTrackVision связывает данные, выявляет проблемы, находит потери и формирует готовые рекомендации по их устранению
              </p>

              <div className="space-y-8 mb-12">
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
                    desc: "Платформа обеспечивает 100% концентрации 24/7, гарантируя, что ни одно нарушение регламента не останется незамеченным"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white/[0.03] border border-white/10 group-hover:border-primary/50 flex items-center justify-center rounded-sm transition-colors backdrop-blur-sm">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-display mb-2 text-white uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <Link href="/core-benefits">
              <Button
                variant="outline"
                className="text-[10px] font-tech uppercase border-white/20 hover:border-primary hover:bg-primary/10 text-primary px-10 h-10 tracking-widest transition-all w-fit rounded-none"
              >
                Подробнее
              </Button>
            </Link>
          </div>

          {/* Abstract UI Mockup */}
          <div className="relative">
             {/* РАМКА И ФОН КАК В ЗАПРОСЕ */}
             <div className="relative aspect-square border border-primary/20 bg-blue-950/20 backdrop-blur-2xl p-4 rounded-sm">
                {/* ТЕ САМЫЕ ТОЛСТЫЕ УГЛОВЫЕ РАМКИ */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary rounded-tr-xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary rounded-bl-xl pointer-events-none" />
                
                <div className="h-full w-full bg-black/60 border border-white/5 p-6 grid grid-rows-3 gap-4">
                  
                  <div className="row-span-2 grid grid-cols-2 gap-4">
                    {/* РОСТ ЧИСТОЙ ПРИБЫЛИ */}
                    <div className="bg-blue-900/10 border border-white/5 p-4 flex flex-col justify-end">
                      <div className="h-24 w-full flex items-end gap-1">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                           <div key={i} className="flex-1 bg-primary/80" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="mt-2 text-[10px] font-tech text-slate-500 uppercase tracking-widest">РОСТ ЧИСТОЙ ПРИБЫЛИ</div>
                    </div>

                    {/* ЗАГРУЗКА СИСТЕМЫ */}
                    <div className="bg-blue-900/10 border border-white/5 p-4 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                        </div>
                        <div className="absolute bottom-4 left-4 text-[10px] font-tech text-slate-500 uppercase tracking-widest">ЗАГРУЗКА СИСТЕМЫ....</div>
                    </div>
                  </div>

                  {/* СНИЖЕНИЕ НАРУШЕНИЙ */}
                  <div className="bg-blue-900/10 border border-white/5 p-4 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-display font-bold text-primary">98.4%</span>
                      <span className="text-[10px] font-tech text-slate-500 uppercase tracking-widest">СНИЖЕНИЕ НАРУШЕНИЙ</span>
                    </div>
                    <div className="h-2 w-32 bg-blue-950 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-primary w-[98.4%]" />
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