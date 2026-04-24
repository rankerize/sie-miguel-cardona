"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MapPin, ChevronRight, ChevronLeft, Waves, Eye,
  Thermometer, Fish, Star, Anchor, ArrowLeft
} from "lucide-react";
import styles from "./page.module.css";

type Props = { lang: string };

const DESTINATIONS = [
  {
    id: "providencia",
    name: "Providencia",
    taglineEs: "El Paraíso Virgen del Caribe",
    taglineEn: "The Untouched Caribbean Paradise",
    descEs: "Tercer arrecife de barrera más grande del mundo. Reserva de Biosfera UNESCO con 850+ especies marinas.",
    descEn: "Third largest barrier reef in the world. UNESCO Biosphere Reserve with 850+ marine species.",
    region: "Caribe",
    regionEn: "Caribbean",
    img: "/images/img-94034723.jpg",
    href: "/destinos/providencia",
    stats: [
      { icon: <Thermometer size={13} />, label: "27°C" },
      { icon: <Eye size={13} />, label: "20–30m vis." },
      { icon: <Fish size={13} />, label: "850+ sp." },
    ],
    levelEs: "Intermedio",
    levelEn: "Intermediate",
    badge: "UNESCO",
    accentColor: "#48cae4",
  },
  {
    id: "isla-fuerte",
    name: "Isla Fuerte",
    taglineEs: "Coral Virgen & Aguas Cristalinas",
    taglineEn: "Pristine Coral & Crystal Waters",
    descEs: "Una isla sin carros ni ruido. Corales intactos, langosta fresca y una comunidad que vive del mar.",
    descEn: "An island without cars or noise. Intact corals, fresh lobster, and a community living from the sea.",
    region: "Caribe",
    regionEn: "Caribbean",
    img: "/images/img-828314b5.jpg",
    href: "/destinos/isla-fuerte",
    stats: [
      { icon: <Thermometer size={13} />, label: "28°C" },
      { icon: <Eye size={13} />, label: "15–25m vis." },
      { icon: <Waves size={13} />, label: "Arrecife" },
    ],
    levelEs: "Principiante",
    levelEn: "Beginner",
    badge: null,
    accentColor: "#90e0ef",
  },
  {
    id: "malpelo",
    name: "Malpelo",
    taglineEs: "El Galápagos Colombiano",
    taglineEn: "The Colombian Galápagos",
    descEs: "Patrimonio de la Humanidad UNESCO. Cientos de tiburones martillo, mantas gigantes y una biodiversidad inigualable.",
    descEn: "UNESCO World Heritage Site. Hundreds of hammerhead sharks, giant mantas, and unmatched biodiversity.",
    region: "Pacífico",
    regionEn: "Pacific",
    img: "/malpelo-tiburones.jpg",
    href: "/destinos/malpelo",
    stats: [
      { icon: <Thermometer size={13} />, label: "24–28°C" },
      { icon: <Eye size={13} />, label: "10–30m vis." },
      { icon: <Star size={13} />, label: "Avanzado" },
    ],
    levelEs: "Avanzado",
    levelEn: "Advanced",
    badge: "UNESCO",
    accentColor: "#0096c7",
  },
  {
    id: "gorgona",
    name: "Gorgona",
    taglineEs: "Ballenas, Tiburones & Selva",
    taglineEn: "Whales, Sharks & Jungle",
    descEs: "Isla de reserva natural en el Pacífico. Temporada de ballenas jorobadas (jul–oct). Ecosistema único en Colombia.",
    descEn: "Pacific nature reserve island. Humpback whale season (Jul–Oct). Unique ecosystem in Colombia.",
    region: "Pacífico",
    regionEn: "Pacific",
    img: "/images/img-3a729866.jpg",
    href: null,
    stats: [
      { icon: <Thermometer size={13} />, label: "26°C" },
      { icon: <Fish size={13} />, label: "Ballenas" },
      { icon: <Anchor size={13} />, label: "Liveaboard" },
    ],
    levelEs: "Intermedio",
    levelEn: "Intermediate",
    badge: null,
    accentColor: "#0077b6",
  },
  {
    id: "taganga",
    name: "Taganga",
    taglineEs: "El Punto de Inicio Perfecto",
    taglineEn: "The Perfect Starting Point",
    descEs: "Nuestra base de operaciones. Arrecifes accesibles, agua cálida y el mejor punto de partida para certificarte con PADI.",
    descEn: "Our operations base. Accessible reefs, warm water and the best starting point to get PADI certified.",
    region: "Caribe",
    regionEn: "Caribbean",
    img: "/Morena.jpg",
    href: "/destinos/santa-marta",
    stats: [
      { icon: <Thermometer size={13} />, label: "29°C" },
      { icon: <Eye size={13} />, label: "10–20m vis." },
      { icon: <Waves size={13} />, label: "PADI Base" },
    ],
    levelEs: "Todos los niveles",
    levelEn: "All levels",
    badge: null,
    accentColor: "#48cae4",
  },
];

