import { useEffect, useState } from "react";
import { Link } from "wouter";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl mb-6 px-4">
        <div className="bg-[#020617]/95 border border-white/10 rounded-sm p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-2xl">
          <div className="text-xs md:text-sm text-slate-200 leading-relaxed">
            Мы используем файлы cookie для улучшения работы сайта и анализа поведения пользователей.
            Продолжая пользоваться сайтом, вы соглашаетесь с использованием cookie.{" "}
            <Link
              href="#/privacy"
              className="underline text-primary hover:text-orange-400 transition-colors"
            >
              Подробнее в Политике конфиденциальности
            </Link>
            .
          </div>
          <div className="flex gap-3 justify-end">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] rounded-sm border border-primary/40 text-primary hover:bg-primary/10 transition-all"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
