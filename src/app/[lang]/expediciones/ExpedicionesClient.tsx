"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MapPin, ChevronRight, ChevronLeft, Waves, Eye,
  Thermometer, Fish, Star, Anchor, ArrowLeft
} from "lucide-react";
import styles from "./page.module.css";
import { DESTINATIONS } from "../../../lib/destinations";
import ExpeditionsCarousel from "../../../components/ExpeditionsCarousel";

type Props = { lang: string };

const WHY = [
  { icon: "🐋", titleEs: "Megadiversidad Marina", titleEn: "Marine Megadiversity", descEs: "Colombia tiene dos océanos. Nuestras expediciones cubren el Caribe y el Pacífico.", descEn: "Colombia has two oceans. Our expeditions cover the Caribbean and the Pacific." },
  { icon: "🏅", titleEs: "Instructores PADI Certificados", titleEn: "PADI Certified Instructors", descEs: "Seguridad y técnica en cada inmersión. Tu confianza es nuestra prioridad.", descEn: "Safety and technique in every dive. Your confidence is our priority." },
  { icon: "🗺️", titleEs: "Paquetes Todo Incluido", titleEn: "All-Inclusive Packages", descEs: "Vuelo, alojamiento, equipos y guía. Tú solo preocúpate de bucear.", descEn: "Flights, accommodation, gear and guide. You just focus on diving." },
  { icon: "♻️", titleEs: "Buceo Responsable", titleEn: "Responsible Diving", descEs: "Operamos en áreas protegidas con el máximo cuidado por el ecosistema.", descEn: "We operate in protected areas with the highest care for the ecosystem." },
];

export default function ExpedicionesClient({ lang }: Props) {
  const isEs = lang === "es";

  const WA = `https://wa.me/573017836467?text=${encodeURIComponent(
    isEs ? "Hola, quiero info sobre las expediciones de buceo 🐠" : "Hi, I'd like info about the diving expeditions 🐠"
  )}`;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroVideoWrap}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/bn5YpHP_ciM?autoplay=1&mute=1&loop=1&playlist=bn5YpHP_ciM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title=""
            className={styles.heroVideo}
          />
        </div>
        <div className={styles.heroBg} />
        <div className={styles.heroBgGrid} />
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            {isEs ? "5 Expediciones · Colombia" : "5 Expeditions · Colombia"}
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
          { num: "5", labelEs: "Expediciones únicas", labelEn: "Unique expeditions" },
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
      <ExpeditionsCarousel lang={lang} />

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
