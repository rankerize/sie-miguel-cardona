import { getDictionary, Locale } from "../../../../i18n";
import styles from "./page.module.css";
import { BookOpen, Waves, Users, Award, CheckCircle2, Clock, ChevronRight } from "lucide-react";

import Image from "next/image";

export default async function OpenWaterPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const ow = dict.courses.open_water;

  const WHATSAPP_NUMBER = "573017836467";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "es" ? "Hola, quiero inscribirme al curso PADI Open Water 🤿" : "Hi, I want to sign up for the PADI Open Water course 🤿")}`;

  const moduleIcons = [BookOpen, Waves, Award];
  const moduleBadges = ["PASO 1", "PASO 2", "PASO 3"];

  return (
    <main className={styles.page}>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>PADI Open Water Diver</div>
            <h1 className={styles.heroTitle}>{ow.title}</h1>
            <p className={styles.heroSubtitle}>{ow.subtitle}</p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>3–5</span>
                <span className={styles.statLabel}>{lang === "es" ? "Días de curso" : "Course days"}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>18m</span>
                <span className={styles.statLabel}>{lang === "es" ? "Profundidad máx." : "Max. depth"}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>4</span>
                <span className={styles.statLabel}>{lang === "es" ? "Inmersiones abiertas" : "Open water dives"}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>{lang === "es" ? "Años mínimos" : "Min. age"}</span>
              </div>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
              {ow.cta}
              <ChevronRight size={18} />
            </a>
          </div>
          <div className={styles.heroVideoWrap}>
            <iframe 
              src="https://www.youtube.com/embed/2SnbOvrgo2A?autoplay=1&mute=1&loop=1&playlist=2SnbOvrgo2A&controls=0&modestbranding=1&rel=0&playsinline=1"
              title="PADI Open Water Diver Course"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ─── MODULES ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{ow.modules_title}</h2>
            <p className={styles.sectionDesc}>
              {lang === "es"
                ? "El curso se divide en 3 fases progresivas. Avanzas a tu propio ritmo."
                : "The course is split into 3 progressive phases. You move at your own pace."}
            </p>
          </div>
          <div className={styles.modulesGrid}>
            {ow.modules.map((mod: { title: string; desc: string }, i: number) => {
              const Icon = moduleIcons[i];
              return (
                <div key={i} className={styles.moduleCard}>
                  <div className={styles.moduleBadge}>{moduleBadges[i]}</div>
                  <div className={styles.moduleIconWrap}>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.moduleTitle}>{mod.title}</h3>
                  <p className={styles.moduleDesc}>{mod.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU LEARN DETAIL ─── */}
      <section className={`${styles.section} ${styles.detailSection}`}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailCardIcon}><BookOpen size={24}/></div>
              <h3>{lang === "es" ? "Desarrollo de Conocimientos" : "Knowledge Development"}</h3>
              <ul className={styles.detailList}>
                {(lang === "es"
                  ? ["Principios y física del buceo", "Equipo de buceo: cómo funciona", "Seguridad y planificación de inmersiones", "Conceptos de flotabilidad y descompresión", "Evaluación: revisiones de conocimientos + examen final"]
                  : ["Diving principles and physics", "Scuba gear: how it works", "Safety and dive planning", "Buoyancy and decompression concepts", "Assessment: knowledge reviews + final exam"]
                ).map((item, i) => (
                  <li key={i}><CheckCircle2 size={15} className={styles.checkIcon}/>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailCardIcon}><Waves size={24}/></div>
              <h3>{lang === "es" ? "Aguas Confinadas (Piscina)" : "Confined Water (Pool)"}</h3>
              <ul className={styles.detailList}>
                {(lang === "es"
                  ? ["Ensamblaje y configuración del equipo", "Vaciado y ajuste de máscara bajo el agua", "Recuperación del regulador", "Control de flotabilidad básica", "Procedimientos de emergencia: quedarse sin aire"]
                  : ["Equipment assembly and configuration", "Mask clearing and fitting underwater", "Regulator recovery", "Basic buoyancy control", "Emergency procedures: out-of-air scenarios"]
                ).map((item, i) => (
                  <li key={i}><CheckCircle2 size={15} className={styles.checkIcon}/>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.detailCard}>
              <div className={styles.detailCardIcon}><Award size={24}/></div>
              <h3>{lang === "es" ? "4 Inmersiones en Mar Abierto" : "4 Open Water Dives"}</h3>
              <ul className={styles.detailList}>
                {(lang === "es"
                  ? ["Inmersiones reales en Taganga, Santa Marta", "Demostración de habilidades aprendidas", "Planificación y ejecución de inmersiones reales", "Exploración de arrecifes de coral y vida marina", "Supervisión directa de instructor PADI certificado"]
                  : ["Real dives in Taganga, Santa Marta", "Demonstration of learned skills", "Planning and executing real dives", "Exploring coral reefs and marine life", "Direct supervision by a certified PADI instructor"]
                ).map((item, i) => (
                  <li key={i}><CheckCircle2 size={15} className={styles.checkIcon}/>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREREQUISITES ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.prereqBlock}>
            <div className={styles.prereqLeft}>
              <Users size={32} className={styles.prereqIcon} />
              <h2 className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>
                {ow.prerequisites_title}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                {lang === "es" ? "Todo lo que necesitas para empezar" : "Everything you need to get started"}
              </p>
            </div>
            <ul className={styles.prereqList}>
              {ow.prerequisites.map((p: string, i: number) => (
                <li key={i}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── DURATION / INCLUDE ─── */}
      <section className={`${styles.section} ${styles.infoSection}`}>
        <div className={styles.container}>
          <div className={styles.infoGrid} style={{ marginBottom: "3rem" }}>
            <div className={styles.infoCard}>
              <Clock size={28} className={styles.infoIcon} />
              <h3>{lang === "es" ? "Duración" : "Duration"}</h3>
              <p>{lang === "es" ? "3 a 5 días según tu ritmo de aprendizaje. Diseñado para que avances cómodamente sin apresurarte." : "3 to 5 days at your own learning pace. Designed so you move comfortably without rushing."}</p>
            </div>
            <div className={styles.infoCard}>
              <Award size={28} className={styles.infoIcon} />
              <h3>{lang === "es" ? "Certificación" : "Certification"}</h3>
              <p>{lang === "es" ? "Recibes la certificación PADI Open Water Diver, reconocida mundialmente. Válida de por vida para bucear hasta 18m con un compañero." : "You receive the internationally recognized PADI Open Water Diver certification. Valid for life to dive up to 18m with a buddy."}</p>
            </div>
          </div>

          <div className={styles.sectionHeader} style={{ marginBottom: "2.5rem" }}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "1.8rem" }}>
              {lang === "es" ? "Lugares de prácticas" : "Dive Sites"}
            </h2>
            <p className={styles.sectionDesc}>
              {lang === "es" 
                ? "Depende de tus ganas y necesidades de aventura. Elige entre estos destinos:"
                : "Depending on your desire for adventure. Choose between these destinations:"}
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <Waves size={28} className={styles.infoIcon} />
              <h3>Providencia</h3>
              <p>{lang === "es" ? "Uno de los mejores destinos de buceo del Caribe colombiano. Biodiversidad, arrecifes vibrantes y aguas cristalinas." : "One of the best dive destinations in the Colombian Caribbean. Biodiversity, vibrant reefs and crystal-clear waters."}</p>
            </div>
            <div className={styles.infoCard}>
              <Waves size={28} className={styles.infoIcon} />
              <h3>Isla Fuerte</h3>
              <p>{lang === "es" ? "Uno de los mejores destinos de buceo del Caribe colombiano. Biodiversidad, arrecifes vibrantes y aguas cristalinas." : "One of the best dive destinations in the Colombian Caribbean. Biodiversity, vibrant reefs and crystal-clear waters."}</p>
            </div>
            <div className={styles.infoCard}>
              <Waves size={28} className={styles.infoIcon} />
              <h3>Taganga</h3>
              <p>{lang === "es" ? "Uno de los mejores destinos de buceo del Caribe colombiano. Biodiversidad, arrecifes vibrantes y aguas cristalinas." : "One of the best dive destinations in the Colombian Caribbean. Biodiversity, vibrant reefs and crystal-clear waters."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO OFICIAL ─── */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <h2 className={styles.videoTitle}>
            {lang === "es" ? "Conoce más sobre el Open Water" : "Discover the Open Water Course"}
          </h2>
          <p className={styles.videoDesc}>
            {lang === "es" 
              ? "Descubre cómo es la experiencia, qué equipos utilizarás y todo lo que aprenderás durante el curso oficial de PADI."
              : "See what the experience looks like, the gear you will use, and everything you will learn during the official PADI course."}
          </p>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/D1EE70aiU5M" 
              title="PADI Open Water Diver Course" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{lang === "es" ? "¿Listo para dar el salto?" : "Ready to take the plunge?"}</h2>
          <p>
            {lang === "es"
              ? "Los cupos son limitados. Escríbenos por WhatsApp y te guiamos en todo el proceso."
              : "Spots are limited. Message us on WhatsApp and we'll guide you through every step."}
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            {ow.cta}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
