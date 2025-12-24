import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Shield, Award, Star, Zap, TrendingDown, Lightbulb, Search } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* ГЛАВНЫЙ ЗАГОЛОВОК */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <span className="text-primary font-tech uppercase tracking-widest text-xs mb-4 block">Our Focus</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              МЫ НАХОДИМ ТО, <br />
              <span className="text-slate-500 uppercase">ГДЕ ВЫ ТЕРЯЕТЕ ДЕНЬГИ</span>
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl max-w-4xl leading-relaxed font-light">
              Система CoolTrackVision не просто фиксирует проходящих людей. Она <span className="text-white font-semibold">выявляет системные ошибки</span>, находит скрытые потери и формирует готовые рекомендации по их устранению.
            </p>
          </motion.div>

                  {/* СТАТУС В ВИДЕ КАРТОЧЕК */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {/* Карточка Сколково */}
            <div className="p-8 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-primary/20 rounded-sm bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight text-white">Резидент Сколково</h4>
                  <p className="text-slate-500 text-xs font-tech uppercase tracking-widest mt-1">Technology Leader 2024</p>
                </div>
              </div>
            </div>
            
            {/* Карточка МИК */}
            <div className="p-8 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-blue-500/20 rounded-sm bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                  <Star className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight text-white">Участник МИК</h4>
                  <p className="text-slate-500 text-xs font-tech uppercase tracking-widest mt-1">Moscow Innovation Cluster</p>
                </div>
              </div>
            </div>
          </div>


          {/* ТРИ ГЛАВНЫХ ТЕЗИСА: ПОТЕРИ, ПРОБЛЕМЫ, РЕШЕНИЯ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32 border-y border-white/5 py-24">
            <div className="space-y-6">
              <Search className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Выявление проблем</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Система автоматически распознает инциденты, которые раньше оставались незамеченными: от нарушения регламентов до нецелевого использования времени.</p>
            </div>
            <div className="space-y-6">
              <TrendingDown className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Поиск потерь</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Мы конвертируем видео в цифры. Вы видите четкую картину: где процесс «проседает» и сколько прибыли это вам стоит ежемесячно.</p>
            </div>
            <div className="space-y-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Готовые решения</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Вместо сухих отчетов вы получаете конкретный алгоритм действий: что нужно изменить прямо сейчас, чтобы остановить отток денег.</p>
            </div>
          </div>

          {/* НОВАЯ МИССИЯ */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-widest text-primary">СНИЖЕНИЕ НАРУШЕНИЙ — ЭТО ПРИБЫЛЬ</h3>
            <p className="text-slate-300 text-2xl leading-relaxed font-light">
              «Наша миссия — трансформировать видеонаблюдение из пассивного архива в активного бизнес-консультанта. Мы помогаем компаниям расти, устраняя невидимые барьеры и человеческие ошибки».
            </p>
          </div>

          {/* ЦИФРЫ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white/5 p-12 rounded-lg backdrop-blur-sm border border-white/5">
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">30%</div>
              <p className="text-[10px] font-tech uppercase tracking-widest text-primary">Снижение нарушений</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">15%</div>
              <p className="text-[10px] font-tech uppercase tracking-widest text-primary">Рост эффективности</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">ROI</div>
              <p className="text-[10px] font-tech uppercase tracking-widest text-primary">За 3-6 месяцев</p>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-white mb-2">24/7</div>
              <p className="text-[10px] font-tech uppercase tracking-widest text-primary">Контроль потерь</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
