interface HeroSectionProps {
  isDay: boolean;
  textColor: string;
  setMode: (mode: "day" | "night") => void;
}

export default function HeroSection({ isDay, textColor, setMode }: HeroSectionProps) {
  return (
    <>
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
    </>
  );
}
