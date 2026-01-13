import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4 text-center">
        {/* Шрифт заголовка уменьшен до 4xl, как в оригинале */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-normal text-white">
          Попробуйте CoolTrackVision бесплатно на своих камерах
        </h2>
        
        {/* Подзаголовок стал более компактным */}
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-base">
          Убедитесь в эффективности системы на реальных данных вашего объекта
        </p>

        {/* Кнопка теперь является ссылкой на платформу */}
        <a 
          href="https://app.cooltrackvision.ru/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            className="bg-[#ff6600] hover:bg-[#e65c00] text-white rounded-none px-8 py-6 text-sm uppercase tracking-wider font-semibold"
          >
            Хочу посмотреть на своих камерах
          </Button>
        </a>
      </div>
    </section>
  );
}