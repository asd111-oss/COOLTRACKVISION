import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Кнопка назад */}
          <Link href="/" className="group inline-flex items-center mb-16">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform text-primary" />
            <span className="font-tech text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-white">
              На главную
            </span>
          </Link>

          {/* Карточка соглашения */}
          <div className="bg-white/5 backdrop-blur-xl rounded-sm border border-white/10 p-12">
            <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-8 text-center">
              Пользовательское соглашение
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Настоящее Пользовательское соглашение регулирует порядок использования
              платформы CoolTrackVision и является публичной офертой ООО
              «Видеоаналитика ресторанов». Используя сервис, вы подтверждаете
              согласие с условиями соглашения.
            </p>

            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4 text-primary">
              1. Общие положения
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              1.1. Сервис предоставляет доступ к функционалу видеоаналитики,
              детекции нарушений, мониторингу сотрудников и формированию отчетов.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              1.2. Пользователь обязуется использовать сервис только в рамках действующего
              законодательства Российской Федерации и внутренних регламентов компании.
            </p>

            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4 text-primary">
              2. Регистрация и доступ
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              2.1. Для получения доступа к личному кабинету создается учетная запись
              пользователя.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              2.2. Пользователь несет ответственность за сохранность логина и пароля,
              а также за все действия, совершенные под его учетной записью.
            </p>

            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4 text-primary">
              3. Ответственность сторон
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              3.1. Мы обеспечиваем работу сервиса в разумных технических пределах и
              оказываем поддержку пользователям.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              3.2. Мы не несем ответственности за убытки, вызванные некорректным
              использованием сервиса, ошибками оборудования пользователя или
              сторонних систем.
            </p>

            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4 text-primary">
              4. Обработка данных
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              4.1. Условия обработки персональных данных и видеоданных описаны
              в Политике конфиденциальности.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              4.2. Используя сервис, пользователь подтверждает, что ознакомился
              и согласен с Политикой конфиденциальности.
            </p>

            <h2 className="text-xl font-semibold uppercase tracking-wide mb-4 text-primary">
              5. Заключительные положения
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              5.1. Мы вправе обновлять условия соглашения, размещая актуальную
              редакцию на сайте.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              5.2. Продолжение использования сервиса после изменения условий означает
              согласие пользователя с новой редакцией.
            </p>

            <div className="text-center">
              <Link
                href="#/privacy"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary/40 text-primary font-semibold uppercase text-sm tracking-[0.07em] rounded-sm hover:bg-primary/10 transition-all"
              >
                Ознакомиться с Политикой конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
