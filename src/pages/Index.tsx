import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import SiteFooter from "@/components/SiteFooter";

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

  const bgColor = isDay ? "#F5F0E8" : "#1C1008";
  const textColor = isDay ? "#1C1008" : "#F5F0E8";

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

      <SiteHeader isDay={isDay} textColor={textColor} />

      <main>
        <HeroSection isDay={isDay} textColor={textColor} setMode={setMode} />
        <MenuSection
          isDay={isDay}
          textColor={textColor}
          menu={menu}
          playlists={PLAYLISTS}
          activePlaylist={activePlaylist}
          setActivePlaylist={setActivePlaylist}
        />
      </main>

      <SiteFooter isDay={isDay} />
    </div>
  );
}
