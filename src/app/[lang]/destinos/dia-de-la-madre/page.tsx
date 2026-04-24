import styles from "../providencia/dest.module.css";
import courseStyles from "../../cursos-padi/open-water/page.module.css";
import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { Heart, ChevronRight, CheckCircle2, Gift, Camera, Anchor } from "lucide-react";

const WHATSAPP = "573017836467";
const WA_ES = `https://wa.me/573017836467?text=${encodeURIComponent("Hola, quiero información sobre el plan de buceo especial para el Día de la Madre 🎁🤿")}`;
const WA_EN = `https://wa.me/573017836467?text=${encodeURIComponent("Hi, info about the Mother's Day diving plan please 🎁🤿")}`;

export default async function DiaDeLaMadrePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  const isEs = lang === "es";
  const WA = isEs ? WA_ES : WA_EN;

  return (
    <main className={styles.page}>
      <section className={styles.hero} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroCrumb}>
            <Link href={`/${lang}`}>{isEs ? "Inicio" : "Home"}</Link><span>/</span>
            <span>{isEs ? "Destinos" : "Destinations"}</span><span>/</span>
            <span>{isEs ? "Día de la Madre" : "Mother's Day"}</span>
          </div>
          <div className={styles.heroTag}><Heart size={14} />{isEs ? "Especial · Familia" : "Special · Family"}</div>
          <h1 className={styles.heroTitle}>{isEs ? "Buceo para Madre e Hijo o Hija" : "Diving for Mother and Son or Daughter"}</h1>
          <p className={styles.heroSubtitle}>{isEs ? "Un regalo inolvidable. Compartan la magia del mundo submarino en un plan diseñado especialmente para conectar y disfrutar juntos." : "An unforgettable gift. Share the magic of the underwater world in a plan specially designed to connect and enjoy together."}</p>
          
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
            {isEs ? "Reservar Regalo" : "Book Gift"}<ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionBadge}><Gift size={14} />{isEs ? "Plan Fun Dive" : "Fun Dive Plan"}</div>
            <h2 className={styles.sectionTitle}>{isEs ? "Un Vínculo Bajo el Agua" : "A Bond Underwater"}</h2>
            <p className={styles.sectionDesc}>{isEs ? "El océano tiene el poder de unirnos. Este plan de buceo es más que un simple viaje, es una experiencia compartida que recordarán para siempre." : "The ocean has the power to unite us. This dive plan is more than just a trip, it is a shared experience you will remember forever."}</p>
          </div>
          
          <div className={courseStyles.infoGrid} style={{ marginTop: '3rem' }}>
            {[
              { icon: CheckCircle2, title: isEs ? "Instrucción Personalizada" : "Personalized Instruction", desc: isEs ? "Instructores PADI dedicados exclusivamente a ustedes para garantizar máxima seguridad y confianza." : "PADI instructors dedicated exclusively to you to ensure maximum safety and confidence." },
              { icon: Camera, title: isEs ? "Fotos Acuáticas" : "Underwater Photos", desc: isEs ? "Capturamos los mejores momentos bajo el agua para que se lleven el recuerdo a casa." : "We capture the best moments underwater so you can take the memory home." },
              { icon: Anchor, title: isEs ? "Equipo Premium" : "Premium Gear", desc: isEs ? "Uso de equipo de buceo de alta gama, cómodo y seguro, ideal para todos los niveles." : "Use of high-end diving equipment, comfortable and safe, ideal for all levels." },
            ].map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className={courseStyles.infoCard}>
                  <Icon size={28} className={courseStyles.infoIcon} />
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>{isEs ? "¿Para quién es este plan?" : "Who is this plan for?"}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
             <div className="glass-panel" style={{ padding: "2rem", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>{isEs ? "Buzos Certificados" : "Certified Divers"}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{isEs ? "Si ambos ya tienen su certificación PADI, disfrutaremos de inmersiones en los mejores arrecifes de Taganga o Santa Marta, explorando a su propio ritmo." : "If both of you already have your PADI certification, we will enjoy dives in the best reefs of Taganga or Santa Marta, exploring at your own pace."}</p>
             </div>
             <div className="glass-panel" style={{ padding: "2rem", borderRadius: "16px" }}>
                <h3 style={{ color: "var(--color-secondary)", marginBottom: "1rem" }}>{isEs ? "Principiantes (Discover Scuba)" : "Beginners (Discover Scuba)"}</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{isEs ? "¿Nunca han buceado? No hay problema. Realizaremos una experiencia introductoria (Mini-curso) donde aprenderán lo básico antes de explorar el mar juntos." : "Never dived before? No problem. We will do an introductory experience (Mini-course) where you will learn the basics before exploring the sea together."}</p>
             </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>{isEs ? "¿Listos para la aventura, mamá?" : "Ready for the adventure, mom?"}</h2>
          <p>{isEs ? "Reserva hoy y asegura tu cupo para esta experiencia única." : "Book today and secure your spot for this unique experience."}</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>{isEs ? "Reservar el Plan" : "Book the Plan"}<ChevronRight size={18} /></a>
        </div>
      </section>
    </main>
  );
}
