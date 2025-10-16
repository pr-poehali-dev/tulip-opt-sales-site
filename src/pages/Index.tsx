import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const cityMapping: Record<string, string> = {
  'krasnoyarsk': 'Красноярске',
  'abakan': 'Абакане',
  'nsk': 'Новосибирске',
  'irkutsk': 'Иркутске',
  'ulan-ude': 'Улан-Удэ',
  'msk': 'Москве',
  'kizil': 'Кызыле',
  'kemerovo': 'Кемерово',
  'novokuzneck': 'Новокузнецке',
};

const tulipVarieties = [
  {
    name: 'Красный Апельдорн',
    color: 'Ярко-красный',
    height: '50-60 см',
    flowering: 'Апрель-май',
    image: 'https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/477b68d8-7abd-4c87-a77b-22b947cfe9a8.jpg',
    price: '250₽/стебель'
  },
  {
    name: 'Белый Лайон',
    color: 'Чисто-белый',
    height: '45-55 см',
    flowering: 'Март-апрель',
    image: 'https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/ff04f7b0-bfb3-4916-b9e1-bea8d2efc364.jpg',
    price: '230₽/стебель'
  },
  {
    name: 'Розовый Анжелика',
    color: 'Нежно-розовый',
    height: '40-50 см',
    flowering: 'Апрель-май',
    image: 'https://v3b.fal.media/files/b/rabbit/Ing9Voc3nxSUJSJgtYBAF_output.png',
    price: '240₽/стебель'
  },
];

const advantages = [
  {
    icon: 'Flower2',
    title: 'Прямые поставки',
    description: 'От производителя из Голландии и России — лучшие цены на рынке'
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставка до вашего склада в любом городе России'
  },
  {
    icon: 'Shield',
    title: 'Контроль качества',
    description: 'Свежий срез и строгий контроль на каждом этапе'
  },
  {
    icon: 'TrendingDown',
    title: 'Гибкие скидки',
    description: 'Система скидок для крупного опта — чем больше заказ, тем выгоднее'
  },
  {
    icon: 'Users',
    title: 'Личный менеджер',
    description: 'Индивидуальный подход и поддержка на всех этапах сделки'
  },
  {
    icon: 'Award',
    title: 'Гарантия качества',
    description: 'Официальный договор и гарантия свежести цветов'
  },
];

const steps = [
  { number: 1, title: 'Оставьте заявку', description: 'Заполните форму на сайте или позвоните' },
  { number: 2, title: 'Консультация', description: 'Менеджер свяжется и уточнит детали заказа' },
  { number: 3, title: 'Договор онлайн', description: 'Подписываем договор удаленно' },
  { number: 4, title: 'Предоплата 30%', description: 'Вносите предоплату удобным способом' },
  { number: 5, title: 'Получение', description: 'Забираете заказ на складе в вашем городе' },
];

const testimonials = [
  {
    company: 'Сеть "Цветочный рай"',
    city: 'Красноярск',
    text: 'Работаем второй сезон. Качество отличное, цены адекватные. Тюльпаны всегда свежие, клиенты довольны!',
    author: 'Анна Петрова'
  },
  {
    company: 'ИП Соколов',
    city: 'Новосибирск',
    text: 'Заказывали на 8 марта 5000 тюльпанов. Всё пришло вовремя, упаковка отличная. Рекомендую!',
    author: 'Дмитрий Соколов'
  },
  {
    company: 'Магазин "Флора"',
    city: 'Москва',
    text: 'Прямые поставки — это реально выгодно. Сэкономили почти 40% по сравнению с местными поставщиками.',
    author: 'Елена Васильева'
  },
];

export default function Index() {
  const [city, setCity] = useState('Красноярске');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
  });

  useEffect(() => {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    const detectedCity = cityMapping[subdomain] || 'Красноярске';
    setCity(detectedCity);
    setFormData(prev => ({ ...prev, city: detectedCity }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Flower2" className="text-primary" size={32} />
              <span className="text-2xl font-heading font-bold text-primary">ТюльпаныОптом.рф</span>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#catalog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#advantages" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#cooperation" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Сотрудничество</a>
              <a href="#reviews" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <a href="tel:+78001234567" className="hidden md:flex items-center gap-2 font-medium text-primary">
              <Icon name="Phone" size={20} />
              8 (800) 123-45-67
            </a>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-muted via-background to-accent/5 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Тюльпаны оптом от производителя купить в <span className="text-primary">{city}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Прямые поставки из Голландии и России. Свежие цветы высшего качества к 8 марта по оптовым ценам.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Получить расчёт
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/864d22de-3884-49dc-9e8c-953d9c702af4.jpg" 
                alt="Свежие тюльпаны оптом" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Каталог сортов тюльпанов</h2>
            <p className="text-lg text-muted-foreground">Выберите из лучших сортов для вашего бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tulipVarieties.map((variety, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up border-2 hover:border-primary">
                <div className="aspect-square overflow-hidden">
                  <img src={variety.image} alt={variety.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{variety.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={16} className="text-primary" />
                      <span>Цвет: {variety.color}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Ruler" size={16} className="text-primary" />
                      <span>Высота: {variety.height}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-primary" />
                      <span>Цветение: {variety.flowering}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{variety.price}</span>
                    <Button variant="outline" size="sm">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name={advantage.icon} className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cooperation" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Схема сотрудничества</h2>
            <p className="text-lg text-muted-foreground">Всего 5 простых шагов до вашего заказа</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0 items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-2xl shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Отзывы довольных клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши партнёры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Quote" className="text-accent" size={24} />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-primary">{testimonial.city}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="request-form" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-xl border-2 border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Получить расчёт стоимости</h2>
                <p className="text-lg text-muted-foreground">Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <Input 
                    type="text" 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-lg h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Город</label>
                  <Input 
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="text-lg h-12 bg-muted"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg h-14">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Общие контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Телефон</p>
                    <a href="tel:+78001234567" className="text-primary hover:underline">8 (800) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@tulipany-optom.ru" className="text-primary hover:underline">info@tulipany-optom.ru</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Вс: 8:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Склад в {city}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Адрес склада</p>
                    <p className="text-muted-foreground">г. {city}, ул. Складская, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Package" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="font-medium text-foreground">Забор заказов</p>
                    <p className="text-muted-foreground">Только по предварительной записи</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flower2" size={28} />
                <span className="text-xl font-heading font-bold">ТюльпаныОптом.рф</span>
              </div>
              <p className="text-sm opacity-80">Прямые поставки тюльпанов от производителя по всей России</p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#catalog" className="hover:opacity-100 transition-opacity">Каталог</a></li>
                <li><a href="#advantages" className="hover:opacity-100 transition-opacity">Преимущества</a></li>
                <li><a href="#cooperation" className="hover:opacity-100 transition-opacity">Сотрудничество</a></li>
                <li><a href="#reviews" className="hover:opacity-100 transition-opacity">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>8 (800) 123-45-67</li>
                <li>info@tulipany-optom.ru</li>
                <li>Пн-Вс: 8:00 - 20:00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Города</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Красноярск</li>
                <li>Новосибирск</li>
                <li>Москва</li>
                <li>+ 7 других городов</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-70">
            <p>© 2024 ТюльпаныОптом.рф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
