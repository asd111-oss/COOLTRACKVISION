import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  // Функция для плавной прокрутки к секциям
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        
        {/* Логотип: при клике плавно скроллит в самый верх */}
        <div className="flex justify-center mb-12">
          <div 
            className="text-3xl md:text-4xl font-display font-bold tracking-tighter cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            COOL<span className="text-primary">TRACK</span>VISION
          </div>
        </div>

        {/* Навигация: кнопки вместо ссылок, чтобы не было ошибки 404 */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-xs font-tech uppercase tracking-widest text-slate-400">
          <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">О нас</button>
          <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">Функции</button>
          <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
          <button onClick={() => scrollToSection('industries')} className="hover:text-primary transition-colors">Отрасли применения</button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition-colors">Как это работает</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
        </nav>

        {/* Контактная информация */}
        <div className="flex flex-col items-center gap-6 mb-16 text-slate-300">
          <div className="flex flex-wrap justify-center gap-8 font-tech tracking-wider">
            <a href="tel:+79966729471" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+7 (996) 672-94-71</span>
            </a>
            <a href="mailto:cooltrackvision@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span>cooltrackvision@mail.ru</span>
            </a>
          </div>
          
          {/* Блок адреса: иконка сверху (items-start), текст по центру (text-center) */}
          <div className="flex items-start justify-center gap-2 max-w-lg leading-relaxed text-sm text-slate-400">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /> 
            <span className="text-center">
              г. Москва, вн. тер. г. муниципальный округ Текстильщики, пр-кт Волгоградский, д. 45, стр. 1
            </span>
          </div>
        </div>

        {/* Нижняя часть: копирайт и ссылки */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-tech">
          <div>© 2025 CoolTrackVision. All rights reserved.</div>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-slate-300">Политика конфиденциальности</span>
            <span className="cursor-pointer hover:text-slate-300">Пользовательское соглашение</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
