import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Factory,
  Building,
  ShoppingBag,
  Coffee,
  Truck,
  Utensils,
  Cpu,
  BarChart3,
  Target
} from "lucide-react";

import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const caseData = [
  {
    id: "restaurants",
    title: "Сеть ресторанов",
    subtitle: "Как AI-платформа помогла федеральной сети ресторанов на 34% повысить соблюдение стандартов гигиены и оптимизировать работу персонала",
    industry: "HoReCa",
    industryIcon: Utensils,
    challenge: [
      "Высокие риски штрафов и закрытия из-за несоблюдения СанПиН",
      "Финансовые потери из-за \"мертвых душ\" и неточного учета рабочего времени",
      "Отсутствие объективных данных для оценки эффективности сотрудников"
    ],
    solution: [
      "AI-контроль гигиены: Автоматическое распознавание мытья рук",
      "Точный учет времени: Биометрическая фиксация начала/конца смены",
      "Дашборды: Централизованная аналитика и AI-рекомендации"
    ],
    results: ["+34% К ГИГИЕНЕ", "-91% РАСХОЖДЕНИЯ", "-100% РИСК ШТРАФОВ"],
  },
  {
    id: "retail-grocery",
    title: "Сетевой ритейл",
    subtitle: "Оптимизация логистики и выкладки: сокращение времени разгрузки на 30% и повышение доступности товара",
    industry: "Ритейл",
    industryIcon: ShoppingBag,
    challenge: [
      "Хаос и задержки в зоне дебаркадера, риски порчи товаров",
      "\"Пустые полки\" из-за медленной выкладки",
      "Неэффективное использование персонала"
    ],
    solution: [
      "Контроль дебаркадера: Фиксация времени разгрузки",
      "Shelf Monitoring: Уведомление о пустых полках",
      "Трекинг персонала: Построение карт активности"
    ],
    results: ["-30% ВРЕМЯ РАЗГРУЗКИ", "95% ДОСТУПНОСТЬ", "-90% ОШИБОК УЧЕТА"],
  },
  {
    id: "pizza-chain",
    title: "Сеть пиццерий",
    subtitle: "Сокращение затрат на персонал на 30% и ускорение обслуживания на 15%",
    industry: "HoReCa",
    industryIcon: Coffee,
    challenge: [
      "Нарушение регламентов (использование телефонов)",
      "Неверное планирование смен: избыток или дефицит поваров",
      "Отсутствие единой аналитики по всей сети"
    ],
    solution: [
      "Контроль дисциплины: Распознавание использования гаджетов",
      "Оптимизация смен: Мониторинг очереди и скорости приготовления",
      "Централизованная аналитика: Единые дашборды сети"
    ],
    results: ["-30% ЗАТРАТЫ ФОТ", "+15% СКОРОСТЬ СЕРВИСА", "100% КОНТРОЛЬ ГИГИЕНЫ"],
  },
  {
    id: "manufacturing",
    title: "Промышленное предприятие",
    subtitle: "Создание системы безопасности: на 75% сокращено количество инцидентов",
    industry: "Промышленность",
    industryIcon: Factory,
    challenge: [
      "Систематическое нарушение ТБ (отсутствие СИЗ)",
      "Риск убытков из-за задымлений",
      "Сложности с контролем доступа транспорта"
    ],
    solution: [
      "Автоконтроль СИЗ: Мониторинг касок и жилетов",
      "Ранняя детекция: Распознавание огня и дыма",
      "Автоматизация доступа: Открытие ворот по номерам авто"
    ],
    results: ["-75% ИНЦИДЕНТОВ ТБ", "98% НОШЕНИЕ СИЗ", "< 30 СЕК РЕАКЦИЯ"],
  },
  {
    id: "retail-specialized",
    title: "Специализированный ритейл",
    subtitle: "AI-аналитика клиентского пути для мебельных салонов и магазинов стройматериалов",
    industry: "Ритейл",
    industryIcon: Building,
    challenge: [
      "\"Серая зона\" консультаций и работы персонала",
      "Мебель: Низкая конверсия в долгих сделках",
      "Стройматериалы: Ошибки в учете трафика"
    ],
    solution: [
      "Обезличенный учет: Пол, возраст и исключение персонала",
      "Анализ взаимодействия: Длительность контакта с клиентом",
      "Конверсия смен: Автоматический расчет эффективности"
    ],
    specialResults: {
      metrics: [
        { label: "Рост продаж", furniture: "+12%", materials: "+18%" },
        { label: "Ожидание", furniture: "-70%", materials: "-55%" },
        { label: "Точность данных", furniture: "95%", materials: "92%" }
      ]
    },
    results: []
  },
  {
    id: "dubai-retail",
    title: "Международный проект",
    subtitle: "Предотвращение потерь и контроль персонала для премиального ритейла в ОАЭ",
    industry: "Глобальный / Дубай",
    industryIcon: Truck,
    status: "pilot",
    challenge: [
      "Скрытые хищения со стороны персонала и покупателей",
      "Отсутствие прозрачных данных об активности сотрудников"
    ],
    solution: [
      "Предотвращение потерь: Распознавание подозрительного поведения",
      "Биометрический контроль: Идентификация лиц сотрудников",
      "Соответствие нормам: Адаптация под стандарты ОАЭ"
    ],
    results: ["СНИЖЕНИЕ ПОТЕРЬ", "АВТОМАТИЗАЦИЯ УЧЕТА", "КОМПЛАЕНС ОАЭ"],
  },
];

