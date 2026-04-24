import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/201ff8fc-b8ce-4ecd-9505-d7873a4cf9a8/bucket/5b8efaea-94f5-4f9f-940e-734938ad5477.jpeg";
const LOGO_IMAGE = "https://cdn.poehali.dev/projects/201ff8fc-b8ce-4ecd-9505-d7873a4cf9a8/bucket/7a5b001f-5037-442f-a770-747f82adbe63.jpeg";
const GALLERY_IMG_1 = "https://cdn.poehali.dev/projects/201ff8fc-b8ce-4ecd-9505-d7873a4cf9a8/bucket/a1b58b3d-5f01-412c-affe-8cb06fad4153.jpeg";
const GALLERY_IMG_2 = "https://cdn.poehali.dev/projects/201ff8fc-b8ce-4ecd-9505-d7873a4cf9a8/bucket/bd7feba5-20cd-4bd0-b053-b685a446f6b6.jpeg";

const plans = [
  {
    name: "СТАРТ",
    price: "2 500",
    period: "/ месяц",
    visits: "8 занятий",
    features: ["Групповые тренировки", "Раздевалка", "Консультация тренера"],
    highlight: false,
  },
  {
    name: "ПРОГРЕСС",
    price: "4 500",
    period: "/ месяц",
    visits: "Безлимит",
    features: ["Все групповые программы", "2 персональных занятия", "Анализ питания", "Раздевалка + полотенце"],
    highlight: true,
  },
  {
    name: "ЭЛИТА",
    price: "8 000",
    period: "/ месяц",
    visits: "Безлимит VIP",
    features: ["Приоритетная запись", "4 персональных занятия", "Программа питания", "Спортивное питание", "Персональный тренер"],
    highlight: false,
  },
];

