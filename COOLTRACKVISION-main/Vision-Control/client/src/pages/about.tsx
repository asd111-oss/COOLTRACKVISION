import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Shield, Award, Star, Zap, TrendingDown, 
  Lightbulb, Search, ArrowLeft 
} from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          {/* КНОПКА "НА ГЛАВНУЮ" */}
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
              На главную
            </span>
          </Link>

          {/* ГЛАВНЫЙ ЗАГОЛОВОК (ПРИВЕДЕН К ЕДИНОМУ СТИЛЮ С FEATURES) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">
              О компании и миссия
            </h2>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase max-w-4xl">
              МЫ НАХОДИМ ПРИЧИНЫ, <br />
              <span className="text-slate-500">ПО КОТОРЫМ ВЫ ТЕРЯЕТЕ ДЕНЬГИ</span>
            </h1>
            <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed font-light">
              Платформа не только фиксирует нарушения и действия персонала, но и <span className="text-white font-medium">выявляет системные ошибки</span>, находит скрытые потери и формирует рекомендации.
            </p>
          </motion.div>

          {/* СТАТУС В ВИДЕ КАРТОЧЕК */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="p-8 rounded-sm border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-primary/20 rounded-sm bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold uppercase tracking-tight text-white">Участник Сколково</h4>
                  <p className="text-slate-500 text-xs font-tech uppercase tracking-widest mt-1">ИННОВАЦИОННЫЙ ЦЕНТР</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-sm border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300">
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

          {/* ТРИ ГЛАВНЫХ ТЕЗИСА */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32 border-y border-white/5 py-24">
            <div className="space-y-6">
              <Search className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Выявление проблем</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Система автоматически распознает инциденты, которые раньше оставались незамеченными: от нарушения регламентов до нецелевого использования времени.</p>
            </div>
            <div className="space-y-6">
              <TrendingDown className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Поиск потерь</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Мы конвертируем видео в цифры. Вы видите четкую картину: где процесс «проседает» и сколько прибыли это вам стоит ежемесячно.</p>
            </div>
            <div className="space-y-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h4 className="text-xl font-display font-bold uppercase tracking-tight">Готовые решения</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Вместо сухих отчетов вы получаете конкретный алгоритм действий: что нужно изменить прямо сейчас, чтобы остановить отток денег.</p>
            </div>
          </div>

          {/* БЛОК МИССИИ */}
          <div className="max-w-4xl mx-auto text-center mb-32">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8 bg-primary/30"></div>
              <span className="text-primary font-tech uppercase tracking-[0.4em] text-xs">
                Наша миссия
              </span>
              <div className="h-px w-8 bg-primary/30"></div>
            </div>

            <p className="text-slate-300 text-2xl md:text-4xl leading-tight font-display font-bold uppercase tracking-tight">
              Сделать интеллектуальную видеоаналитику доступной для <span className="text-primary">малого и среднего бизнеса</span>
            </p>
          </div>

          {/* ЦИФРЫ */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-white/5 p-12 rounded-sm backdrop-blur-sm border border-white/5">
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