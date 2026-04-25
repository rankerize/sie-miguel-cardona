import styles from "./dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { MapPin, Thermometer, Eye, ChevronRight, Star, Anchor, Utensils, CheckCircle2, Waves, Clock } from "lucide-react";

const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero info sobre Isla Fuerte 🦞")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about Isla Fuerte please 🦞")}`;

const DIVE_SPOTS = [
  { name: "Punta Arena", depth: "5–18m", level: "Principiante", desc: "La bahía más protegida de la isla: coral de fuego, tortugas y peces loro en aguas muy cálidas." },
  { name: "El Jumbo", depth: "8–22m", level: "Intermedio", desc: "Formaciones coralinas imponentes con morenas, rayas guitarra y cardúmenes de pargos." },
  { name: "Los Mangles", depth: "2–8m", level: "Principiante", desc: "Snorkel y buceo en el mangle: caballitos de mar, pulpos y juveniles de peces tropicales entre raíces." },
  { name: "El Planchón", depth: "12–28m", level: "Advanced", desc: "Plataforma rocosa con agregaciones de langosta espinosa y grandes barracudas. Espectacular." },
];

const GASTRO = [
  { dish: "Langosta a la Plancha", img: "/images/img-b707a6e7.jpg", desc: "Langosta espinosa del Caribe, capturada ese mismo día por pescadores locales. Servida a la plancha con mantequilla de ajo y limón.", tags: ["Fresco del día","Premium","Caribe"] },
  { dish: "Pargo Rojo al Coco", img: "/images/img-a0fe9562.jpg", desc: "Pargo entero cocinado en leche de coco con yuca, plátano maduro y hogao costeño. Plato de la abuela isleña.", tags: ["Artesanal","Coco","Tradición"] },
  { dish: "Ceviche de Camarón", img: "/images/img-6aa47b93.jpg", desc: "Camarones tigre marinados en limón con ají dulce, cilantro y leche de coco. Refrescante tras una mañana de buceo.", tags: ["Ligero","Fresco","Local"] },
  { dish: "Arroz con Calamares", img: "/images/img-ad10244c.jpg", desc: "Arroz negro cocinado en tinta de calamar con anillos de calamar y mariscos mixtos. Influencia de pescadores artesanales.", tags: ["Artesanal","Mariscos","Único"] },
];

export default async function IslaFuertePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/images/img-f694087a.jpg')" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Isla Fuerte</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "Caribe · Córdoba, Colombia" : "Caribbean · Córdoba, Colombia"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Isla Fuerte: Coral Virgen y Langosta Fresca" : "Isla Fuerte: Virgin Coral & Fresh Lobster"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "La isla sin carros, sin ruido, sin masas. Arrecifes de coral en estado prístino, manglar, langosta fresca del día y una calma que no encontrarás en otra parte." : "The island with no cars, no noise, no crowds. Pristine coral reefs, mangrove, fresh lobster and a calm you won't find anywhere else."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>29°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>15–25m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Star size={16} /><span>{isEs ? "Sin carros" : "No cars"}</span></div>
            <div className={styles.heroStat}><Anchor size={16} /><span>{isEs ? "Coral virgen" : "Pristine coral"}</span></div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Isla Fuerte" : "Book Isla Fuerte"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo" : "Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Coral Intacto, Fauna Abundante" : "Intact Coral, Abundant Wildlife"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Isla Fuerte es uno de los pocos ecosistemas coralinos del Caribe colombiano que se mantiene en estado casi prístino gracias a su bajo tráfico turístico." : "Isla Fuerte is one of the few Colombian Caribbean coral ecosystems in nearly pristine condition thanks to its low tourist traffic."}</p>
          </div>
          <div className={styles.diveImgWrap}>
            <img src="/images/img-1beb6992.jpg" alt="Coral Isla Fuerte" className={styles.diveImg} />
            <div className={styles.diveImgOverlay}><span>{isEs ? "Coral en estado prístino · Temperatura 29°C todo el año" : "Pristine coral · 29°C water year-round"}</span></div>
          </div>
          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles[`level_${s.level.toLowerCase()}`]}`}>{s.level}</span>
                </div>
                <div className={styles.spotDepth}><Waves size={14} />{s.depth}</div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.infoBoxRow}>
            {[
              { icon: <CheckCircle2 size={18} className={styles.infoIcon} />, title: isEs ? "Sin masas turísticas" : "No tourist crowds", desc: isEs ? "Máximo 200 visitantes por día en toda la isla." : "Maximum 200 visitors per day on the whole island." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "Paquete fin de semana" : "Weekend package", desc: isEs ? "Viernes a domingo: lancha, posada y 4 inmersiones." : "Fri–Sun: boat, guesthouse and 4 dives." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Langosta incluida" : "Lobster included", desc: isEs ? "Nuestros paquetes incluyen cena de langosta del día." : "Our packages include a same-day lobster dinner." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><Utensils size={14} />{isEs ? "Gastronomía" : "Gastronomy"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Del Mar a Tu Mesa" : "From the Sea to Your Table"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "En Isla Fuerte, el menú lo dicta el mar ese mismo día. Langosta, pargo, camarón y calamar capturados por pescadores artesanales de la isla." : "In Isla Fuerte, the menu is set by the sea that same day. Lobster, snapper, shrimp and squid caught by local artisan fishermen."}</p>
          </div>
          <div className={styles.gastroGrid}>
            {GASTRO.map((item, i) => (
              <div key={i} className={styles.gastroCard}>
                <div className={styles.gastroImgWrap}><img src={item.img} alt={item.dish} className={styles.gastroImg} /></div>
                <div className={styles.gastroBody}>
                  <h3 className={styles.gastroDish}>{item.dish}</h3>
                  <p className={styles.gastroDesc}>{item.desc}</p>
                  <div className={styles.gastroTags}>{item.tags.map((t, j) => <span key={j} className={styles.gastroTag}>{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>{isEs ? "Más Destinos" : "More Destinations"}</h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.otherCard} style={{ backgroundImage: "url('/Morena.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Santa Marta</h3><p>{isEs ? "Taganga, corales y gastronomía costeña" : "Taganga, corals and coastal gastronomy"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>UNESCO</span><h3>Providencia</h3><p>{isEs ? "El tercer mayor arrecife de barrera del mundo" : "The world's third largest barrier reef"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listo para Isla Fuerte?" : "Ready for Isla Fuerte?"}</h2>
          <p>{isEs ? "Sin carros, sin ruido. Solo mar, coral y langosta fresca." : "No cars, no noise. Just sea, coral and fresh lobster."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