const features = [
  { icon: "Dumbbell", title: "Профессиональный зал", desc: "Современное оборудование мирового класса" },
  { icon: "Users", title: "Опытные тренеры", desc: "Команда сертифицированных специалистов" },
  { icon: "Trophy", title: "Результаты", desc: "Сотни спортсменов достигли своих целей" },
  { icon: "Flame", title: "Энергия каждый день", desc: "Заряжаем на победы 7 дней в неделю" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", plan: "" });

  const aboutSection = useInView();
  const plansSection = useInView();
  const gallerySection = useInView();
  const contactSection = useInView();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="font-oswald text-2xl font-bold tracking-widest">
            <span className="text-gradient">ВАМОС</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "О клубе", id: "about" },
              { label: "Абонементы", id: "plans" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link font-oswald text-sm tracking-widest text-white/70 hover:text-white transition-colors uppercase"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="bg-fire font-oswald text-sm tracking-widest px-5 py-2 uppercase font-semibold hover:opacity-90 transition-opacity"
            >
              Записаться
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {[
              { label: "О клубе", id: "about" },
              { label: "Абонементы", id: "plans" },
              { label: "Галерея", id: "gallery" },
              { label: "Контакты", id: "contact" },
              { label: "Записаться", id: "booking" },
            ].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="font-oswald text-base tracking-widest text-white/80 hover:text-white text-left uppercase">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />

        <div className="absolute top-0 right-0 w-1 h-full bg-fire opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="w-10 h-0.5 bg-fire" />
              <span className="font-oswald text-sm tracking-[0.3em] text-[#b48fde] uppercase">Детский футбольный клуб</span>
            </div>

            <div className="flex items-center gap-6 animate-fade-up delay-100">
              <img src={LOGO_IMAGE} alt="Вамос логотип" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl" />
              <h1 className="font-oswald text-7xl md:text-9xl font-bold leading-none">
                ВАМОС
              </h1>
            </div>

            <p className="font-oswald text-2xl md:text-3xl font-light tracking-widest text-white/60 mb-8 animate-fade-up delay-200">
              ДВИЖЕНИЕ — ЭТО ЖИЗНЬ
            </p>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-300">
              Присоединяйся к клубу, где рождаются победители. Профессиональные тренеры, современное оборудование и атмосфера, которая заряжает.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <button
                onClick={() => scrollTo("booking")}
                className="bg-fire font-oswald text-base tracking-widest px-8 py-4 uppercase font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
              >
                Записаться на тренировку
              </button>
              <button
                onClick={() => scrollTo("plans")}
                className="border border-white/30 font-oswald text-base tracking-widest px-8 py-4 uppercase font-semibold hover:border-[#b48fde] hover:text-[#b48fde] transition-all"
              >
                Абонементы
              </button>
            </div>

            <div className="flex gap-10 mt-14 animate-fade-up delay-500">
              {[
                { num: "500+", label: "Спортсменов" },
                { num: "15+", label: "Тренеров" },
                { num: "8", label: "Лет опыта" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-oswald text-3xl font-bold text-gradient">{stat.num}</div>
                  <div className="text-sm text-white/50 tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-fire">
          <span className="font-oswald text-xs tracking-widest text-white/30 uppercase">Скролл</span>
          <Icon name="ChevronDown" size={16} className="text-white/30" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 relative" ref={aboutSection.ref}>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#b48fde]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-fire" />
              <span className="font-oswald text-sm tracking-[0.3em] text-[#FF6B1A] uppercase">О клубе</span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-oswald text-5xl md:text-6xl font-bold leading-tight mb-6">
                  МЫ — ЭТО<br />
                  <span className="text-gradient">БОЛЬШЕ ЧЕМ</span><br />
                  СПОРТЗАЛ
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Клуб Вамос — это место, где спорт становится стилем жизни. Мы создали пространство, где каждый найдёт свой путь к победе: от новичков до профессиональных атлетов.
                </p>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Наши программы разработаны так, чтобы давать максимальный результат при минимальном риске травм. Индивидуальный подход — наш главный принцип.
                </p>
                <div className="flex items-center gap-3 text-[#b48fde]">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">г. Москва, ул. Спортивная, 42</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div
                    key={f.title}
                    className="card-hover bg-[#111] border border-white/5 p-6"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-fire flex items-center justify-center mb-4">
                      <Icon name={f.icon} size={18} className="text-white" />
                    </div>
                    <h3 className="font-oswald text-base font-semibold mb-2 tracking-wide">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-28 bg-[#0A0A0A] relative" ref={plansSection.ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${plansSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-fire" />
                <span className="font-oswald text-sm tracking-[0.3em] text-[#b48fde] uppercase">Абонементы</span>
                <div className="w-12 h-0.5 bg-fire" />
              </div>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold">ВЫБЕРИ СВОЙ ПУТЬ</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`relative card-hover p-8 border transition-all duration-300 ${
                    plan.highlight
                      ? "border-[#b48fde] bg-[#111]"
                      : "border-white/5 bg-[#0F0F0F]"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fire px-4 py-1">
                      <span className="font-oswald text-xs tracking-widest font-semibold text-white uppercase">Популярный</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-oswald text-2xl font-bold tracking-widest mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`font-oswald text-4xl font-bold ${plan.highlight ? "text-gradient" : "text-white"}`}>
                        {plan.price} ₽
                      </span>
                      <span className="text-white/40 text-sm">{plan.period}</span>
                    </div>
                    <div className="mt-2 text-[#b48fde] font-oswald text-sm tracking-wider">{plan.visits}</div>
                  </div>

                  <div className="w-full h-px bg-white/5 mb-6" />

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-white/70 text-sm">
                        <Icon name="Check" size={14} className="text-[#b48fde] flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, plan: plan.name }));
                      scrollTo("booking");
                    }}
                    className={`w-full font-oswald text-sm tracking-widest py-3 uppercase font-semibold transition-all hover:opacity-90 active:scale-95 ${
                      plan.highlight
                        ? "bg-fire text-white"
                        : "border border-white/20 text-white hover:border-[#b48fde] hover:text-[#b48fde]"
                    }`}
                  >
                    Выбрать
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28" ref={gallerySection.ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-fire" />
              <span className="font-oswald text-sm tracking-[0.3em] text-[#b48fde] uppercase">Фотогалерея</span>
            </div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold mb-12">НАША АТМОСФЕРА</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-7 relative group overflow-hidden">
                <img
                  src={GALLERY_IMG_1}
                  alt="Тренировка"
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="font-oswald text-xl tracking-widest">ТРЕНИРОВКИ</span>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="relative group overflow-hidden flex-1">
                  <img
                    src={GALLERY_IMG_2}
                    alt="Тренировка 2"
                    className="w-full h-full min-h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-oswald text-lg tracking-widest">НА ПОЛЕ</span>
                  </div>
                </div>

                <div className="relative group overflow-hidden flex-1 bg-[#111] flex items-center justify-center">
                  <img
                    src={HERO_IMAGE}
                    alt="Флаг клуба"
                    className="w-full h-full min-h-44 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="font-oswald text-lg tracking-widest">СИМВОЛИКА КЛУБА</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-28 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b48fde]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#9b6fcf]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-0.5 bg-fire" />
                <span className="font-oswald text-sm tracking-[0.3em] text-[#b48fde] uppercase">Запись</span>
              </div>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold leading-tight mb-6">
                ПЕРВАЯ<br />
                <span className="text-gradient">ТРЕНИРОВКА</span><br />
                БЕСПЛАТНО
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Оставь заявку и мы свяжемся с тобой в течение 15 минут. Первое занятие — без оплаты. Убедись сам, что Вамос создан для тебя.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "Phone", text: "+7 (999) 123-45-67" },
                  { icon: "Mail", text: "hello@vamos-club.ru" },
                  { icon: "Clock", text: "Пн–Вс: 07:00 – 23:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white/70">
                    <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center">
                      <Icon name={item.icon} size={14} className="text-[#b48fde]" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] border border-white/5 p-8">
              <h3 className="font-oswald text-2xl font-bold tracking-wide mb-6">ЗАПИСАТЬСЯ</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Как тебя зовут?"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 text-sm focus:border-[#b48fde] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 text-sm focus:border-[#b48fde] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-2">Абонемент</label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData(prev => ({ ...prev, plan: e.target.value }))}
                    className="w-full bg-[#1A1A1A] border border-white/10 px-4 py-3 text-white text-sm focus:border-[#b48fde] focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Выбери план (необязательно)</option>
                    <option value="СТАРТ">Старт — 2 500 ₽/мес</option>
                    <option value="ПРОГРЕСС">Прогресс — 4 500 ₽/мес</option>
                    <option value="ЭЛИТА">Элита — 8 000 ₽/мес</option>
                  </select>
                </div>
                <button className="w-full bg-fire font-oswald text-sm tracking-widest py-4 uppercase font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 mt-2 text-white">
                  Отправить заявку
                </button>
                <p className="text-white/30 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28" ref={contactSection.ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${contactSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-fire" />
              <span className="font-oswald text-sm tracking-[0.3em] text-[#b48fde] uppercase">Контакты</span>
            </div>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold mb-12">КАК НАС НАЙТИ</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  lines: ["г. Москва", "ул. Спортивная, д. 42", "м. Спортивная, 5 мин пешком"],
                },
                {
                  icon: "Phone",
                  title: "Телефон",
                  lines: ["+7 (999) 123-45-67", "+7 (999) 765-43-21", "Звоним с 8:00 до 22:00"],
                },
                {
                  icon: "Clock",
                  title: "Режим работы",
                  lines: ["Понедельник – Пятница", "07:00 – 23:00", "Суббота – Воскресенье 09:00 – 21:00"],
                },
              ].map((item) => (
                <div key={item.title} className="card-hover bg-[#111] border border-white/5 p-8">
                  <div className="w-12 h-12 bg-fire flex items-center justify-center mb-6">
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold tracking-wide mb-4">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "text-white/80" : "text-white/40"} leading-loose`}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-xl font-bold tracking-widest">
            <span className="text-gradient">ВАМОС</span>
          </div>
          <div className="flex gap-6">
            {["ВКонтакте", "Telegram", "Instagram"].map((social) => (
              <a key={social} href="#" className="font-oswald text-xs tracking-widest text-white/30 hover:text-[#b48fde] transition-colors uppercase">
                {social}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/20">
            © 2024 Вамос. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}