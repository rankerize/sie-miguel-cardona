import styles from "./dest.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import {
  MapPin, Thermometer, Eye, ChevronRight, Star,
  Anchor, Utensils, CheckCircle2, Waves, Clock, Fish
} from "lucide-react";

const WHATSAPP = "573017836467";
const WA_MSG_ES = encodeURIComponent("Hola, quiero más información sobre el destino Santa Marta / Taganga 🌊");
const WA_MSG_EN = encodeURIComponent("Hi, I want more info about the Santa Marta / Taganga destination 🌊");

const DIVE_SPOTS = [
  { name: "El Morro", depth: "5–18m", level: "Principiante", desc: "Arrecife de coral vibrante con tortugas carey y bancos de peces tropicales." },
  { name: "La Aguja", depth: "10–25m", level: "Intermedio", desc: "Pared vertical cubierta de esponjas y gorgonias, con pepinos y estrellas de mar." },
  { name: "Punta Venado", depth: "8–20m", level: "Intermedio", desc: "Bahía protegida ideal para Open Water con visibilidad excepcional." },
  { name: "Los Cañones", depth: "18–30m", level: "Advanced", desc: "Cañones submarinos con rayas águila y morenas. Solo para Advanced Divers." },
];

const GASTRO = [
  {
    dish: "Cazuela de Mariscos",
    img: "/images/img-b707a6e7.jpg",
    desc: "El plato emblema del Caribe: langostinos, almejas y pescado en crema de coco con arroz de coco.",
    tags: ["Mariscos", "Caribe", "Tradicional"],
  },
  {
    dish: "Patacón con Todo",
    img: "/images/img-a0fe9562.jpg",
    desc: "Plátano verde frito aplastado, cargado con ceviche de camarón, guacamole y hogao costeño.",
    tags: ["Callejero", "Favorito local"],
  },
  {
    dish: "Ceviche Costeño",
    img: "/images/img-6aa47b93.jpg",
    desc: "Camarones o langosta marinados en limón Tahití, con ají dulce, cebolla morada y leche de coco.",
    tags: ["Fresco", "Ligero", "Caribe"],
  },
  {
    dish: "Arroz de Lisa",
    img: "/images/img-ad10244c.jpg",
    desc: "Arroz cocinado en caldo de lisa (pescado local) con coco, a la usanza indígena Tayrona.",
    tags: ["Autóctono", "Tayrona", "Único"],
  },
];

export default async function SantaMartaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = `https://wa.me/${WHATSAPP}?text=${isEs ? WA_MSG_ES : WA_MSG_EN}`;

  return (
    <main className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero} style={{ backgroundImage: "url(/Morena.jpg)" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>Santa Marta</span>
          </div>
          <div className={styles.heroTag}><MapPin size={14} />{isEs ? "Caribe Colombiano · Taganga" : "Colombian Caribbean · Taganga"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Santa Marta & Taganga" : "Santa Marta & Taganga"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "El Caribe más biodiverso de Colombia. Aguas cristalinas, arrecifes de coral y la gastronomía más rica de la costa." : "Colombia's most biodiverse Caribbean coast. Crystal waters, coral reefs, and the richest coastal cuisine."}</p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><Thermometer size={16} /><span>28°C</span></div>
            <div className={styles.heroStat}><Eye size={16} /><span>10–20m {isEs ? "visibilidad" : "visibility"}</span></div>
            <div className={styles.heroStat}><Fish size={16} /><span>{isEs ? "Corales y Morenas" : "Corals and Morays"}</span></div>
            <div className={styles.heroStat}><Star size={16} /><span>{isEs ? "Nivel: Todos" : "Level: All"}</span></div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Santa Marta" : "Book Santa Marta"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* ── DIVING SECTION ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Anchor size={14} />{isEs ? "Buceo" : "Diving"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Inmersiones en el Tayrona" : "Diving in Tayrona"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Taganga concentra algunos de los mejores sitios de buceo del Caribe colombiano, a pocos minutos en lancha desde el pueblo." : "Taganga hosts some of the best dive sites on the Colombian Caribbean, just minutes by boat from the village."}</p>
          </div>
          <div className={styles.diveImgWrap}>
            <img src="/images/isla-aguja.png" alt="Isla Aguja, Taganga" className={styles.diveImg} />
            <div className={styles.diveImgOverlay}><span>{isEs ? "Isla Aguja, Taganga · Visibilidad hasta 20m" : "Isla Aguja, Taganga · Visibility up to 20m"}</span></div>
          </div>
          <div className={styles.spotsGrid}>
            {DIVE_SPOTS.map((s, i) => (
              <div key={i} className={styles.spotCard}>
                <div className={styles.spotHeader}>
                  <h3 className={styles.spotName}>{s.name}</h3>
                  <span className={`${styles.levelBadge} ${styles[`level_${s.level.toLowerCase().replace(" ", "")}`]}`}>{s.level}</span>
                </div>
                <div className={styles.spotDepth}><Waves size={14} />{s.depth}</div>
                <p className={styles.spotDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.infoBoxRow}>
            {[
              { icon: <CheckCircle2 size={18} className={styles.infoIcon} />, title: isEs ? "Equipo completo" : "Full gear", desc: isEs ? "BCD, regulador, traje, tanque y pesos incluidos." : "BCD, regulator, wetsuit, tank and weights included." },
              { icon: <Clock size={18} className={styles.infoIcon} />, title: isEs ? "Salidas diarias" : "Daily trips", desc: isEs ? "Dos inmersiones cada mañana desde Taganga." : "Two dives every morning from Taganga." },
              { icon: <Anchor size={18} className={styles.infoIcon} />, title: isEs ? "Grupos pequeños" : "Small groups", desc: isEs ? "Máximo 6 buzos por instructor certificado." : "Maximum 6 divers per certified instructor." },
            ].map((b, i) => (
              <div key={i} className={styles.infoBox}>{b.icon}<div><strong>{b.title}</strong><p>{b.desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GASTRONOMY SECTION ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={`${styles.sectionBadge} ${styles.badgeGold}`}><Utensils size={14} />{isEs ? "Gastronomía Costeña" : "Coastal Gastronomy"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Sabores del Caribe" : "Caribbean Flavors"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "Santa Marta y Taganga son un paraíso gastronómico. Después de bucear, te esperan los sabores más auténticos del Caribe colombiano." : "Santa Marta and Taganga are a gastronomic paradise. After diving, the most authentic Caribbean flavors await you."}</p>
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

      {/* ── MORE DESTINATIONS ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "2.5rem" }}>{isEs ? "Más Destinos" : "More Destinations"}</h2>
          <div className={styles.otherGrid}>
            <Link href={`/${lang}/destinos/providencia`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-860a4676.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Providencia</h3><p>{isEs ? "El tercer mejor arrecife de barrera del mundo" : "The world's third largest barrier reef"}</p></div>
            </Link>
            <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.otherCard} style={{ backgroundImage: "url('/images/img-9a1071ef.jpg')" }}>
              <div className={styles.otherOverlay} />
              <div className={styles.otherBody}><span className={styles.otherTag}>Caribe</span><h3>Isla Fuerte</h3><p>{isEs ? "Manglar, langosta y coral virgen" : "Mangrove, lobster and pristine coral"}</p></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listo para sumergirte en Santa Marta?" : "Ready to dive into Santa Marta?"}</h2>
          <p>{isEs ? "Cupos limitados. Escríbenos y armamos tu experiencia completa." : "Limited spots. Message us and we'll build your complete experience."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
