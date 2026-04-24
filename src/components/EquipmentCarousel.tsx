"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./EquipmentCarousel.module.css";

interface EquipItem {
  title: string;
  desc: string;
  img: string;
  objectPosition?: string;
}

const ITEMS: EquipItem[] = [
  {
    title: "Máscara de Buceo",
    img: "/images/equipo-mascara.jpg",
    desc: "Vidrio templado de doble lente y silicona hipoalergénica. Ajuste hermético esencial en las aguas del Caribe y el Pacífico colombiano.",
  },
  {
    title: "Chaleco Hidrostático (BCD)",
    img: "/images/equipo-chaleco.jpg",
    desc: "Regula tu flotabilidad en aguas cambiantes. Imprescindible para las fuertes corrientes de Malpelo y Gorgona en el Pacífico.",
  },
  {
    title: "Regulador de Primera y Segunda Etapa",
    img: "/images/equipo-regulador.jpg",
    desc: "Tu fuente de aire bajo el agua. Usamos reguladores DIN certificados, revisados antes de cada inmersión en nuestras dos costas.",
  },
  {
    title: "Traje de Neopreno",
    img: "/images/equipo-neopreno.jpg",
    desc: "Caribe (Taganga, Providencia): 3 mm · 26–29 °C. Pacífico (Gorgona, Malpelo): 5–7 mm · 20–24 °C. Siempre el grosor correcto según el océano.",
  },
  {
    title: "Computador de Buceo",
    img: "/images/equipo-computador.jpg?v=3",
    desc: "Monitoreo en tiempo real de profundidad, tiempo y límites de no descompresión. Obligatorio en las inmersiones técnicas del Pacífico.",
  },
  {
    title: "Linterna Subacuática",
    img: "/images/equipo-linterna.jpg?v=3",
    desc: "Revela los colores reales a partir de los 10 m. Esencial en las grutas coralinas de Providencia y los fondos oscuros del Pacífico.",
  },
  {
    title: "Boya SMB (Señal de Superficie)",
    img: "/images/equipo-boya.jpg?v=2",
    desc: "Señaliza tu posición al salir en mar abierto. Indispensable en las salidas oceánicas de Malpelo y Gorgona.",
  },
  {
    title: "Aletas de Propulsión",
    img: "/images/equipo-aletas.jpg?v=3",
    desc: "Aletas de paleta o split según la corriente. Las corrientes del Pacífico exigen mayor potencia que las aguas cálidas del Caribe.",
    objectPosition: "center 95%", // centra sobre las aletas amarillas
  },
];

const INTERVAL = 5000;

interface Props {
  lang: string;
}

export default function EquipmentCarousel({ lang }: Props) {
  const isEs = lang === "es";
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const prev = () => {
    setActive((c) => (c - 1 + ITEMS.length) % ITEMS.length);
  };

  const next = useCallback(() => {
    setActive((c) => (c + 1) % ITEMS.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  // Reset timer when user manually navigates
  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, INTERVAL);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };
  const handleDot = (i: number) => { goTo(i); resetTimer(); };

  const item = ITEMS[active];

  return (
    <div className={styles.carousel}>
      {/* Slide */}
      <div className={styles.slide}>
        <img
          key={active}
          src={item.img}
          alt={item.title}
          className={styles.slideImg}
          style={{ objectPosition: item.objectPosition ?? "center center" }}
        />
        <div className={styles.slideOverlay} />
        <div className={styles.slideContent}>
          <div className={styles.slideCounter}>
            {String(active + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
          </div>
          <h3 className={styles.slideTitle}>{item.title}</h3>
          <p className={styles.slideDesc}>{item.desc}</p>
        </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={handlePrev} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={handleNext} aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div
          key={active}
          className={styles.progressFill}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      {/* Thumbnails / dots row */}
      <div className={styles.thumbRow}>
        {ITEMS.map((it, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
            onClick={() => handleDot(i)}
            aria-label={it.title}
            title={it.title}
          >
            <img
              src={it.img}
              alt={it.title}
              className={styles.thumbImg}
              style={{ objectPosition: it.objectPosition ?? "center center" }}
            />
            <span className={styles.thumbLabel}>{it.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
