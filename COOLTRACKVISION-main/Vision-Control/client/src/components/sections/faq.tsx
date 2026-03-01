import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Нужно ли покупать специальные серверы для работы системы?",
    answer: "Нет, специальные серверы не требуются: все данные обрабатываются и хранятся на защищенных серверах CoolTrackVision. Система работает в облачном формате — вам нужен только доступ к интернету. Не требуется локальная установка мощного оборудования или дополнительного ПО."
  },
  {
    question: "Сколько времени занимает внедрение?",
    answer: "Внедрение занимает от 10 минут. Вы сами добавляете нужные камеры (можно списком из Excel файла) и выбираете нужные детекции."
  },
  {
    question: "Совместимость с камерами: какие камеры поддерживаются?",
    answer: "CoolTrackVision работает с любыми камерами, которые предоставляют видеопоток по RTSP."
  },
  {
    question: "Как обеспечивается безопасность данных?",
    answer: "Все данные шифруются и хранятся на защищенных серверах. Доступ к системе возможен только через личный кабинет с двухфакторной аутентификацией. Мы соблюдаем требования GDPR и ФЗ-152."
  },
  {
    question: "Что делать, если покрытие камер недостаточное для полного контроля?",
    answer: "Если текущее расположение камер не охватывает все зоны (например, кухня, склад, зал), мы поможем: проанализируем ваше помещение и текущую систему видеонаблюдения, порекомендуем оптимальное расположение камер или их замену (при необходимости), подскажем, какие камеры лучше использовать для конкретных зон. Консультация и рекомендации предоставляются бесплатно при внедрении системы."
  },
  {
    question: "Нужно ли обучать сотрудников работе с системой?",
    answer: "Интерфейс системы разработан с акцентом на простоту использования (включены подсказки). В случае вопросов наша команда технической поддержки поможет оперативно решить любые задачи."
  },
  {
    question: "Можно ли протестировать систему перед покупкой?",
    answer: "Да! Зарегистрируйтесь на бесплатную демо-версию. Вы сможете оценить работу системы в реальных условиях без обязательств."
  },
  {
    question: "Как рассчитывается стоимость внедрения?",
    answer: "Стоимость зависит от количества камер и выбранных моделей распознаваний (рассчитывается автоматически в интерфейсе приложения для каждого вашего ресторана)."
  },
  {
    question: "Можно ли масштабировать систему при расширении бизнеса?",
    answer: "Да! CoolTrackVision легко адаптируется под рост вашей сети: добавьте новые камеры или рестораны — система автоматически начнет их анализировать."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-left"
        >
          <span className="text-primary text-xs font-tech tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Распространённые вопросы внедрения
          </h2>
        </motion.div>

        <div className="max-w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-6 text-lg md:text-xl font-tech font-semibold uppercase tracking-wider">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 text-base md:text-lg pb-6 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