const WHY = [
  { icon: "🐋", titleEs: "Megadiversidad Marina", titleEn: "Marine Megadiversity", descEs: "Colombia tiene dos océanos. Nuestras expediciones cubren el Caribe y el Pacífico.", descEn: "Colombia has two oceans. Our expeditions cover the Caribbean and the Pacific." },
  { icon: "🏅", titleEs: "Instructores PADI Certificados", titleEn: "PADI Certified Instructors", descEs: "Seguridad y técnica en cada inmersión. Tu confianza es nuestra prioridad.", descEn: "Safety and technique in every dive. Your confidence is our priority." },
  { icon: "🗺️", titleEs: "Paquetes Todo Incluido", titleEn: "All-Inclusive Packages", descEs: "Vuelo, alojamiento, equipos y guía. Tú solo preocúpate de bucear.", descEn: "Flights, accommodation, gear and guide. You just focus on diving." },
  { icon: "♻️", titleEs: "Buceo Responsable", titleEn: "Responsible Diving", descEs: "Operamos en áreas protegidas con el máximo cuidado por el ecosistema.", descEn: "We operate in protected areas with the highest care for the ecosystem." },
];

export default function ExpedicionesClient({ lang }: Props) {
  const isEs = lang === "es";
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const WA = `https://wa.me/573017836467?text=${encodeURIComponent(
    isEs ? "Hola, quiero info sobre las expediciones de buceo 🐠" : "Hi, I'd like info about the diving expeditions 🐠"
  )}`;

  const scrollTo = (idx: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[idx] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    setActiveIdx(idx);
  };

  const prev = () => scrollTo(Math.max(0, activeIdx - 1));
  const next = () => scrollTo(Math.min(DESTINATIONS.length - 1, activeIdx + 1));

  // Detect scroll position to update active dot
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handler = () => {
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth || 380;
      const gap = 32;
      const idx = Math.round(track.scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(Math.max(0, idx), DESTINATIONS.length - 1));
    };
    track.addEventListener("scroll", handler, { passive: true });
    return () => track.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroBgGrid} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            {isEs ? "5 Destinos · Colombia" : "5 Destinations · Colombia"}
          </div>
          <h1 className={styles.heroTitle}>
            {isEs ? (
              <>Nuestras <span className={styles.heroGradient}>Expediciones</span></>
            ) : (
              <>Our <span className={styles.heroGradient}>Expeditions</span></>
            )}
          </h1>
          <p className={styles.heroSubtitle}>
            {isEs
              ? "Desde el arrecife virgen del Caribe hasta las profundidades del Pacífico. SIE DIVING te lleva a los mejores destinos de buceo en Colombia."
              : "From pristine Caribbean reefs to the depths of the Pacific. SIE DIVING takes you to Colombia's best diving destinations."}
          </p>
          <div className={styles.heroActions}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              {isEs ? "Reservar ahora" : "Book now"} <ChevronRight size={18} />
            </a>
            <Link href={`/${lang}`} className={styles.btnOutline}>
              <ArrowLeft size={18} /> {isEs ? "Volver al inicio" : "Back to home"}
            </Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <div className={styles.scrollLine} />
          {isEs ? "Explora" : "Explore"}
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsRow}>
        {[
          { num: "5", labelEs: "Destinos únicos", labelEn: "Unique destinations" },
          { num: "2", labelEs: "Océanos", labelEn: "Oceans" },
          { num: "1000+", labelEs: "Especies marinas", labelEn: "Marine species" },
          { num: "100%", labelEs: "Seguridad PADI", labelEn: "PADI Safety" },
        ].map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{isEs ? s.labelEs : s.labelEn}</div>
          </div>
        ))}
      </div>

      {/* CAROUSEL */}
      <section className={styles.carouselSection}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionBadge}>
            <MapPin size={13} /> {isEs ? "Destinos de Buceo" : "Diving Destinations"}
          </div>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Elige tu próxima aventura" : "Choose your next adventure"}
          </h2>
          <p className={styles.sectionDesc}>
            {isEs
              ? "Desliza para explorar cada destino. Cada expedición es diseñada para ofrecerte la experiencia más auténtica."
              : "Swipe to explore each destination. Every expedition is crafted to give you the most authentic experience."}
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack} ref={trackRef}>
            {DESTINATIONS.map((dest, i) => {
              const cardHref = dest.href ? `/${lang}${dest.href}` : WA;
              const isExternal = !dest.href;
              return (
                <a
                  key={dest.id}
                  href={cardHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={styles.destCard}
                  id={`dest-card-${dest.id}`}
                >
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className={styles.destCardImg}
                    loading="lazy"
                  />
                  <div className={styles.destCardOverlay} />

                  <div className={styles.destCardTop}>
                    <span className={styles.destRegionTag}>
                      <MapPin size={11} />
                      {isEs ? dest.region : dest.regionEn}
                    </span>
                    {dest.badge && (
                      <span className={styles.destUnescoTag}>⭐ {dest.badge}</span>
                    )}
                  </div>

                  <div className={styles.destCardBody}>
                    <div className={styles.destNumber}>0{i + 1} / 05</div>
                    <h3 className={styles.destName}>{dest.name}</h3>
                    <p className={styles.destTagline}>
                      {isEs ? dest.taglineEs : dest.taglineEn}
                    </p>
                    <div className={styles.destStats}>
                      {dest.stats.map((st, j) => (
                        <span key={j} className={styles.destStat}>
                          {st.icon} {st.label}
                        </span>
                      ))}
                    </div>
                    <span className={styles.destCta}>
                      {isEs ? (dest.href ? "Ver destino" : "Consultar por WhatsApp") : (dest.href ? "View destination" : "Ask on WhatsApp")}
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className={styles.carouselControls}>
          <button className={styles.carouselBtn} onClick={prev} aria-label={isEs ? "Anterior" : "Previous"} id="carousel-prev">
            <ChevronLeft size={20} />
          </button>
          <div className={styles.carouselDots}>
            {DESTINATIONS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${activeIdx === i ? styles.dotActive : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={`Destino ${i + 1}`}
                id={`carousel-dot-${i}`}
              />
            ))}
          </div>
          <button className={styles.carouselBtn} onClick={next} aria-label={isEs ? "Siguiente" : "Next"} id="carousel-next">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* WHY SIE */}
      <section className={styles.whySection}>
        <div className={styles.sectionHead}>
          <div className={styles.sectionBadge}>
            <Anchor size={13} /> {isEs ? "¿Por qué SIE?" : "Why SIE?"}
          </div>
          <h2 className={styles.sectionTitle}>
            {isEs ? "Más que buceo, una experiencia" : "More than diving, an experience"}
          </h2>
        </div>
        <div className={styles.whyGrid}>
          {WHY.map((w, i) => (
            <div key={i} className={styles.whyCard}>
              <div className={styles.whyIcon}>{w.icon}</div>
              <div className={styles.whyTitle}>{isEs ? w.titleEs : w.titleEn}</div>
              <div className={styles.whyDesc}>{isEs ? w.descEs : w.descEn}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.ctaSection}>
        <h2>{isEs ? "¿Cuál es tu próxima expedición?" : "What's your next expedition?"}</h2>
        <p>
          {isEs
            ? "Cupos limitados. Contáctanos por WhatsApp y diseñamos tu aventura perfecta."
            : "Limited spots. Contact us on WhatsApp and we'll design your perfect adventure."}
        </p>
        <div className={styles.ctaBtns}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} id="cta-whatsapp-expediciones">
            {isEs ? "Escribir por WhatsApp" : "Message on WhatsApp"} <ChevronRight size={18} />
          </a>
          <Link href={`/${lang}`} className={styles.btnOutline}>
            <ArrowLeft size={16} /> {isEs ? "Volver al inicio" : "Back to home"}
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} SIE DIVING AND ADVENTURE. {isEs ? "Todos los derechos reservados." : "All rights reserved."}</p>
      </footer>
    </main>
  );
}
