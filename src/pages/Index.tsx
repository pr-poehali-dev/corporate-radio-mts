import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Корпоративное Радио для МТС',
    subtitle: 'Профессиональное решение для внутренних коммуникаций',
    content: (
      <div className="text-center space-y-6">
        <div className="inline-block bg-mts-red text-white px-8 py-3 rounded-lg text-xl font-montserrat font-semibold">
          🎙️ КОРПОРАТИВНОЕ РАДИО
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-roboto">
          Автор идеи: Тигран, 29 лет<br />
          Профессиональный диктор и радиоведущий
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Цель проекта',
    subtitle: 'Три направления развития корпоративной культуры',
    content: (
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="p-6 bg-white hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="text-mts-red mb-4">
            <Icon name="Bell" size={40} />
          </div>
          <h3 className="font-montserrat font-semibold text-lg mb-3">Оперативная информация</h3>
          <p className="text-gray-600 font-roboto">Быстрое донесение важной информации до всех сотрудников</p>
        </Card>
        <Card className="p-6 bg-white hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="text-mts-red mb-4">
            <Icon name="Users" size={40} />
          </div>
          <h3 className="font-montserrat font-semibold text-lg mb-3">Корпоративная культура</h3>
          <p className="text-gray-600 font-roboto">Укрепление единства и вовлеченности команды</p>
        </Card>
        <Card className="p-6 bg-white hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="text-mts-red mb-4">
            <Icon name="Smile" size={40} />
          </div>
          <h3 className="font-montserrat font-semibold text-lg mb-3">Комфортная атмосфера</h3>
          <p className="text-gray-600 font-roboto">Создание приятной среды для клиентов салонов МТС</p>
        </Card>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Почему радио?',
    subtitle: 'Преимущества радиоформата для бизнеса',
    content: (
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-6 bg-white border-l-4 border-mts-red animate-scale-in" style={{animationDelay: '0.1s'}}>
          <div className="flex items-start gap-4">
            <div className="text-mts-red mt-1">
              <Icon name="Zap" size={32} />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Быстрая коммуникация</h3>
              <p className="text-gray-600 font-roboto">Моментальная передача информации всем сотрудникам одновременно</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border-l-4 border-mts-red animate-scale-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-start gap-4">
            <div className="text-mts-red mt-1">
              <Icon name="Headphones" size={32} />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Удобный формат</h3>
              <p className="text-gray-600 font-roboto">Не отвлекает от работы, информация воспринимается на слух</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border-l-4 border-mts-red animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="flex items-start gap-4">
            <div className="text-mts-red mt-1">
              <Icon name="Heart" size={32} />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Эмоциональное вовлечение</h3>
              <p className="text-gray-600 font-roboto">Живой голос создает личный контакт с аудиторией</p>
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border-l-4 border-mts-red animate-scale-in" style={{animationDelay: '0.4s'}}>
          <div className="flex items-start gap-4">
            <div className="text-mts-red mt-1">
              <Icon name="Layers" size={32} />
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Гибкость контента</h3>
              <p className="text-gray-600 font-roboto">Музыка, новости, интервью и обучение в одном канале</p>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Что я предлагаю',
    subtitle: 'Комплексное решение под ключ',
    content: (
      <div className="max-w-3xl mx-auto space-y-4">
        {[
          { icon: 'Radio', text: 'Разработка и запуск интернет-радиостанции под брендом МТС' },
          { icon: 'Mic', text: 'Профессиональное ведение эфиров' },
          { icon: 'FileText', text: 'Создание контента: новости компании, интервью с сотрудниками' },
          { icon: 'TrendingUp', text: 'Мотивационные и обучающие рубрики' },
          { icon: 'Music', text: 'Тематические музыкальные подборки' },
          { icon: 'Workflow', text: 'Интеграция в корпоративную ИТ-инфраструктуру' },
        ].map((item, idx) => (
          <Card key={idx} className="p-5 bg-white hover:bg-gray-50 transition-colors animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
            <div className="flex items-center gap-4">
              <div className="text-mts-red">
                <Icon name={item.icon} size={28} />
              </div>
              <p className="font-roboto text-gray-800 text-lg">{item.text}</p>
            </div>
          </Card>
        ))}
      </div>
    ),
  },
  {
    id: 5,
    title: 'Преимущества для МТС',
    subtitle: 'Выгоды для компании и клиентов',
    content: (
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <div className="bg-mts-red text-white p-4 rounded-t-lg">
            <h3 className="font-montserrat font-bold text-xl flex items-center gap-2">
              <Icon name="Briefcase" size={24} />
              Для сотрудников
            </h3>
          </div>
          <Card className="p-6 bg-white rounded-t-none space-y-3">
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Быстрая коммуникация важной информации</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Повышение вовлечённости в корпоративную жизнь</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Обучение и профессиональное развитие</p>
            </div>
          </Card>
        </div>
        <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="bg-mts-red text-white p-4 rounded-t-lg">
            <h3 className="font-montserrat font-bold text-xl flex items-center gap-2">
              <Icon name="ShoppingBag" size={24} />
              Для клиентов
            </h3>
          </div>
          <Card className="p-6 bg-white rounded-t-none space-y-3">
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Приятная атмосфера в салонах связи</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Информирование о новинках и акциях</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="Check" className="text-green-600 mt-1" size={20} />
              <p className="font-roboto">Уникальный опыт взаимодействия с брендом</p>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Следующие шаги',
    subtitle: 'Путь к запуску проекта',
    content: (
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4 mb-8">
          {[
            { num: '01', text: 'Обсуждение формата и задач проекта' },
            { num: '02', text: 'Техническое развёртывание инфраструктуры' },
            { num: '03', text: 'Запуск пилотного эфира' },
            { num: '04', text: 'Анализ результатов и масштабирование' },
          ].map((step, idx) => (
            <div key={step.num} className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow animate-fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className="w-16 h-16 bg-mts-red text-white rounded-lg flex items-center justify-center font-montserrat font-bold text-xl flex-shrink-0">
                {step.num}
              </div>
              <p className="font-roboto text-lg text-gray-800">{step.text}</p>
            </div>
          ))}
        </div>
        <Card className="p-8 bg-white border-2 border-mts-red animate-scale-in" style={{animationDelay: '0.5s'}}>
          <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">Контакты</h3>
          <div className="text-center space-y-3">
            <p className="font-montserrat font-semibold text-xl">Тигран</p>
            <p className="text-gray-600 font-roboto">Профессиональный диктор и радиоведущий</p>
            <p className="text-gray-600 font-roboto italic">Готов обсудить детали и запустить проект вместе с вами!</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button className="bg-mts-red hover:bg-red-700 text-white font-montserrat">
                <Icon name="Phone" size={18} className="mr-2" />
                +7 986 797 24 07
              </Button>
              <Button variant="outline" className="border-mts-red text-mts-red hover:bg-mts-red hover:text-white font-montserrat">
                <Icon name="Send" size={18} className="mr-2" />
                @theovervoice
              </Button>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const exportToPDF = () => {
    window.print();
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mts-gray to-white font-roboto relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E30611" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-mts-red opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-mts-red opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-mts-red rounded-lg flex items-center justify-center text-white font-montserrat font-bold text-2xl">
              M
            </div>
            <span className="font-montserrat font-bold text-2xl text-gray-800">МТС</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={exportToPDF}
              variant="outline"
              className="border-mts-red text-mts-red hover:bg-mts-red hover:text-white print:hidden"
            >
              <Icon name="Download" size={18} className="mr-2" />
              Скачать PDF
            </Button>
            <div className="text-sm text-gray-500 font-roboto">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="text-center mb-12">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-3 text-gray-900">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-gray-600 font-roboto">{slides[currentSlide].subtitle}</p>
            </div>

            <div className="py-8">{slides[currentSlide].content}</div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="border-mts-red text-mts-red hover:bg-mts-red hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-mts-red"
          >
            <Icon name="ChevronLeft" size={20} className="mr-1" />
            Назад
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-mts-red w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="bg-mts-red hover:bg-red-700 text-white disabled:opacity-30"
          >
            Далее
            <Icon name="ChevronRight" size={20} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}