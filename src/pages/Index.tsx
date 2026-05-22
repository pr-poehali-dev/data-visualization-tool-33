import { useState } from "react";
import Icon from "@/components/ui/icon";

const DAY_MENU = [
  {
    tag: "Легенда",
    tagColor: "#8B1A1A",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Борщ по-домашнему",
    price: "220 ₽",
    desc: "Густой, тёмный, с пампушкой и чесноком. Как готовила бабушка — никакого бульонного кубика.",
  },
  {
    tag: "Хит дня",
    tagColor: "#3BBFBF",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Драники со сметаной",
    price: "180 ₽",
    desc: "Хрустящие снаружи, нежные внутри. Подаём со своей сметаной и укропом.",
  },
  {
    tag: "Советская классика",
    tagColor: "#6B4C2A",
    img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Бефстроганов",
    price: "320 ₽",
    desc: "Мягкая говядина в сливочном соусе, гречневая каша. Рецепт из 1964 года — без изменений.",
  },
];

const NIGHT_MENU = [
  {
    tag: "Must Try",
    tagColor: "#8B1A1A",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Клаб Сэндвич «50-е»",
    price: "680 ₽",
    desc: "Индейка, бекон, томат, айсберг, яйцо и горчичный майонез на тостовом хлебе. Классика Сан-Франциско.",
  },
  {
    tag: "Огонь",
    tagColor: "#C85000",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Говяжья Грудинка",
    price: "890 ₽",
    desc: "12 часов копчения, соус BBQ, маринованный лук и кукурузный хлеб. Техас в сердце города.",
  },
  {
    tag: "Десерт",
    tagColor: "#3BBFBF",
    img: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    name: "Чизкейк Нью-Йорк",
    price: "340 ₽",
    desc: "Плотный, кремовый, с корочкой из крекера Graham. Никаких компромиссов с оригинальным рецептом.",
  },
];

const PLAYLISTS = [
  { id: "jazz", icon: "Music", label: "Джаз для компота", sub: "Диксиленд · Только днём" },
  { id: "rock", icon: "Zap", label: "Рокабилли-драйв", sub: "Elvis, Eddie Cochran, Chuck Berry" },
  { id: "slow", icon: "Heart", label: "Медляки для коктейля", sub: "Slow Dance · Вечерний вайб" },
  { id: "soviet", icon: "Radio", label: "Советский эфир", sub: "Муслим, Пугачёва, радиолы" },
];

