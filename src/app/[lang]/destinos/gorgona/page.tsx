import type { Metadata } from "next";
import styles from "../providencia/dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { generateHreflang } from "../../layout";
import {
  MapPin, Thermometer, Eye, ChevronRight, Anchor,
  CheckCircle2, Waves, Clock, Fish, Navigation, Leaf,
  Calendar, Users, ShieldCheck, Ship
} from "lucide-react";

const SITE_URL = "https://siediving.com";
const PATH = "/destinos/gorgona";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "es"
      ? "Gorgona: Expedición Vida a Bordo | Ballenas y Buceo en el Pacífico · SIE DIVING"
      : "Gorgona Liveaboard Expedition | Whales & Diving in the Pacific · SIE DIVING",
    description: lang === "es"
      ? "Expedición vida a bordo en Gorgona, Agosto 2026. Barco SeaWolf. Ballenas jorobadas, tiburones y corales del Pacífico colombiano. Reserva Natural Nacional."
      : "Liveaboard expedition to Gorgona, August 2026. SeaWolf vessel. Humpback whales, sharks and Pacific corals. Colombian National Natural Reserve.",
    alternates: {
      canonical: `${SITE_URL}/${lang}${PATH}`,
      languages: generateHreflang(PATH),
    },
  };
}


const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero información sobre la expedición vida a bordo en Gorgona — Agosto 2026 🐳")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about the Gorgona liveaboard expedition August 2026 please 🐳")}`;

const DIVE_SPOTS = [
  {
    name: "La Tiburonera",
    depth: "5–20m",
    level: "Principiante",
    desc: "Zona de limpieza icónica de Gorgona. Decenas de tiburones nodriza descansan en el fondo de arena. Impresionante para fotografía submarina.",
  },
  {
    name: "La Catedral",
    depth: "8–18m",
    level: "Principiante",
    desc: "Formación de roca basáltica volcánica que crea una gruta submarina habitada por morenas gigantes y peces scorpion camuflados.",
  },
  {
    name: "El Planchón",
    depth: "12–30m",
    level: "Intermedio",
    desc: "El sitio estrella. Meseta rocosa cubierta de coral donde confluyen mantas, tiburones ballena y enormes cardúmenes de peces loro.",
  },
  {
    name: "Bajo Tiburón",
    depth: "20–35m",
    level: "Avanzado",
    desc: "Pináculo submarino frecuentado por tiburones de punta blanca oceánica, especialmente en temporada de ballenas jorobadas.",
  },
];

const ITINERARIO = [
  {
    dia: "Día 1 — 11 Agosto",
    desc: "Llegada a Cali (recomendada en la mañana). 12:00 pm encuentro en instalaciones Mar Antiguo, Cali. 3:00 pm salida en transporte privado al puerto de Buenaventura. 7:00 pm embarque en el SeaWolf y briefing de bienvenida. 8:00 pm cena y zarpe hacia Isla Gorgona.",
    icon: "🚐",
  },
  {
    dia: "Días 2 y 3 — 12 y 13 Agosto",
    desc: "Jornadas completas de buceo en Gorgona: 6 buceos diurnos y posibilidad de 2 nocturnos. Visita a sitios como La Tiburonera, La Catedral, El Planchón. Avistamiento de ballenas jorobadas en migración desde la Antártida.",
    icon: "🤿",
  },
  {
    dia: "Día 4 — 14 Agosto",
    desc: "Inmersión de madrugada. Desayuno a bordo. Regreso a Buenaventura. Transporte privado de regreso a Cali. Fin de la expedición.",
    icon: "🏠",
  },
];

const INCLUYE = [
  "Vida a bordo en el barco SeaWolf (4 días, 3 noches)",
  "Alimentación completa desde cena del 11 hasta desayuno del 14",
  "6 buceos diurnos + posibilidad de 2 nocturnos",
  "Seguro de viaje y buceo incluido",
  "Acompañamiento de guías de buceo certificados",
  "Transporte Cali – Buenaventura – Cali",
  "Kit DivingLife",
];

const NO_INCLUYE = [
  "Tiquetes aéreos a Cali",
  "Alquiler de equipo de buceo (se coordina directamente)",
  "Propinas y licores",
  "Ítems no especificados en el programa",
];

const PRECIOS = [
  { tipo: "Múltiple Lower Deck", precio: "$4'290.000", tag: "Más popular" },
  { tipo: "Doble Lower Deck", precio: "$4'390.000", tag: "" },
  { tipo: "Múltiple Upper Deck", precio: "$4'390.000", tag: "" },
  { tipo: "Doble Upper Deck", precio: "$4'490.000", tag: "Premium" },
];

export default async function GorgonaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      {/* ── HERO ── */}
      <section
        className={styles.hero}
        style={{
          backgroundImage:
            "url('/images/img-7a48a693.jpg')",
        }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link>
            <span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span>
            <span>/</span>
            <span>Gorgona</span>
          </div>
          <div className={styles.heroTag}>
            <Ship size={14} />
            {isEs ? "SeaWolf · Liveaboard · Agosto 2026" : "SeaWolf · Liveaboard · August 2026"}
          </div>
          <h1 className={styles.heroTitle}>
            {isEs ? "Gorgona: La Isla Ciencia" : "Gorgona: The Science Island"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isEs
              ? "Temporada de ballenas jorobadas. 11 – 14 agosto 2026. Una isla remota en el Pacífico colombiano, solo accesible en expedición vida a bordo del SeaWolf."
              : "Humpback whale season. August 11–14, 2026. A remote island in the Colombian Pacific, only accessible on a liveaboard expedition aboard the SeaWolf."}
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <Calendar size={16} />
              <span>11–14 Ago 2026</span>
            </div>
            <div className={styles.heroStat}>
              <Users size={16} />
              <span>{isEs ? "Cupos limitados" : "Limited spots"}</span>
            </div>
            <div className={styles.heroStat}>
              <Navigation size={16} />
              <span>{isEs ? "Vida a Bordo" : "Liveaboard"}</span>
            </div>
            <div className={styles.heroStat}>
              <Fish size={16} />
              <span>{isEs ? "Ballenas + Tiburones" : "Whales + Sharks"}</span>
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Expedición" : "Book Expedition"}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* ── DESCRIPCIÓN ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}>
              <Anchor size={14} />
              {isEs ? "La Expedición" : "The Expedition"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Embarcación SeaWolf · Temporada de Ballenas" : "SeaWolf Vessel · Whale Season"}
            </h2>
            <p className={styles.sectionDesc}>
              {isEs
                ? "Explora la maravilla oculta de Gorgona, a 56 km de la costa del Pacífico colombiano. Reserva Natural Nacional con biodiversidad excepcional. Buceo en los mejores sitios de la isla junto a tiburones, morenas, ballenas jorobadas y cardúmenes de todos los colores."
                : "Explore the hidden wonder of Gorgona, 56 km off the Colombian Pacific coast. A National Natural Reserve with exceptional biodiversity. Dive the island's best spots alongside sharks, eels, humpback whales and colorful schools of fish."}
            </p>
          </div>

          <div className={styles.diveImgWrap}>
            <img
              src="/images/img-38ae7bf1.jpg"
              alt="Ballenas jorobadas Gorgona Pacífico"
              className={styles.diveImg}
              style={{ objectPosition: "center 30%" }}
            />
            <div className={styles.diveImgOverlay}>
              <span>
                {isEs
                  ? "Parque Nacional · Temporada ballenas julio–octubre"
                  : "National Park · Whale season July–October"}
              </span>
            </div>
          </div>

          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles[`level_${s.level.toLowerCase()}`]}`}>
                    {s.level}
                  </span>
                </div>
                <div className={styles.spotDepth}>
                  <Waves size={14} />
                  {s.depth}
                </div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARIO ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}>
              <Calendar size={14} />
              {isEs ? "Itinerario" : "Schedule"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "4 Días de Expedición Completa" : "4 Days Full Expedition"}
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "800px", margin: "0 auto" }}>
            {ITINERARIO.map((item, i) => (
              <div key={i} style={{
                display: "flex", gap: "1.5rem", alignItems: "flex-start",
                background: "rgba(255,255,255,0.04)", borderRadius: "12px",
                padding: "1.5rem", border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <div style={{ fontSize: "2rem", lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <strong style={{ color: "var(--color-primary)", display: "block", marginBottom: "0.5rem" }}>{item.dia}</strong>
                  <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}>
              <Ship size={14} />
              {isEs ? "Acomodación a Bordo" : "On-board Accommodation"}
            </div>
            <h2 className={styles.sectionTitle}>
              {isEs ? "Precios IVA Incluido" : "All-inclusive Prices (Tax Included)"}
            </h2>
            <p className={styles.sectionDesc}>
              {isEs
                ? "Plan de pagos en 4 cuotas del 25% c/u. Primer pago para separar cupo. Extranjeros pagan $300.000 COP adicional."
                : "4-installment payment plan at 25% each. First payment to reserve your spot. Foreigners pay an additional $300,000 COP."}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {PRECIOS.map((p, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: "12px",
                padding: "2rem 1.5rem", textAlign: "center",
                border: p.tag ? "2px solid var(--color-primary)" : "1px solid rgba(255,255,255,0.1)",
                position: "relative", overflow: "hidden"
              }}>
                {p.tag && (
                  <span style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: "var(--color-primary)", color: "black",
                    fontSize: "0.7rem", fontWeight: "bold", padding: "0.2rem 0.5rem",
                    borderRadius: "20px"
                  }}>{p.tag}</span>
                )}
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{p.tipo}</div>
                <div style={{ color: "var(--color-primary)", fontSize: "1.7rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{p.precio}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>COP · IVA incluido</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
              {isEs ? "Reservar mi Cupo" : "Book My Spot"}
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── INCLUYE / NO INCLUYE ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <div className={styles.sectionBadge} style={{ marginBottom: "1.5rem" }}>
                <CheckCircle2 size={14} />
                {isEs ? "Incluye" : "Includes"}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {INCLUYE.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "1rem", color: "var(--color-text-muted)" }}>
                    <span style={{ color: "var(--color-primary)", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className={`${styles.sectionBadge}`} style={{ marginBottom: "1.5rem", background: "rgba(255,80,80,0.12)", color: "#ff7070" }}>
                <span style={{ fontSize: "0.8rem" }}>✗</span>
                {isEs ? "No Incluye" : "Not Included"}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {NO_INCLUYE.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "1rem", color: "var(--color-text-muted)" }}>
                    <span style={{ color: "#ff7070", marginTop: "2px", flexShrink: 0 }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{
            marginTop: "2.5rem", padding: "1.25rem 1.5rem",
            background: "rgba(0, 229, 255, 0.06)", borderRadius: "12px",
            border: "1px solid rgba(0, 229, 255, 0.2)",
            color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.7
          }}>
            <ShieldCheck size={16} style={{ color: "var(--color-primary)", marginRight: "0.5rem", verticalAlign: "middle" }} />
            {isEs
              ? "Con tu cupo estás apoyando la protección de 4 especies marinas: tiburones, tortugas, ballenas y corales. Agencia legalmente constituida · RNT 115032"
              : "Your reservation supports the protection of 4 marine species: sharks, turtles, whales and corals. Legally registered agency · RNT 115032"}
          </div>
        </div>
      </section>

      {/* ── MÁS DESTINOS ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            {isEs ? "Más Destinos" : "More Destinations"}
          </h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/malpelo`} className={styles.otherCard}
              style={{ backgroundImage: "url('/images/img-239db711.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}>
                <span className={styles.otherTag}>Pacífico</span>
                <h3>Malpelo</h3>
                <p>{isEs ? "La roca viviente · Tiburones martillo" : "The living rock · Hammerhead sharks"}</p>
              </div>
            </Link>
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard}
              style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}>
                <span className={styles.otherTag}>Caribe</span>
                <h3>Providencia</h3>
                <p>{isEs ? "Reserva UNESCO · Arrecife de barrera" : "UNESCO Reserve · Barrier reef"}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¡Cupos muy limitados — Agosto 2026!" : "Very Limited Spots — August 2026!"}</h2>
          <p>{isEs ? "Embarcación SeaWolf · 11 al 14 de agosto · Temporada de ballenas jorobadas en el Pacífico colombiano." : "SeaWolf vessel · August 11–14 · Humpback whale season in the Colombian Pacific."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar mi Cupo Ahora" : "Book My Spot Now"}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
