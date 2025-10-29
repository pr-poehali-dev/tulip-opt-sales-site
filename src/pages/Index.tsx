import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const cities = [
  { id: "krasnoyarsk", name: "Красноярск" },
  { id: "abakan", name: "Абакан" },
  { id: "nsk", name: "Новосибирск" },
  { id: "irkutsk", name: "Иркутск" },
  { id: "ulan-ude", name: "Улан-Удэ" },
  { id: "msk", name: "Москва" },
  { id: "kyzyl", name: "Кызыл" },
  { id: "kemerovo", name: "Кемерово" },
  { id: "novokuzneck", name: "Новокузнецк" },
];

const tulipVarieties = [
  {
    name: "Красный шар",
    color: "Ярко-красный",
    height: "40-50 см",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/cacd0479-bef1-4f54-bac1-974fea63029a.jpg",
  },
  {
    name: "Желтое солнце",
    color: "Золотисто-желтый",
    height: "45-55 см",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/11fbe8db-86ec-49fc-9a79-cfe5b93fb576.jpg",
  },
  {
    name: "Розовая мечта",
    color: "Нежно-розовый",
    height: "35-45 см",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/b816ae2d-5d13-47f4-bc3d-e7ec1e7fa739.jpg",
  },
  {
    name: "Белоснежка",
    color: "Белый",
    height: "40-50 см",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/cacd0479-bef1-4f54-bac1-974fea63029a.jpg",
  },
];

const advantages = [
  { icon: "TrendingDown", title: "Прямые поставки = низкая цена", desc: "Без посредников" },
  { icon: "Sparkles", title: "Свежий срез", desc: "Прямо с полей" },
  { icon: "ShieldCheck", title: "Контроль качества", desc: "Только лучшие цветы" },
  { icon: "Truck", title: "Доставка до склада", desc: "По всей России" },
  { icon: "UserCheck", title: "Персональный менеджер", desc: "Всегда на связи" },
  { icon: "BadgePercent", title: "Оптовые цены", desc: "От производителя" },
];

const steps = [
  { icon: "FileText", title: "Оставляете заявку", desc: "На сайте или по телефону" },
  { icon: "Phone", title: "Менеджер связывается", desc: "В течение 30 минут" },
  { icon: "FileSignature", title: "Заключаете договор", desc: "Удаленно, онлайн" },
  { icon: "CreditCard", title: "Вносите предоплату", desc: "Безопасный платеж" },
  { icon: "Package", title: "Получаете заказ", desc: "На нашем складе" },
];

const testimonials = [
  { company: "Цветочный рай", city: "Москва", text: "Работаем с компанией третий год. Всегда свежие цветы, отличные цены и стабильное качество. Рекомендуем!" },
  { company: "Флора-Сибирь", city: "Красноярск", text: "Лучший поставщик тюльпанов в регионе! Быстрая доставка, все цветы в идеальном состоянии." },
  { company: "Букет 24", city: "Новосибирск", text: "Заказывали крупную партию к 8 марта - всё прошло безупречно. Спасибо за профессионализм!" },
];

const news = [
  {
    title: "Новые сорта тюльпанов 2025",
    date: "15 января 2025",
    preview: "В этом сезоне мы добавили 12 новых эксклюзивных сортов голландских тюльпанов в наш каталог...",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/cacd0479-bef1-4f54-bac1-974fea63029a.jpg",
  },
  {
    title: "Раннее бронирование к 8 марта",
    date: "10 января 2025",
    preview: "Успейте забронировать тюльпаны к 8 марта со скидкой 15%. Предложение действует до конца января...",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/11fbe8db-86ec-49fc-9a79-cfe5b93fb576.jpg",
  },
  {
    title: "Открытие нового склада в Иркутске",
    date: "5 января 2025",
    preview: "Рады сообщить об открытии нашего нового распределительного центра в Иркутске...",
    image: "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/b816ae2d-5d13-47f4-bc3d-e7ec1e7fa739.jpg",
  },
];

