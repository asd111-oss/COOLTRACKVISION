import { Mail, MapPin, Phone } from "lucide-react";
import { useLocation, Link } from "wouter";

export function Footer() {
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    // --- ПРАВИЛЬНЫЕ ПЕРЕХОДЫ НА СТРАНИЦЫ ---
    if (id === "about") { setLocation("/about"); return; }
    if (id === "features") { setLocation("/features"); return; }
    if (id === "benefits") { setLocation("/core-benefits"); return; }
    if (id === "industries" || id === "solutions") { setLocation("/industry-solutions"); return; }
    
    // ДОБАВЛЕНО: Переход на страницу кейсов
    if (id === "cases" || id === "how-it-works") { 
      setLocation("/cases"); 
      return; 
    }

    // --- ЛОГИКА ДЛЯ ЯКОРЕЙ НА ГЛАВНОЙ ---
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-transparent text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="text-3xl md:text-4xl font-display font-bold tracking-tighter cursor-pointer group hover:scale-105 transition-all duration-300" onClick={() => setLocation("/")}>
            COOL<span className="text-primary group-hover:scale-110 transition-transform">TRACK</span>VISION
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 mb-16 text-sm text-slate-400">
          <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">О нас</button>
          <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">Функции</button>
          <button onClick={() => scrollToSection("benefits")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">Преимущества</button>
          <button onClick={() => scrollToSection("industries")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">Отрасли</button>
          
          {/* ИЗМЕНЕНО: Название заменено на "Кейсы", ID обновлен */}
          <button onClick={() => scrollToSection("cases")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">Кейсы</button>
          
          <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors bg-transparent cursor-pointer outline-none border-none">Контакты</button>
        </nav>

        <div className="flex flex-col items-center gap-8 mb-16 text-slate-300">
          <div className="flex flex-wrap justify-center gap-8 font-tech tracking-wider text-sm">
            <a href="tel:+79966729471" className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="w-5 h-5 text-primary" /> +7 (996) 672-94-71</a>
            <a href="mailto:cooltrackvision@mail.ru" className="flex items-center gap-3 hover:text-primary transition-colors"><Mail className="w-5 h-5 text-primary" /> cooltrackvision@mail.ru</a>
          </div>
          <div className="flex items-start justify-center gap-1 max-w-xl text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-primary mt-[3px]" />
            <span className="text-center">г. Москва, пр-кт Волгоградский, д. 45, стр. 1</span>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 uppercase tracking-[0.3em] font-tech">
          <div>© 2025 CoolTrackVision. Все права защищены.</div>
          
          <div className="flex gap-8">
            <Link href="/privacy">
              <span className="hover:text-primary transition-colors cursor-pointer">Политика конфиденциальности</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-primary transition-colors cursor-pointer">Пользовательское соглашение</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}