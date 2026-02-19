import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowLeft, Factory, Building, ShoppingBag, Coffee, Car,
  ShieldCheck, Cpu, UserCheck, Timer, 
  LayoutDashboard, Zap, HandMetal, ScanEye,
  Flame, Users, LineChart, Truck
} from "lucide-react";

import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const solutions = [
  { id: 1, category: "production", title: "Автоконтроль СИЗ", desc: "Обнаружение отсутствия касок, перчаток и масок. Мгновенное оповещение о нарушении протоколов безопасности.", icon: ShieldCheck, feature: "Безопасность" },
  { id: 2, category: "production", title: "Пожарная безопасность", desc: "Распознавание огня и дыма на ранних стадиях для предотвращения чрезвычайных ситуаций в цехах.", icon: Flame, feature: "Детекция ЧП" },
  { id: 3, category: "production", title: "Опасные зоны", desc: "Контроль нахождения персонала в зонах работы промышленного оборудования и механизмов.", icon: Cpu, feature: "Защита периметра" },
  { id: 4, category: "construction", title: "Трекинг на объекте", desc: "Точный учет времени нахождения персонала внутри строящихся объектов и контроль перемещений.", icon: UserCheck, feature: "Мониторинг" },
  { id: 5, category: "construction", title: "Работа спецтехники", desc: "Мониторинг маршрутов транспорта по территории и контроль активности строительных машин.", icon: Truck, feature: "Логистика" },
  { id: 6, category: "construction", title: "Умное КПП", desc: "Автоматическое открытие ворот по распознанным номерам авто и фиксация времени въезда/выезда.", icon: Car, feature: "Доступ" },
  { id: 7, category: "retail", title: "Учет посетителей", desc: "Обезличенный учет с автоматическим исключением персонала. Определение пола, возраста и повторных визитов.", icon: Users, feature: "Маркетинг" },
  { id: 8, category: "retail", title: "Конверсия смен", desc: "Автоматический расчет эффективности работы сотрудников на основе данных о входящем трафике.", icon: LineChart, feature: "HR-аналитика" },
  { id: 9, category: "retail", title: "Контроль полок", desc: "Анализ полноты полок в реальном времени с мгновенным уведомлением о необходимости выкладки.", icon: ShoppingBag, feature: "Inventory AI" },
  { id: 10, category: "retail", title: "Борьба с хищениями", desc: "Выявление скрытых краж со стороны покупателей и персонала в торговых залах.", icon: ShieldCheck, feature: "Антифрод" },
  { id: 11, category: "retail", title: "Зона дебаркадера", desc: "Контроль времени разгрузки и трекинг всех перемещений коробок в зоне приема товара.", icon: Truck, feature: "Приемка товара" },
  { id: 12, category: "horeca", title: "Собливдение СанПиН", desc: "Контроль мытья рук, отсутствия украшений на руках и использования гаджетов на кухне.", icon: HandMetal, feature: "Гигиена" },
  { id: 13, category: "horeca", title: "Эффективность кухни", desc: "Мониторинг очереди и скорости приготовления для определения оптимального количества поваров.", icon: Timer, feature: "Скорость сервиса" },
  { id: 14, category: "horeca", title: "Единый Dashboard", desc: "Сбор данных со всех точек сети в общие дашборды для сравнения эффективности филиалов.", icon: LayoutDashboard, feature: "BI-система" },
  { id: 15, category: "logistics", title: "Транспортная аналитика", desc: "Контроль времени нахождения транспорта на территории и фиксация маршрутов движения.", icon: Car, feature: "Автоматизация" },
  { id: 16, category: "logistics", title: "Контроль погрузки", desc: "Мониторинг зоны дебаркадера, фиксация времени разгрузки и перемещения грузов.", icon: Truck, feature: "Складской учет" },
  { id: 17, category: "all", title: "Учет рабочего времени", desc: "Точная фиксация выхода в смену, времени нахождения на рабочем месте и активности взаимодействия.", icon: Timer, feature: "HR / Аналитика" },
  { id: 18, category: "all", title: "Идентификация сотрудников", desc: "Распознавание лиц для контроля доступа и автоматической регистрации событий в системе.", icon: ScanEye, feature: "Face ID" },
];

const categories = [
  { id: "all", title: "Все модули", icon: null },
  { id: "production", title: "Производство", icon: Factory },
  { id: "construction", title: "Строительство", icon: Building },
  { id: "retail", title: "Ритейл", icon: ShoppingBag },
  { id: "horeca", title: "HoReCa", icon: Coffee },
  { id: "logistics", title: "Логистика", icon: Car },
];

export default function IndustrySolutions() {
  const [filter, setFilter] = useState("all");

  const filteredSolutions = filter === "all" 
    ? solutions 
    : solutions.filter(s => s.category === filter || s.category === "all");

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-primary/30">
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

          {/* ГЛАВНЫЙ ЗАГОЛОВОК (БЕЗ ОПИСАНИЯ, СТИЛЬ ABOUT) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="mb-20"
          >
            <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">
              Библиотека решений
            </h2>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase max-w-4xl tracking-tighter">
              БАЗА <br /> 
              <span className="text-slate-500">СЦЕНАРИЕВ AI</span>
            </h1>
          </motion.div>

          {/* ФИЛЬТРЫ */}
          <div className="flex flex-wrap gap-2 mb-16 sticky top-24 z-40 bg-black/20 backdrop-blur-xl py-6 border-y border-white/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-3 px-6 py-2.5 rounded-sm border font-tech text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                  filter === cat.id 
                  ? "bg-primary border-primary text-black shadow-[0_0_25px_rgba(255,165,0,0.2)]" 
                  : "border-white/10 text-slate-500 hover:border-white/40"
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.title}
              </button>
            ))}
          </div>

          {/* СЕТКА КАРТОЧЕК */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSolutions.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative p-8 border border-white/5 bg-[#0f172a]/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 rounded-lg flex flex-col"
                >
                  <div className="mb-8 flex justify-between items-start">
                    <div className="w-14 h-14 border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 bg-primary/5 rounded-sm">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <span className="font-tech text-primary/60 text-[8px] uppercase tracking-[0.3em] border border-primary/20 px-3 py-1 rounded-full">
                      {item.feature}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase mb-4 text-white group-hover:text-primary transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light grow">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-start">
                    <div className="flex items-center gap-2 text-[9px] font-tech text-slate-500 uppercase tracking-widest group-hover:text-primary transition-colors">
                      <Zap className="w-3 h-3 text-primary animate-pulse" /> Active Module
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}