export default function CasesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // ✅ Фикс: Принудительный скролл в начало страницы при загрузке
    window.scrollTo(0, 0);

    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const index = caseData.findIndex((c) => c.id === hash);
        if (index >= 0) setActiveIndex(index);
      }
    }
  }, []);

  const activeCase = caseData[activeIndex];
  if (!activeCase) return null;

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-primary/30 relative">
      <NavBar />
      
      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">
              На главную
            </span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">
                Библиотека решений 
              </h2>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase tracking-tight">
                РЕАЛЬНЫЙ <span className="text-slate-500">ЭФФЕКТ</span>
              </h1>
            </motion.div>
            
            <div className="flex items-center gap-8 shrink-0 pb-2">
              <button 
                onClick={() => activeIndex > 0 && setActiveIndex(i => i - 1)} 
                className={`group flex items-center transition-all ${activeIndex > 0 ? 'opacity-100' : 'opacity-10 cursor-not-allowed'}`}
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
                <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-white">Назад</span>
              </button>

              <div className="font-tech text-[10px] text-slate-500 uppercase tracking-widest border-x border-white/10 px-4">
                {activeIndex + 1} / {caseData.length}
              </div>

              <button 
                onClick={() => activeIndex < caseData.length - 1 && setActiveIndex(i => i + 1)} 
                className={`group flex items-center transition-all ${activeIndex < caseData.length - 1 ? 'opacity-100' : 'opacity-10 cursor-not-allowed'}`}
              >
                <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-white">Вперед</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-primary" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-sm border border-white/10 bg-slate-900/40 backdrop-blur-3xl shadow-2xl w-full"
            >
              <div className="p-8 md:p-14 lg:p-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                  
                  <div className="flex-1 space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 shrink-0 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <activeCase.industryIcon className="w-7 h-7" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-primary font-tech text-[10px] uppercase tracking-[0.2em] mb-1">{activeCase.industry}</span>
                        <h3 className="text-xl md:text-2xl font-display font-bold leading-tight tracking-[0.05em] uppercase text-white">
                          {activeCase.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-lg leading-relaxed border-l border-primary/30 pl-6 italic font-light">
                      {activeCase.subtitle}
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-center gap-2 text-[10px] font-tech text-orange-500/80 uppercase tracking-widest">
                        <div className="w-1 h-1 bg-orange-500" />
                        Проблематика
                      </div>
                      <ul className="space-y-4">
                        {activeCase.challenge.map((c, i) => (
                          <li key={i} className="text-sm md:text-base text-slate-300 flex items-start gap-4 leading-relaxed group">
                            <span className="text-orange-500/30 font-tech text-xs mt-0.5">0{i+1}</span>
                            <span className="group-hover:text-white transition-colors">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                    <div className="relative h-full bg-white/[0.02] border border-white/5 rounded-sm p-8 md:p-10 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                           <div className="flex items-center gap-3 text-[10px] font-tech text-emerald-500 uppercase tracking-widest">
                              <Cpu className="w-4 h-4" />
                              <span>AI Решение</span>
                           </div>
                           <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent ml-6" />
                        </div>

                        <div className="space-y-5 mb-12">
                          {activeCase.solution.map((s, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                              <div className="w-1 h-1 bg-emerald-500/50 group-hover:bg-emerald-500 transition-all" />
                              <span className="text-[11px] font-tech text-slate-300 uppercase tracking-wider leading-relaxed">
                                {s}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto border-t border-white/10 pt-10">
                           {activeCase.id === "dubai-retail" ? (
                             <div className="space-y-6">
                               <div className="flex items-center gap-2 text-[10px] font-tech text-primary uppercase tracking-widest mb-2">
                                  <Target className="w-4 h-4" />
                                  Цели проекта
                               </div>
                               <div className="grid grid-cols-1 gap-3">
                                 {activeCase.results.map((res, i) => (
                                   <div key={i} className="bg-primary/5 border border-primary/10 p-3 rounded-sm">
                                     <div className="text-[10px] font-tech text-white uppercase tracking-widest text-center">{res}</div>
                                   </div>
                                 ))}
                               </div>
                               <div className="mt-4 flex items-center justify-center gap-2">
                                 <span className="text-[9px] font-tech text-slate-500 uppercase tracking-widest">Статус:</span>
                                 <span className="text-[9px] font-tech text-orange-500 uppercase tracking-widest animate-pulse">Pilot Launching</span>
                               </div>
                             </div>
                           ) : (
                             <div className="space-y-8">
                               <div className="flex items-center gap-2 text-[10px] font-tech text-primary uppercase tracking-widest">
                                  <div className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#fff]" />
                                  Результаты
                               </div>
                               
                               {activeCase.specialResults ? (
                                 <div className="grid grid-cols-1 gap-6">
                                   {activeCase.specialResults.metrics.map((m, i) => (
                                     <div key={i} className="flex flex-col border-l border-white/10 pl-4">
                                       <span className="text-[9px] font-tech text-slate-500 uppercase mb-2 tracking-widest">{m.label}</span>
                                       <div className="grid grid-cols-2 gap-4">
                                         <div>
                                           <div className="text-[8px] font-tech text-slate-600 uppercase mb-1">Мебель</div>
                                           <div className="text-xl font-display font-bold text-white">{m.furniture}</div>
                                         </div>
                                         <div className="border-l border-white/5 pl-4">
                                           <div className="text-[8px] font-tech text-slate-600 uppercase mb-1">Стройка</div>
                                           <div className="text-xl font-display font-bold text-slate-400">{m.materials}</div>
                                         </div>
                                       </div>
                                     </div>
                                   ))}
                                 </div>
                               ) : (
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                                   {activeCase.results.map((res, i) => (
                                     <div key={i} className="flex flex-col border-l border-primary/20 pl-4">
                                       <BarChart3 className="w-3.5 h-3.5 text-primary/40 mb-2" />
                                       <div className="text-sm md:text-base font-display font-bold text-white uppercase tracking-tight leading-tight">
                                         {res}
                                       </div>
                                     </div>
                                   ))}
                                 </div>
                               )}
                             </div>
                           )}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}