export default function Index() {
  const [mode, setMode] = useState<"day" | "night">("day");
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);

  const isDay = mode === "day";
  const menu = isDay ? DAY_MENU : NIGHT_MENU;

  const dayBg = "#F5F0E8";
  const nightBg = "#1C1008";
  const dayText = "#1C1008";
  const nightText = "#F5F0E8";

  const bgColor = isDay ? dayBg : nightBg;
  const textColor = isDay ? dayText : nightText;

  return (
    <div
      style={{
        background: bgColor,
        color: textColor,
        transition: "background 0.6s ease, color 0.6s ease",
        minHeight: "100vh",
      }}
    >
      <div className="grain-overlay" />

      {/* HEADER */}
      <header
        style={{
          background: isDay ? "white" : "#2A1A08",
          borderBottom: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
          transition: "background 0.6s ease, border-color 0.6s ease",
        }}
      >
        <div
          className="logo"
          style={{
            fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
            color: isDay ? "#8B1A1A" : "#3BBFBF",
            fontSize: "28px",
            letterSpacing: isDay ? "1px" : "2px",
            transition: "all 0.4s ease",
          }}
        >
          {isDay ? "СТОЛОВАЯ №1" : "DINER★50"}
        </div>
        <nav>
          <a href="#" style={{ color: textColor }}>Меню</a>
          <a href="#" style={{ color: textColor }}>О нас</a>
          <a href="#" style={{ color: textColor }}>Афиша</a>
          <a href="#" style={{ color: textColor }}>Адрес</a>
        </nav>
        <button
          className="btn-cta"
          style={{
            background: isDay ? "#8B1A1A" : "#3BBFBF",
            color: isDay ? "white" : "#1C1008",
            borderColor: isDay ? "#1C1008" : "#3BBFBF",
          }}
        >
          Забронировать
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div
            className="hero-content"
            style={{
              borderRight: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
              borderBottom: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
              transition: "border-color 0.6s ease",
            }}
          >
            {/* MODE SWITCHER */}
            <div
              style={{
                display: "inline-flex",
                border: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
                borderRadius: "0px",
                marginBottom: "28px",
                overflow: "hidden",
                boxShadow: isDay ? "4px 4px 0 #1C1008" : "4px 4px 0 #3BBFBF",
                transition: "all 0.4s ease",
              }}
            >
              <button
                onClick={() => setMode("day")}
                style={{
                  padding: "10px 20px",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  background: isDay ? "#8B1A1A" : "transparent",
                  color: isDay ? "white" : textColor,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-day)",
                }}
              >
                ☀ День — Советская
              </button>
              <button
                onClick={() => setMode("night")}
                style={{
                  padding: "10px 20px",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  background: !isDay ? "#3BBFBF" : "transparent",
                  color: !isDay ? "#1C1008" : textColor,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-night)",
                }}
              >
                ★ Вечер — Дайнер
              </button>
            </div>

            <h1
              className="hero-title"
              style={{
                fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
                color: textColor,
                transition: "all 0.5s ease",
              }}
            >
              {isDay ? (
                <>
                  КАК У
                  <br />
                  <span style={{ color: "#8B1A1A", fontStyle: "italic" }}>БАБУШКИ</span>
                </>
              ) : (
                <>
                  АМЕРИКА
                  <br />
                  <span style={{ color: "#3BBFBF", fontFamily: "var(--font-night)" }}>МЕЧТЫ</span>
                </>
              )}
            </h1>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "32px",
                lineHeight: 1.6,
                color: isDay ? "#555" : "#B0A090",
                fontFamily: isDay ? "Montserrat, sans-serif" : "var(--font-night)",
                transition: "all 0.4s ease",
              }}
            >
              {isDay
                ? "Стерильно чистая, светлая, с раздачей. Сытные котлеты, компот, сметана — всё как раньше. Только платить по карте."
                : "Красный кожзам, неон, пинбол и молочные коктейли. Когда стемнеет — мы становимся другими. Добро пожаловать в 50-е."}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button
                className="btn-cta"
                style={{
                  background: isDay ? "#8B1A1A" : "#3BBFBF",
                  color: isDay ? "white" : "#1C1008",
                  borderColor: isDay ? "#1C1008" : "#3BBFBF",
                  boxShadow: isDay ? "4px 4px 0 #1C1008" : "4px 4px 0 #3BBFBF",
                }}
              >
                {isDay ? "Смотреть меню" : "Выбрать стол"}
              </button>
              <button
                className="btn-cta"
                style={{
                  background: "transparent",
                  color: textColor,
                  borderColor: isDay ? "#1C1008" : "#3BBFBF",
                  boxShadow: isDay ? "4px 4px 0 #1C1008" : "4px 4px 0 #3BBFBF",
                }}
              >
                {isDay ? "О нас" : "Афиша"}
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: isDay
                ? "url('https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')"
                : "url('https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
              transition: "background-image 0.6s ease",
            }}
          >
            <div
              className="sticker"
              style={{
                background: isDay ? "#8B1A1A" : "#3BBFBF",
                color: isDay ? "white" : "#1C1008",
                borderColor: isDay ? "#1C1008" : "#3BBFBF",
                fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
              }}
            >
              {isDay ? "СЫТНО\nЗА 3\nКОПЕЙКИ" : "OPEN\nTILL\n2:00"}
            </div>
            <div
              className="floating-tag hidden md:block"
              style={{ top: "20%", left: "10%", background: isDay ? "#3BBFBF" : "#8B1A1A", color: isDay ? "#1C1008" : "white" }}
            >
              {isDay ? "#КАКУРАНЬШЕ" : "#ROCKABILLY"}
            </div>
            <div
              className="floating-tag hidden md:block"
              style={{ bottom: "30%", right: "20%", background: isDay ? "#8B1A1A" : "#3BBFBF", color: isDay ? "white" : "#1C1008" }}
            >
              {isDay ? "ВКУСНО" : "NEON★"}
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div
          className="marquee"
          style={{
            background: isDay ? "#1C1008" : "#8B1A1A",
            transition: "background 0.6s ease",
            borderColor: isDay ? "#1C1008" : "#3BBFBF",
          }}
        >
          <div className="marquee-content">
            {isDay
              ? " * БОРЩ КАЖДЫЙ ДЕНЬ * ДРАНИКИ СО СМЕТАНОЙ * КОМПОТ ИЗ СУХОФРУКТОВ * КАК У БАБУШКИ * ГАЗИРОВКА С СИРОПОМ БЕСПЛАТНО * СТОЛОВАЯ №1 * БОРЩ КАЖДЫЙ ДЕНЬ * ДРАНИКИ СО СМЕТАНОЙ * КОМПОТ ИЗ СУХОФРУКТОВ * КАК У БАБУШКИ "
              : " * BURGERS & SHAKES * PINBALL INSIDE * КОРНЕР-БИФ 12 ЧАСОВ * ЧИЗКЕЙК НЬЮ-ЙОРК * РОКАБИЛЛИ КАЖДУЮ ПЯТНИЦУ * BURGERS & SHAKES * PINBALL INSIDE * КОРНЕР-БИФ 12 ЧАСОВ "}
          </div>
        </div>

        {/* MENU */}
        <section className="section-padding">
          <div className="section-header">
            <h2
              className="section-title"
              style={{
                fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
                color: textColor,
              }}
            >
              {isDay ? "КАК У БАБУШКИ" : "АМЕРИКА МЕЧТЫ"}
            </h2>
            <a
              href="#"
              style={{
                color: isDay ? "#8B1A1A" : "#3BBFBF",
                fontWeight: 800,
                textTransform: "uppercase",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Всё меню →
            </a>
          </div>

          <div className="menu-grid">
            {menu.map((item, i) => (
              <div
                key={i}
                className="menu-card"
                style={{
                  background: isDay ? "white" : "#2A1A08",
                  borderColor: isDay ? "#1C1008" : "#3BBFBF",
                  boxShadow: isDay ? "var(--shadow)" : `8px 8px 0px #3BBFBF`,
                  transition: "all 0.4s ease",
                }}
              >
                <span className="menu-tag" style={{ background: item.tagColor, color: "white" }}>
                  {item.tag}
                </span>
                <img src={item.img} alt={item.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <h3 style={{ color: textColor, fontFamily: isDay ? "var(--font-day)" : "var(--font-night)" }}>{item.name}</h3>
                    <span
                      className="price"
                      style={{ color: isDay ? "#8B1A1A" : "#3BBFBF" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p style={{ fontSize: "14px", color: isDay ? "#666" : "#A09080" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VIBE SECTION */}
        <section
          className="retro-vibe"
          style={{
            background: isDay ? "#8B1A1A" : "#3BBFBF",
            borderColor: isDay ? "#1C1008" : "#1C1008",
            transition: "background 0.6s ease",
          }}
        >
          <div>
            <h2
              className="vibe-title"
              style={{
                fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
                color: isDay ? "white" : "#1C1008",
              }}
            >
              {isDay ? "ДВА В ОДНОМ." : "ДОБРО ПОЖАЛОВАТЬ В 50-Е."}
            </h2>
            <p
              className="vibe-text"
              style={{
                color: isDay ? "#FFD0B0" : "#1C3030",
                fontFamily: isDay ? "Montserrat, sans-serif" : "var(--font-night)",
              }}
            >
              {isDay
                ? "Красные диваны, хромированные стойки, старые радиолы и советские пылесосы в интерьере. Днём — стерильная советская столовая с компотом. Вечером — неоновый дайнер с пинболом и рокабилли."
                : "Red leather booths, chrome counters, pinball machines and neon signs. The old Soviet soda fountain is now a free syrup bar — pear, sea buckthorn, tarragon. Two worlds, one address."}
            </p>
            <button
              className="btn-cta"
              style={{
                background: isDay ? "#1C1008" : "#1C1008",
                color: "white",
                borderColor: "transparent",
                boxShadow: isDay ? "4px 4px 0 rgba(255,255,255,0.3)" : "4px 4px 0 rgba(0,0,0,0.3)",
              }}
            >
              Наша история
            </button>
          </div>
          <div className="vibe-img" />
        </section>

        {/* MUSIC WIDGET */}
        <section
          className="section-padding"
          style={{ borderTop: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF" }}
        >
          <h2
            className="section-title"
            style={{
              marginBottom: "12px",
              textAlign: "center",
              fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
              color: textColor,
            }}
          >
            МУЗЫКА НА СТЕНЕ
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "36px",
              color: isDay ? "#777" : "#A09080",
              fontSize: "15px",
            }}
          >
            Выбери свой плейлист — и он заиграет у стойки
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {PLAYLISTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlaylist(activePlaylist === p.id ? null : p.id)}
                style={{
                  padding: "24px 20px",
                  border: activePlaylist === p.id
                    ? `3px solid ${isDay ? "#8B1A1A" : "#3BBFBF"}`
                    : isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
                  background: activePlaylist === p.id
                    ? isDay ? "#8B1A1A" : "#3BBFBF"
                    : isDay ? "white" : "#2A1A08",
                  boxShadow: activePlaylist === p.id
                    ? isDay ? "4px 4px 0 #1C1008" : "4px 4px 0 #3BBFBF"
                    : isDay ? "4px 4px 0 #1C1008" : "4px 4px 0 #3BBFBF",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.25s ease",
                  borderRadius: 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <Icon
                    name={p.icon as "Music"}
                    size={22}
                    style={{
                      color: activePlaylist === p.id
                        ? isDay ? "white" : "#1C1008"
                        : isDay ? "#8B1A1A" : "#3BBFBF",
                    }}
                  />
                  {activePlaylist === p.id && (
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        color: isDay ? "white" : "#1C1008",
                        animation: "pulse 1.5s ease infinite",
                      }}
                    >
                      ▶ ИГРАЕТ
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: "15px",
                    marginBottom: "6px",
                    color: activePlaylist === p.id
                      ? isDay ? "white" : "#1C1008"
                      : textColor,
                    fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
                  }}
                >
                  {p.label}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: activePlaylist === p.id
                      ? isDay ? "#FFD0B0" : "#1C3030"
                      : isDay ? "#888" : "#A09080",
                  }}
                >
                  {p.sub}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* INSTAGRAM GRID */}
        <section className="section-padding" style={{ borderTop: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF" }}>
          <h2
            className="section-title"
            style={{
              marginBottom: "40px",
              textAlign: "center",
              fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
              color: textColor,
            }}
          >
            {isDay ? "@STOLOVAYA.NO1" : "@DINER50.RU"}
          </h2>
          <div className="social-grid">
            {[
              "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="social-item"
                style={{ borderColor: isDay ? "#1C1008" : "#3BBFBF" }}
              >
                <img src={src} alt={`фото ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: isDay ? "#1C1008" : "#2A1A08",
          color: isDay ? "#F5F0E8" : "#D0C0A0",
          borderTop: isDay ? "3px solid #1C1008" : "3px solid #3BBFBF",
        }}
      >
        <div>
          <div
            className="footer-logo"
            style={{
              fontFamily: isDay ? "var(--font-day)" : "var(--font-night)",
              color: isDay ? "#8B1A1A" : "#3BBFBF",
              fontSize: "28px",
            }}
          >
            {isDay ? "СТОЛОВАЯ №1" : "DINER★50"}
          </div>
          <p style={{ color: isDay ? "#A09080" : "#7A6A5A", lineHeight: 1.6 }}>
            Утром — советская столовая. Вечером — ретро-дайнер. Один адрес — два мира.
            <br />
            Газировка с сиропами (груша, облепиха, тархун) — бесплатно.
          </p>
        </div>
        <div className="footer-links">
          <h4 style={{ color: isDay ? "#F5F0E8" : "#D0C0A0" }}>Навигация</h4>
          <ul>
            {["Меню", "О нас", "Афиша", "Политика"].map((link) => (
              <li key={link}>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4 style={{ color: isDay ? "#F5F0E8" : "#D0C0A0" }}>Часы работы</h4>
          <ul style={{ lineHeight: 2 }}>
            <li>Пн–Пт: <strong style={{ color: "#3BBFBF" }}>08:00–00:00</strong></li>
            <li>Сб–Вс: <strong style={{ color: "#3BBFBF" }}>09:00–02:00</strong></li>
            <li style={{ marginTop: "8px", fontSize: "12px", color: "#8B1A1A" }}>
              ☀ День до 17:00 · ★ Вечер с 17:00
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 style={{ color: isDay ? "#F5F0E8" : "#D0C0A0" }}>Контакты</h4>
          <ul style={{ lineHeight: 2 }}>
            <li>+7 (XXX) XXX-XX-XX</li>
            <li>ул. Советская, 1</li>
            <li>info@stolovaya1.ru</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
