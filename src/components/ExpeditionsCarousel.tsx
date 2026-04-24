"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, ChevronRight, ChevronLeft } from "lucide-react";
import { DESTINATIONS } from "../lib/destinations";
import styles from "./ExpeditionsCarousel.module.css";

type Props = { lang: string };

export default function ExpeditionsCarousel({ lang }: Props) {
  const isEs = lang === "es";
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const WA = `https://wa.me/573017836467?text=${encodeURIComponent(
    isEs ? "Hola, quiero info sobre las expediciones de buceo 🐠" : "Hi, I'd like info about the diving expeditions 🐠"
  )}`;

  /**
   * Scroll the carousel TRACK horizontally to a given card index.
   * We use scrollLeft directly so we NEVER touch the page's vertical scroll.
   * scrollIntoView() was the culprit — it can pull ancestor scroll containers
   * (including the page itself) to make the element visible.
   */
  const scrollToIdx = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement;
    if (!card) return;
    // offsetLeft gives the card's position relative to the track
    const targetLeft = card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActiveIdx(idx);
  };

  const prev = () => scrollToIdx(Math.max(0, activeIdx - 1));
  const next = () => scrollToIdx(Math.min(DESTINATIONS.length - 1, activeIdx + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Sync active index on scroll
    const scrollHandler = () => {
      const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth || 380;
      const gap = 32;
      const idx = Math.round(track.scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(Math.max(0, idx), DESTINATIONS.length - 1));
    };
    track.addEventListener("scroll", scrollHandler, { passive: true });

    // Prevent the carousel from hijacking vertical page scroll.
    // Only consume the wheel event if the user is scrolling horizontally.
    const wheelHandler = (e: WheelEvent) => {
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontalScroll) {
        // Vertical scroll → let the page handle it
        return;
      }
      // Horizontal scroll → move the carousel
      e.preventDefault();
      track.scrollLeft += e.deltaX;
    };
    track.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      track.removeEventListener("scroll", scrollHandler);
      track.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  // Auto-advance every 5s — uses scrollLeft, never scrollIntoView
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((currentIdx) => {
        const nextIdx = (currentIdx + 1) % DESTINATIONS.length;
        const track = trackRef.current;
        if (track) {
          const card = track.children[nextIdx] as HTMLElement;
          if (card) {
            const targetLeft = card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2;
            track.scrollTo({ left: targetLeft, behavior: "smooth" });
          }
        }
        return nextIdx;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.carouselSection}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionBadge}>
          <MapPin size={13} /> {isEs ? "Expediciones de Buceo" : "Diving Expeditions"}
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

      <div className={styles.carouselControls}>
        <button className={styles.carouselBtn} onClick={prev} aria-label={isEs ? "Anterior" : "Previous"}>
          <ChevronLeft size={20} />
        </button>
        <div className={styles.carouselDots}>
          {DESTINATIONS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${activeIdx === i ? styles.dotActive : ""}`}
              onClick={() => scrollToIdx(i)}
              aria-label={`Destino ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.carouselBtn} onClick={next} aria-label={isEs ? "Siguiente" : "Next"}>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
