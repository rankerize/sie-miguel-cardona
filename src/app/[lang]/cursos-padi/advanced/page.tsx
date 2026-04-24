import { getDictionary, Locale } from "../../../../i18n";
import styles from "../open-water/page.module.css";
import advStyles from "./advanced.module.css";
import { Compass, Waves, Users, Award, CheckCircle2, Anchor, Moon, Eye, Fish, ChevronRight } from "lucide-react";

export default async function AdvancedPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const adv = dict.courses.advanced;

  const WHATSAPP_NUMBER = "573017836467";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "es" ? "Hola, quiero inscribirme al curso PADI Advanced Open Water 🧭" : "Hi, I want to sign up for the PADI Advanced Open Water course 🧭")}`;

  const requiredIcons = [Anchor, Compass];
  const electiveIcons = [Waves, Moon, Anchor, Eye, Fish];

  return (
    <main className={styles.page}>
      {/* ─── HERO ─── */}
      <section className={`${styles.hero} ${advStyles.hero}`}>
        <div className={styles.heroBadge}>PADI Advanced Open Water Diver</div>
        <h1 className={styles.heroTitle}>{adv.title}</h1>
        <p className={styles.heroSubtitle}>{adv.subtitle}</p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>{lang === "es" ? "Inmersiones aventura" : "Adventure dives"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>30m</span>
            <span className={styles.statLabel}>{lang === "es" ? "Profundidad máx." : "Max. depth"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>2–3</span>
            <span className={styles.statLabel}>{lang === "es" ? "Días de curso" : "Course days"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{lang === "es" ? "Examen final" : "Final exam"}</span>
          </div>
        </div>
        <div className={advStyles.noexa}>
          {lang === "es" ? "✓ Sin examen final · Más acción, menos teoría" : "✓ No final exam · More action, less theory"}
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.heroBtn} ${advStyles.heroBtn}`}>
          {adv.cta}
          <ChevronRight size={18} />
        </a>
      </section>

      {/* ─── REQUIRED MODULES ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{adv.modules_title}</h2>
            <p className={styles.sectionDesc}>
              {lang === "es"
                ? "Completas 5 inmersiones en total: 2 obligatorias y 3 que tú eliges."
                : "You complete 5 dives total: 2 required and 3 you choose."}
            </p>
          </div>

          {/* Required */}
          <div className={advStyles.groupLabel}>
            <span className={advStyles.badge}>{lang === "es" ? "Obligatorias" : "Required"}</span>
            {adv.required_title}
          </div>
          <div className={advStyles.requiredGrid}>
            {adv.required_modules.map((mod: { title: string; desc: string }, i: number) => {
              const Icon = requiredIcons[i] || Compass;
              return (
                <div key={i} className={advStyles.requiredCard}>
                  <div className={advStyles.reqIconWrap}>
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className={advStyles.reqTitle}>{mod.title}</h3>
                    <p className={advStyles.reqDesc}>{mod.desc}</p>
                    <div className={advStyles.reqTag}>
                      {lang === "es" ? "Inmersión obligatoria" : "Required dive"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Elective */}
          <div className={advStyles.groupLabel} style={{ marginTop: "2.5rem" }}>
            <span className={`${advStyles.badge} ${advStyles.badgeElective}`}>
              {lang === "es" ? "Electivas" : "Elective"}
            </span>
            {adv.elective_title}
          </div>
          <div className={advStyles.electiveGrid}>
            {adv.elective_modules.map((mod: { title: string; desc: string }, i: number) => {
              const Icon = electiveIcons[i % electiveIcons.length];
              return (
                <div key={i} className={advStyles.electiveCard}>
                  <Icon size={22} className={advStyles.electiveIcon} strokeWidth={1.8} />
                  <h3 className={advStyles.electiveTitle}>{mod.title}</h3>
                  <p className={advStyles.electiveDesc}>{mod.desc}</p>
                </div>
              );
            })}
            {/* "More options" card */}
            <div className={`${advStyles.electiveCard} ${advStyles.moreCard}`}>
              <span className={advStyles.moreDots}>···</span>
              <h3 className={advStyles.electiveTitle}>
                {lang === "es" ? "Y más opciones" : "And more options"}
              </h3>
              <p className={advStyles.electiveDesc}>
                {lang === "es"
                  ? "Fotografía subacuática, identificación de peces, naturalist y más."
                  : "Underwater photography, fish ID, naturalist and more."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECIALTY CREDIT ─── */}
      <section className={`${styles.section} ${advStyles.specialtySection}`}>
        <div className={styles.container}>
          <div className={advStyles.specialtyInner}>
            <Award size={40} className={advStyles.specialtyIcon} />
            <div>
              <h3>{lang === "es" ? "Cada inmersión cuenta para una especialidad" : "Each dive counts toward a specialty"}</h3>
              <p>
                {lang === "es"
                  ? "Las 5 inmersiones de aventura pueden contar como la primera inmersión de los cursos de especialidad PADI. Ya estás a mitad del camino hacia tu próxima certificación."
                  : "All 5 adventure dives can count as the first dive of the corresponding PADI Specialty courses. You're already halfway to your next certification."}
              </p>
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
                {adv.prerequisites_title}
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
                {lang === "es" ? "Lo que necesitas para inscribirte" : "What you need to enroll"}
              </p>
            </div>
            <ul className={styles.prereqList}>
              {adv.prerequisites.map((p: string, i: number) => (
                <li key={i}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className={`${styles.ctaSection} ${advStyles.ctaSection}`}>
        <div className={styles.container}>
          <h2>{lang === "es" ? "El océano profundo te espera" : "The deep ocean awaits you"}</h2>
          <p>
            {lang === "es"
              ? "Cupos limitados por expedición. Escríbenos y coordinamos tu curso."
              : "Limited spots per expedition. Message us and we'll coordinate your course."}
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`${styles.ctaBtn} ${advStyles.ctaBtn}`}>
            {adv.cta}
            <ChevronRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
