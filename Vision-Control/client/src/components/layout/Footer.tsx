import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Логотип */}
        <div className="flex justify-center mb-12">
          <div
            className="text-3xl md:text-4xl font-display font-bold tracking-tighter cursor-pointer group hover:scale-105 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            COOL<span className="text-primary group-hover:scale-110 transition-transform">TRACK</span>VISION
          </div>
        </div>

        {/* Навигация — обычный текст, 20px расстояние */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-16 text-sm text-slate-400">
          <a
            href="#/about"
            className="hover:text-primary transition-colors duration-300"
          >
            О нас
          </a>
          <a
            href="#/features"
            className="hover:text-primary transition-colors duration-300"
          >
            Функции
          </a>
          <button
            onClick={() => scrollToSection("benefits")}
            className="hover:text-primary transition-colors duration-300"
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="hover:text-primary transition-colors duration-300"
          >
            Отрасли
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-primary transition-colors duration-300"
          >
            Как это работает
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors duration-300"
          >
            Контакты
          </button>
        </nav>

        {/* Контакты */}
        <div className="flex flex-col items-center gap-8 mb-16 text-slate-300">
          <div className="flex flex-wrap justify-center gap-8 font-tech tracking-wider text-sm">
            <a
              href="tel:+79966729471"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+7 (996) 672-94-71</span>
            </a>
            <a
              href="mailto:cooltrackvision@mail.ru"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>cooltrackvision@mail.ru</span>
            </a>
          </div>

          {/* Адрес: иконка максимально близко к тексту (gap-1) и выровнена по верху */}
          <div className="flex items-start justify-center gap-1 max-w-xl leading-relaxed text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-[3px]" />
            <span className="text-center">
              г. Москва, вн. тер. г. муниципальный округ Текстильщики, пр-кт Волгоградский, д. 45, стр. 1
            </span>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-[0.3em] font-tech">
          <div>© 2025 CoolTrackVision. Все права защищены.</div>
          <div className="flex gap-8">
            <a
              href="#/privacy"
              className="hover:text-primary transition-colors pb-1"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#/terms"
              className="hover:text-primary transition-colors pb-1"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
