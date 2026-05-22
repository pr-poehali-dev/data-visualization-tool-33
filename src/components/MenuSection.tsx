import Icon from "@/components/ui/icon";

interface MenuItem {
  tag: string;
  tagColor: string;
  img: string;
  name: string;
  price: string;
  desc: string;
}

interface PlaylistItem {
  id: string;
  icon: string;
  label: string;
  sub: string;
}

interface MenuSectionProps {
  isDay: boolean;
  textColor: string;
  menu: MenuItem[];
  playlists: PlaylistItem[];
  activePlaylist: string | null;
  setActivePlaylist: (id: string | null) => void;
}

const SOCIAL_IMAGES = [
  "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
];

export default function MenuSection({
  isDay,
  textColor,
  menu,
  playlists,
  activePlaylist,
  setActivePlaylist,
}: MenuSectionProps) {
  return (
    <>
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
                  <span className="price" style={{ color: isDay ? "#8B1A1A" : "#3BBFBF" }}>
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
              background: "#1C1008",
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
          {playlists.map((p) => (
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
          {SOCIAL_IMAGES.map((src, i) => (
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
    </>
  );
}