const gallery = [
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/cacd0479-bef1-4f54-bac1-974fea63029a.jpg",
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/11fbe8db-86ec-49fc-9a79-cfe5b93fb576.jpg",
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/b816ae2d-5d13-47f4-bc3d-e7ec1e7fa739.jpg",
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/cacd0479-bef1-4f54-bac1-974fea63029a.jpg",
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/11fbe8db-86ec-49fc-9a79-cfe5b93fb576.jpg",
  "https://cdn.poehali.dev/projects/fc238657-f72d-428b-8c7c-3d7c165de451/files/b816ae2d-5d13-47f4-bc3d-e7ec1e7fa739.jpg",
];

export default function Index() {
  const [selectedCity, setSelectedCity] = useState("krasnoyarsk");
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", city: "Красноярск" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentCity = cities.find((c) => c.id === selectedCity)?.name || "Красноярск";

  const handleCityChange = (cityId: string) => {
    setSelectedCity(cityId);
    setFormData((prev) => ({ ...prev, city: cities.find((c) => c.id === cityId)?.name || "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо, ваша заявка принята!", {
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", city: currentCity });
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌷</span>
            <span className="font-heading font-bold text-xl text-primary mx-0 px-0">Цветочная компания ИП Некрасов</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-foreground hover:text-primary transition">
              Каталог
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition">
              Фотогалерея
            </a>
            <a href="#news" className="text-foreground hover:text-primary transition">
              Новости
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition">
              О компании
            </a>
          </nav>

          <Select value={selectedCity} onValueChange={handleCityChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.id} value={city.id}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      <section
        className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50 animate-fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${gallery[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-foreground mb-6 animate-slide-up">
              Тюльпаны оптом от производителя купить в {currentCity}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">Свежие тюльпаны напрямую от производителя к 8 Марта. 
Низкие оптовые цены и гарантия качества!</p>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById("form-1")?.scrollIntoView({ behavior: "smooth" })}>
              Оставить заявку
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Каталог сортов тюльпанов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tulipVarieties.map((variety, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={variety.image}
                    alt={variety.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">{variety.name}</h3>
                  <p className="text-muted-foreground mb-1">
                    <span className="font-semibold">Цвет:</span> {variety.color}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Высота:</span> {variety.height}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name={advantage.icon as any} className="text-primary group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Схема сотрудничества</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 relative z-10">
                    <Icon name={step.icon as any} className="text-accent" size={28} />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-accent/20 hidden md:block" style={{ left: idx === 4 ? "50%" : "100%" }} />
                  <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-2 relative z-10">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Фотогалерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, idx) => (
              <div
                key={idx}
                className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightboxImage(image)}
              >
                <img src={image} alt={`Галерея ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Icon name="ZoomIn" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Отзывы довольных клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-green-50 to-pink-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-semibold">{testimonial.company}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="font-heading font-bold text-lg mb-2 hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground">{item.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="form-1" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-8">Заполните форму и получите коммерческое предложение в течение 30 минут</p>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="form-city">Город</Label>
                    <Input id="form-city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} readOnly />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Получить коммерческое предложение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="about" className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌷</span>
                <span className="font-heading font-bold text-xl">ТюльпаныОптом.рф</span>
              </div>
              <p className="text-white/80 mb-4">Оптовая продажа тюльпанов от производителя по всей России</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                  <Icon name="Facebook" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Наши города</h3>
              <div className="space-y-2">
                {cities.map((city) => (
                  <a key={city.id} href="#" className="block text-white/80 hover:text-white transition">
                    Купить тюльпаны оптом {city.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-3">
                <a href="tel:+79999999999" className="flex items-center gap-2 text-white/80 hover:text-white transition">
                  <Icon name="Phone" size={18} />
                  +7 (999) 999-99-99
                </a>
                <div className="flex items-center gap-2 text-white/80">
                  <Icon name="Mail" size={18} />
                  info@тюльпаныоптом.рф
                </div>
                <div>
                  <Label htmlFor="footer-city" className="text-white/80 block mb-2">
                    Выберите город:
                  </Label>
                  <Select value={selectedCity} onValueChange={handleCityChange}>
                    <SelectTrigger id="footer-city" className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.id}>
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>© 2025 ТюльпаныОптом.рф — Все права защищены</p>
          </div>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={() => setLightboxImage(null)}>
            <Icon name="X" size={32} />
          </button>
          <img src={lightboxImage} alt="Полноэкранный просмотр" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
}