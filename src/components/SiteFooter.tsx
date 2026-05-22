interface SiteFooterProps {
  isDay: boolean;
}

export default function SiteFooter({ isDay }: SiteFooterProps) {
  return (
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
  );
}
