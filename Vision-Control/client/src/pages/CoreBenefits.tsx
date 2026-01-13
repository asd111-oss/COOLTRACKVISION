import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Zap,
  Layers,
  Globe,
  Wallet,
  ArrowLeft,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  UserCheck,
  BellRing,
  Eye,
  BarChart3
} from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const benefits = [
  {
    num: "01",
    id: "deployment",
    icon: Zap,
    title: "БЫСТРОЕ РАЗВЕРТЫВАНИЕ",
    tag: "Интеграция",
    description: "Платформа внедряется в текущую инфраструктуру без прерывания работы. Она совместима с любыми камерами, поддерживающими RTSP-протокол.",
    points: ["Старт от 30 минут", "Без вложений в железо"]
  },
  {
    num: "02",
    id: "accuracy",
    icon: ShieldCheck,
    title: "ВЫСОКАЯ ТОЧНОСТЬ ДЕТЕКЦИИ",
    tag: "Надежность",
    description: "Внедрение нейросетевого мониторинга гарантирует отсутствие слепых зон в контроле регламентов. Система обеспечивает мгновенную фиксацию инцидентов, которые физически невозможно отследить усилиями персонала.",
    points: ["Объективность данных 100%", "Реакция системы < 1 сек"]
  },
  {
    num: "03",
    id: "architecture",
    icon: Layers,
    title: "МАСШТАБИРУЕМАЯ АРХИТЕКТУРА",
    tag: "Рост",
    description: "Микросервисное ядро позволяет мгновенно наращивать мощность. Вы можете активировать необходимые функции здесь и сейчас, адаптируя систему под задачи любого объема.",
    points: [
      "Неограниченное количество камер и детекций",
      "Подключение собственных и сторонних AI-моделей",
      "Масштабирование функций в один клик"
    ]
  }
];

const secondaryBenefits = [
  {
    num: "05",
    id: "analytics",
    icon: BarChart3,
    title: "ГЛУБОКАЯ АНАЛИТИКА И РЕКОМЕНДАЦИИ",
    tag: "Интеллект",
    description: "Платформа не просто копит данные, она находит причины проблем. Анализируя паттерны, система предлагает готовые решения для оптимизации процессов.",
    points: ["Практические рекомендации", "Автоматический поиск причин", "Прогнозные модели"]
  },
  {
    num: "06",
    id: "versatility",
    icon: Globe,
    title: "ОТРАСЛЕВАЯ УНИВЕРСАЛЬНОСТЬ",
    tag: "Гибкость",
    description: "Адаптация алгоритмов под конкретные бизнес-процессы: от ритейла до тяжелой промышленности.",
    points: ["Готовые кейсы", "Индивидуальные сценарии"]
  },
  {
    num: "07",
    id: "finance",
    icon: Wallet,
    title: "ПРОЗРАЧНАЯ ЭКОНОМИКА И ОКУПАЕМОСТЬ",
    tag: "Экономика",
    description: "Фиксированная стоимость за видеоканал позволяет точно прогнозировать бюджет. Модель исключает капитальные вложения в оборудование и неожиданные прыжки в стоимости при росте сети.",
    points: [
      "Нет капитальных вложений (CAPEX 0)",
      "Низкая себестоимость обслуживания",
      "Масштабирование без скрытых платежей"
    ]
  }
];

export default function CoreBenefits() {
  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-primary selection:text-black">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
              На главную
            </span>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24">
            <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-4">Ценности и технологии</h2>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-[1.1] uppercase max-w-4xl">
              КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА <br />
              <span className="text-slate-500"> ПЛАТФОРМЫ </span>
            </h1>
          </motion.div>

          {/* ПЕРВЫЕ 3 ПУНКТА */}
          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <BenefitItem key={benefit.id} benefit={benefit} index={index} />
            ))}
          </div>

          {/* ГЛАВНЫЙ ВИЗУАЛЬНЫЙ АКЦЕНТ: ДАШБОРДЫ (04) */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-32 relative"
          >
            {/* Незаметный номер 04 */}
            <span className="absolute top-4 right-8 font-tech text-[60px] text-white/[0.02] select-none pointer-events-none">04</span>
            
            <div className="absolute -inset-1 bg-primary/10 blur-3xl opacity-20" />
            <div className="relative border border-primary/20 bg-slate-900/40 backdrop-blur-xl p-8 md:p-16 rounded-sm overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center text-black">
                      <LayoutDashboard className="w-6 h-6" />
                    </div>
                    <span className="font-tech text-primary/60 text-[10px] uppercase tracking-[0.4em]">Центр управления</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-8 leading-tight">
                  dashboard <br /> 
                  </h2>
                  <p className="text-slate-300 text-lg font-light leading-relaxed mb-10 max-w-xl">
                    Платформа автоматизирует сбор и обработку данных, представляя их в удобном виде. Видеопоток переводится в формат конкретных показателей, необходимых для оперативного управления бизнесом.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FeatureMiniCard icon={Eye} title="Централизованный контроль" desc="Все метрики и процессы в одном интерфейсе" />
                  <FeatureMiniCard icon={UserCheck} title="Кастомизация ролей" desc="Разные уровни разрешений и доступа по ролям" />
                  <FeatureMiniCard icon={Activity} title="Реальное время" desc="Live-данные с обновлением без задержек" isLive />
                  <FeatureMiniCard icon={BellRing} title="Smart-уведомления" desc="Мгновенная реакция на критические инциденты" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* ОСТАЛЬНЫЕ ПУНКТЫ */}
          <div className="space-y-4">
            {secondaryBenefits.map((benefit, index) => (
              <BenefitItem key={benefit.id} benefit={benefit} index={index + 4} />
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function BenefitItem({ benefit, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group border-b border-white/10 hover:border-primary/40 transition-colors py-10 flex flex-col lg:flex-row gap-8 lg:items-center"
    >
      <div className="flex items-center gap-6 lg:w-1/4">
        <span className="font-tech text-3xl text-white/5 group-hover:text-primary/10 transition-colors">{benefit.num}</span>
        <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/40 transition-all">
          <benefit.icon className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-display font-bold uppercase mb-2 group-hover:text-white transition-colors">{benefit.title}</h3>
        <p className="text-slate-500 text-sm max-w-xl leading-relaxed">{benefit.description}</p>
      </div>
      <div className="lg:w-1/4">
        <ul className="space-y-2">
          {benefit.points.map((p: string, i: number) => (
            <li key={i} className="text-[9px] font-tech text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <div className="w-1 h-1 bg-primary/40" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function FeatureMiniCard({ icon: Icon, title, desc, isLive }: any) {
  return (
    <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group/card">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 bg-white/5 text-primary group-hover/card:bg-primary group-hover/card:text-black transition-colors">
          <Icon className="w-4 h-4" />
        </div>
        {isLive && (
          <span className="flex items-center gap-1.5 text-[8px] font-tech text-primary uppercase animate-pulse">
            <span className="w-1 h-1 bg-primary rounded-full" /> Live
          </span>
        )}
      </div>
      <h4 className="text-sm font-display font-bold uppercase mb-2 text-white/90">{title}</h4>
      <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-tight">{desc}</p>
    </div>
  );
}