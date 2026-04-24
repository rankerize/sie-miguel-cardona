import styles from "../providencia/dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { MapPin, Thermometer, Eye, ChevronRight, Star, Anchor, CheckCircle2, Waves, Clock, Fish, ShieldAlert, Navigation } from "lucide-react";

const WHATSAPP = "573017836467";
const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero info sobre la expedición vida a bordo en Malpelo 🦈")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about the Malpelo liveaboard expedition please 🦈")}`;

const DIVE_SPOTS = [
  { name: "La Nevera", depth: "15–35m", level: "Avanzado", desc: "Estación de limpieza principal. Aquí se congregan cientos de tiburones martillo y galápagos para ser desparasitados." },
  { name: "El Altar de Virginia", depth: "20–30m", level: "Avanzado", desc: "Formaciones rocosas impresionantes y paso de grandes pelágicos, águilas pescadoras y atunes." },
  { name: "Bajo del Monstruo", depth: "25–40m", level: "Avanzado", desc: "Pináculo submarino donde habita el majestuoso tiburón monstruo o tiburón de puntas blancas gigante." },
  { name: "La Ferretería", depth: "15–25m", level: "Avanzado", desc: "Cueva natural cubierta de coral donde se refugian tiburones puntas blancas y morenas verdes gigantes." },
];

const REQUISITOS = [
  { dish: "Advanced Open Water", img: "/images/img-9a1071ef.jpg", desc: "Es indispensable contar con certificación de buceo avanzado debido a las corrientes fuertes y profundidad.", tags: ["Obligatorio","Certificación"] },
  { dish: "+50 Inmersiones", img: "/images/img-f0b2070e.jpg", desc: "Se requiere un mínimo de 50 inmersiones registradas en bitácora para garantizar la experiencia y seguridad del grupo.", tags: ["Experiencia","Seguridad"] },
  { dish: "Certificación Nitrox", img: "/images/img-239db711.jpg", desc: "Necesaria para maximizar el tiempo de fondo de forma segura durante la expedición de vida a bordo.", tags: ["Técnico","Obligatorio"] },
  { dish: "Seguro de Buceo", img: "https://images.unsplash.com/photo-1620050853503-494bdf34139e?w=800&q=80", desc: "Seguro DAN u otro equivalente vigente con cobertura de evacuación médica y cámara hiperbárica.", tags: ["DAN","Seguridad"] },
];

export default async function MalpeloPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: 0
          }}
        >
          <source src="/ferox.mov" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} style={{ zIndex: 1, backgroundColor: "rgba(0,0,0,0.6)" }} />
        <div className={styles.heroContent} style={{ zIndex: 2 }}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Malpelo</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "Pacífico · Patrimonio UNESCO" : "Pacific · UNESCO Heritage"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Malpelo: La roca viviente" : "Malpelo: The living rock"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "El santuario de fauna marina más imponente del mundo. Cardúmenes de tiburones martillo, sedosos y galápagos te esperan en esta expedición vida a bordo." : "The most impressive marine sanctuary in the world. Schools of hammerhead, silky and Galapagos sharks await you on this liveaboard expedition."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>26°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>15–30m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Navigation size={16} /><span>{isEs ? "Vida a Bordo" : "Liveaboard"}</span></div>
            <div className={styles.heroStat}><ShieldAlert size={16} /><span>{isEs ? "Avanzado" : "Advanced"}</span></div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Expedición" : "Book Expedition"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo Pelágico" : "Pelagic Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "El Reino de los Tiburones" : "The Kingdom of Sharks"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Santuario de Flora y Fauna de Malpelo. Una roca aislada en medio del Océano Pacífico, famosa mundialmente por los enormes cardúmenes de tiburones." : "Malpelo Flora and Fauna Sanctuary. An isolated rock in the Pacific Ocean, world famous for massive schools of sharks."}</p>
          </div>
          <div className={styles.diveImgWrap}>
            <img src="/images/img-b4776222.jpg" alt="Sharks Malpelo" className={styles.diveImg} style={{ objectPosition: "center 20%" }} />
            <div className={styles.diveImgOverlay}><span>{isEs ? "Santuario Marino · Corrientes fuertes" : "Marine Sanctuary · Strong currents"}</span></div>
          </div>
          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles.level_avanzado}`}>{s.level}</span>
                </div>
                <div className={styles.spotDepth}><Waves size={14} />{s.depth}</div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.infoBoxRow}>
            {[
              { icon: <Navigation size={18} className={styles.infoIcon} />, title: isEs ? "Vida a Bordo (Liveaboard)" : "Liveaboard Experience", desc: isEs ? "Alojamiento y comidas en el barco durante toda la expedición (8 a 10 días)." : "Accommodation and meals on the boat for the entire expedition (8-10 days)." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "3 inmersiones diarias" : "3 daily dives", desc: isEs ? "Máximo tiempo en el agua, con Nitrox para buceos seguros." : "Max time in the water, with Nitrox for safe diving." },
              { icon: <ShieldAlert size={18} className={styles.infoIcon} />, title: isEs ? "Corrientes Fuertes" : "Strong Currents", desc: isEs ? "Buceos en azul y derivas emocionantes con mucha acción pelágica." : "Blue water dives and exciting drifts with pelagic action." },
            ].map((b, i) => (
               <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><ShieldAlert size={14} />{isEs ? "Requisitos de la Expedición" : "Expedition Requirements"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Solo para Buzos Experimentados" : "For Experienced Divers Only"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Las condiciones en Malpelo son extremas. Corrientes fuertes, oleaje y profundidad exigen que todos los participantes cumplan con estos requisitos sin excepción." : "Conditions in Malpelo are extreme. Strong currents, swell and depth require all participants to meet these requirements without exception."}</p>
          </div>
          <div className={styles.gastroGrid}>
            {REQUISITOS.map((item, i) => (
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
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Providencia</h3><p>{isEs ? "Reserva UNESCO y arrecife de barrera" : "UNESCO Reserve and barrier reef"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/gorgona`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-f0b2070e.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Pacífico</span><h3>Gorgona</h3><p>{isEs ? "Ballenas, tiburones y selva tropical" : "Whales, sharks and rainforest"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Estás listo para el desafío de Malpelo?" : "Ready for the Malpelo challenge?"}</h2>
          <p>{isEs ? "Expediciones con cupos limitados (máximo 16 buzos por barco)." : "Expeditions with limited spots (max 16 divers per boat)."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Solicitar Fechas y Precios" : "Request Dates and Prices"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
