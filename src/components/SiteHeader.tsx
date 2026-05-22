interface SiteHeaderProps {
  isDay: boolean;
  textColor: string;
}

export default function SiteHeader({ isDay, textColor }: SiteHeaderProps) {
  return (
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
  );
}
