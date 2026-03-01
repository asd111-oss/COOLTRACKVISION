import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BrainCircuit,
  Eye,
  ScanFace,
  ArrowLeft,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Database,
  FileText,
  Sparkles,
} from "lucide-react";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const features = [
  {
    id: "tracking",
    title: "ТРЕКИНГ СОТРУДНИКОВ",
    subtitle: "Мониторинг активностей и перемещений на объекте",
    image: "/assets/biometric_facial_recognition_interface-DnGbMEFo.png",
    icon: ScanFace,
    description:
      "Платформа фиксирует передвижения и действия персонала на рабочих зонах. Каждый сотрудник отслеживается как уникальный объект: система понимает, кто, где и когда находится.",
    points: [
      "Отслеживание перемещений сотрудников по всем зонам объекта в реальном времени",
      "Контроль нахождения на рабочем месте и соблюдения маршрутов передвижения",
      "Система выявляет длительные простои, несанкционированные перемещения и скопления людей в непредусмотренных или опасных зонах",
    ],
  },
  {
    id: "recognition",
    title: "ИДЕНТИФИКАЦИЯ СОТРУДНИКОВ",
    subtitle: "Face ID для учета рабочего времени",
    image: "/assets/abstract_neural_network_processing_video-BUyYZTlK.png",
    icon: BrainCircuit,
    description:
      "Модуль распознавания лиц гарантирует персонализированный учет сотрудников. Данные из видео автоматически сопоставляются с базой предприятия.",
    points: [
      "Распознавание лиц и привязка к ID сотрудника",
      "Автоматический учет прихода, ухода и времени присутствия",
      "Минимизация ошибок и исключение ручного ввода данных",
    ],
  },
  {
    id: "violations",
    title: "ДЕТЕКЦИЯ НАРУШЕНИЙ",
    subtitle: "Мониторинг техники безопасности и дисциплины",
    image: "/assets/factory_floor_with_ar_monitoring_overlay-BupMrbS_.png",
    icon: Eye,
    description:
      "Система анализирует видео в реальном времени и выявляет нарушения правил безопасности и стандартов гигиены. Искусственный интеллект обучен фиксировать десятки типов событий и уведомлять ответственных лиц.",
    points: [
      "Контроль использования средств защиты: касок, масок, перчаток, халатов и другой обязательной экипировки",
      "Обнаружение нарушений дисциплины — использование телефона, курение, приём пищи в рабочей зоне",
      "Система фиксирует опасные ситуации, такие как задымление или открытый огонь, и мгновенно уведомляет ответственных лиц, помогая предотвратить инциденты и сохранить безопасность персонала",
    ],
  },
  {
    id: "transport",
    title: "КОНТРОЛЬ ТРАНСПОРТА",
    subtitle: "Распознавание номеров и управление доступом",
    image: "/assets/abstract_neural_network_processing_video-BYuhOPqK.png",
    icon: BrainCircuit,
    description:
      "Интеллектуальный контроль служебного и гостевого транспорта: система определяет номер, тип и маршрут движения техники, автоматически управляет доступом и фиксирует все события в журнале.",
    points: [
      "Распознавание номеров и регистрация проездов",
      "Разделение на служебный, личный и гостевой транспорт",
      "Синхронизация с шлагбаумами и системой учета въездов",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">
              На главную
            </span>
          </Link>

          {/* ЗАГОЛОВОК */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-[10px] mb-3">
              Основные модули платформы
            </h2>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase max-w-2xl">
              ИНТЕЛЛЕКТУАЛЬНЫЙ <br />
              <span className="text-slate-500">АНАЛИЗ ДАННЫХ</span>
            </h1>
          </motion.div>

          {/* ОСНОВНЫЕ МОДУЛИ */}
          <div className="space-y-32 mb-40">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-stretch md:items-center`}
              >
                {/* Изображение */}
                <div className="w-full md:w-1/2 relative group flex-shrink-0">
                  <div className="relative h-80 md:h-96 overflow-hidden border border-white/10 rounded-sm">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Текст */}
                <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-xs">
                      {feature.title}
                    </h2>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                    {feature.subtitle}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* АНАЛИТИКА И РЕКОМЕНДАЦИИ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative py-24 px-8 md:px-16 border border-white/5 bg-gradient-to-br from-slate-900/40 via-black/50 to-slate-900/40 rounded-sm backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4" />

            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Заголовок */}
              <div className="text-center mb-20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-sm backdrop-blur-md mb-8"
                >
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="font-tech uppercase text-xs tracking-[0.3em] text-primary">
                    ANALYTICS
                  </span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase mb-6">
                  АНАЛИТИКА <br />
                  <span className="text-slate-500">И РЕКОМЕНДАЦИИ</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                  Система превращает сырые видеоданные в готовые решения: отчеты,
                  аналитику и рекомендации по оптимизации процессов.
                </p>
              </div>

              {/* Основной блок */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                  <div className="group p-8 border border-white/10 rounded-sm bg-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all backdrop-blur-md">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-orange-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                      <h4 className="text-2xl font-display font-bold uppercase tracking-tight text-white">
                        AI Рекомендации
                      </h4>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Автоматические рекомендации по оптимизации графиков сотрудников,
                      снижению нарушений и улучшению производственных процессов.
                    </p>
                  </div>

                  {/* Инфо карточки */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: FileText,
                        title: "Отчеты",
                        desc: "Сводные данные по сменам и дисциплине",
                      },
                      {
                        icon: Database,
                        title: "Архив событий",
                        desc: "Полная история с временными метками",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        className="group p-6 border border-white/10 rounded-sm bg-white/3 hover:border-primary/30 hover:bg-primary/10 transition-all backdrop-blur-md"
                      >
                        <item.icon className="w-8 h-8 text-primary mb-3 opacity-70 group-hover:opacity-100" />
                        <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">
                          {item.title}
                        </h5>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* МЕТРИКИ */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity lg:-inset-4" />
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-black/50 border-2 border-white/10 rounded-sm p-6 md:p-10 backdrop-blur-xl shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          color:
                            "from-emerald-500/20 to-emerald-400/20",
                          label: "Нарушений за смену",
                          value: "12",
                          trend: "+3%",
                        },
                        {
                          color: "from-blue-500/20 to-blue-400/20",
                          label: "Время на месте",
                          value: "94%",
                          trend: "✓",
                        },
                        {
                          color:
                            "from-orange-500/20 to-orange-400/20",
                          label: "Рекомендаций",
                          value: "5",
                          trend: "новые",
                        },
                        {
                          color:
                            "from-purple-500/20 to-purple-400/20",
                          label: "ТС на объекте",
                          value: "247",
                          trend: "онлайн",
                        },
                      ].map((metric, i) => (
                        <div
                          key={i}
                          className="group/item p-4 rounded-sm border border-white/5 bg-gradient-to-b from-slate-900/50 backdrop-blur-md hover:shadow-primary/20 transition-all"
                        >
                          <div
                            className={`w-full h-0.5 bg-gradient-to-r ${metric.color} rounded-full mb-3`}
                          />
                          <div className="flex flex-col">
                            <div className="flex items-baseline justify-between">
                              <span className="text-lg font-bold text-white tracking-tight">
                                {metric.value}
                              </span>
                              <span className="text-[10px] text-emerald-400 font-medium">
                                {metric.trend}
                              </span>
                            </div>
                            <span className="text-[11px] uppercase font-tech tracking-wider text-slate-400 mt-1 leading-snug">
                              {metric.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ЗАКЛЮЧЕНИЕ */}
              <div className="pt-12 border-t border-white/10">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-center md:text-left">
                  <div className="space-y-3 flex-1">
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight text-slate-300">
                      Под ваши задачи
                    </h4>
                    <p className="text-slate-400 text-sm max-w-lg mx-auto md:mx-0">
                      Каждый модуль платформы адаптируется под специфику вашего предприятия
                      или отрасли. При необходимости разработаем индивидуальные сценарии и
                      отчеты под ваши требования.
                    </p>
                  </div>
                  <div className="flex-1">
                    <Link
                      href="/#contact"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-semibold uppercase text-sm tracking-[0.05em] rounded-sm hover:from-primary/90 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                    >
                      <span>Обсудить адаптацию</span>
                      <Sparkles className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
