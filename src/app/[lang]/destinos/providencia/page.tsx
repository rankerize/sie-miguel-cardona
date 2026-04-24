import styles from "./dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { MapPin, Thermometer, Eye, ChevronRight, Star, Anchor, Utensils, CheckCircle2, Waves, Clock, Fish } from "lucide-react";

const WHATSAPP = "573017836467";
const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero info sobre bucear en Providencia 🐠")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about diving in Providencia please 🐠")}`;

const DIVE_SPOTS = [
  { name: "Third Encounter", depth: "10–30m", level: "Intermedio", desc: "Paredes verticales de coral y cardúmenes masivos de barracudas. Uno de los 10 mejores del Caribe." },
  { name: "Manta's Place", depth: "8–20m", level: "Principiante", desc: "Zona de encuentro con mantas raya y tiburones nodriza que descansan en el fondo arenoso." },
  { name: "Shark Dive", depth: "15–25m", level: "Intermedio", desc: "Inmersión guiada con tiburones de punta negra en su entorno natural. 100% segura." },
];

const GASTRO = [
  { dish: "Rondón", img: "/images/img-97f229ba.jpg", desc: "El plato insignia de Providencia: caracol, cangrejo y ñame cocidos en leche de coco. Patrimonio Cultural UNESCO.", tags: ["Patrimonio","Caribe","Coco"] },
  { dish: "Cangrejo Negro", img: "/images/img-b707a6e7.jpg", desc: "Especie endémica de la isla, preparada al vapor o en sopa de coco. Una delicia que solo existe aquí.", tags: ["Endémico","Sostenible","Único"] },
  { dish: "Ceviche de Caracol", img: "/images/img-6aa47b93.jpg", desc: "Caracola reina marinada en limón con ají chombo local, cebolla cabezona y tomates frescos.", tags: ["Fresco","Picante","Local"] },
  { dish: "Paté de Ackee", img: "/images/img-0155d254.jpg", desc: "Fruta ackee sofrita con bacalao salado. Un desayuno típico de la cultura raizal anglófona.", tags: ["Raizal","Afro-Caribe","Tradicional"] },
];

export default async function ProvidenciaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('/images/img-04e5f555.jpg')" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Providencia</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "Caribe · Reserva UNESCO" : "Caribbean · UNESCO Reserve"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Providencia: El Paraíso Virgen" : "Providencia: Untouched Paradise"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "El tercer arrecife de barrera más grande del mundo y una cultura raizal única. Aquí la naturaleza y la gastronomía te sorprenderán." : "The world's third largest barrier reef. Nature and gastronomy will astonish you."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>27°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>20–30m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Fish size={16} /><span>850+ {isEs ? "especies" : "species"}</span></div>
            <div className={styles.heroStat}><Star size={16} /><span>{isEs ? "Intermedio" : "Intermediate"}</span></div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Providencia" : "Book Providencia"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo" : "Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "El Mejor Arrecife del Caribe" : "The Caribbean's Best Reef"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Reserva de Biosfera UNESCO. El arrecife de barrera de Providencia concentra la mayor biodiversidad del Caribe occidental." : "UNESCO Biosphere Reserve. The barrier reef hosts the highest marine biodiversity in the western Caribbean."}</p>
          </div>
          <div className={styles.diveImgWrap} style={{ height: "auto", aspectRatio: "16/9" }}>
            <iframe 
              src="https://www.youtube.com/embed/4NzoEjkW3Kc?autoplay=1&mute=1&loop=1&playlist=4NzoEjkW3Kc" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              style={{ width: "100%", height: "100%", borderRadius: "20px" }}
            ></iframe>
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
              { icon: <CheckCircle2 size={18} className={styles.infoIcon} />, title: isEs ? "Hospedaje + Buceo incluido" : "Accommodation + Diving included", desc: isEs ? "Alojamiento en acomodación múltiple e inmersiones coordinadas en un solo paquete (Incluye Desayuno)." : "Multiple accommodation and coordinated dives in one package (Breakfast included)." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "Paquetes de 3 o 4 días" : "3 or 4-day packages", desc: isEs ? "A convenir dependiendo de la cantidad de aventuras a diseñar (Si eres Advance bucearemos de noche)." : "To be agreed depending on the adventures you want to design (Advanced divers dive at night)." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Área Protegida" : "Protected Area", desc: isEs ? "Bucearemos en Parque Nacional Natural Old Providence McBean Lagoon, el cual forma parte de la gran Reserva de la Biósfera Seaflower." : "We dive in the Old Providence McBean Lagoon National Natural Park, part of the Seaflower Biosphere Reserve." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><Utensils size={14} />{isEs ? "Gastronomía Raizal" : "Raizal Gastronomy"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Sabores Únicos en el Mundo" : "Flavors Unique in the World"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "La cocina raizal de Providencia es Patrimonio Cultural. Una fusión de África, el Caribe y Colombia que no encontrarás en ningún otro lugar." : "Raizal cuisine is Cultural Heritage of Colombia — a fusion of Africa, Caribbean and Colombia found nowhere else."}</p>
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
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.otherCard} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586398660697-d4a1f4f56f93?w=800&q=80')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Santa Marta</h3><p>{isEs ? "Taganga, corales y gastronomía costeña" : "Taganga, corals and coastal gastronomy"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-9a1071ef.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Isla Fuerte</h3><p>{isEs ? "Manglar, langosta y coral virgen" : "Mangrove, lobster and pristine coral"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listo para descubrir Providencia?" : "Ready to discover Providencia?"}</h2>
          <p>{isEs ? "Pocos viajeros conocen esta joya. Cupos muy limitados." : "Few travelers know this gem. Very limited spots."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
