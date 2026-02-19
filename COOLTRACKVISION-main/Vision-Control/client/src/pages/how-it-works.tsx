import { motion } from "framer-motion";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { 
  Database, 
  Cpu, 
  LayoutDashboard, 
  MessageSquare, 
  CheckCircle2, 
  Settings2,
  Clock,
  ArrowRight
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <NavBar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Заголовок */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">Workflow Platform</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-6">
              Как работает <br /> <span className="text-slate-500 text-glow-blue">CoolTrackVision</span>
            </h1>
            <p className="text-slate-400 text-lg">
              От сырого видеопотока до конкретных управленческих решений. Посмотрите, как данные превращаются в прибыль.
            </p>
          </div>

          {/* Блок 1: Технический процесс (Дашборд) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-32">
            {[
              {
                icon: Database,
                title: "Сбор данных",
                desc: "Регистрация события: время, тип, участник и параметры видеопотока."
              },
              {
                icon: Cpu,
                title: "AI Обработка",
                desc: "Алгоритмическая фильтрация, агрегация и вычисления в реальном времени."
              },
              {
                icon: LayoutDashboard,
                title: "Визуализация",
                desc: "Автоматическое отображение графиков и диаграмм на интерактивном Дашборде."
              },
              {
                icon: MessageSquare,
                title: "Рекомендации",
                desc: "Практические советы для минимизации рисков и отчетность в мессенджеры."
              }
            ].map((step, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-sm relative group hover:bg-white/[0.05] transition-all">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h3 className="text-lg font-bold uppercase mb-3 font-display">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                <div className="absolute top-4 right-4 text-[40px] font-display font-black opacity-5">0{i+1}</div>
              </div>
            ))}
          </div>

          {/* Блок 2: Dashboard Preview (Текст про дашборд) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 bg-blue-950/10 p-12 rounded-sm border border-blue-500/10">
            <div>
              <h2 className="text-3xl font-display font-bold uppercase mb-6">Интеллектуальный <span className="text-primary">Dashboard</span></h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Это мощный инструмент для работы с большими объемами данных. Он объединяет множество взаимосвязанных процессов, позволяя видеть актуальную информацию на одном экране.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start text-sm text-slate-400">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  Обновление данных в режиме реального времени
                </li>
                <li className="flex gap-3 items-start text-sm text-slate-400">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  Автоматический сбор и структурирование инсайтов
                </li>
                <li className="flex gap-3 items-start text-sm text-slate-400">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  Визуализация через диаграммы, таблицы и графики
                </li>
              </ul>
            </div>
            <div className="relative aspect-video bg-black/40 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center">
                <LayoutDashboard size={80} className="text-primary/20 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>

          {/* Блок 3: Путь внедрения */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold uppercase mb-4 text-glow">Начните работу за 5 минут</h2>
            <p className="text-slate-400 tracking-widest font-tech text-xs uppercase">Простая интеграция — быстрый результат</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <Settings2 size={24} />
              </div>
              <h4 className="font-bold uppercase mb-3">Регистрация и выбор</h4>
              <p className="text-sm text-slate-500">Зарегистрируйтесь и выберите модули аналитики под свои задачи.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 border-x border-white/5">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <Clock size={24} />
              </div>
              <h4 className="font-bold uppercase mb-3">Free Test (14 дней)</h4>
              <p className="text-sm text-slate-500">Бесплатный доступ ко всем выбранным модулям на две недели.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-bold uppercase mb-3">Индивидуальная адаптация</h4>
              <p className="text-sm text-slate-500">Мы бесплатно настроим алгоритмы под ваши уникальные требования.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}