import styles from "./page.module.css";
import { getDictionary } from "../../i18n";
import { Locale } from "../../i18n";
import ExpeditionsCarousel from "../../components/ExpeditionsCarousel";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  const WHATSAPP_NUMBER = "573017836467";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20buceo%20en%20Taganga`;
  const INSTAGRAM_LINK = "https://www.instagram.com/siedivingandadventure/";

  const schemaLD = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DivingSchool",
        "name": "SIE DIVING AND ADVENTURE",
        "url": "https://siediving.com",
        "logo": "https://siediving.com/images/logo.png",
        "description": "Escuela de buceo PADI líder del Caribe colombiano con sede en Taganga, Santa Marta. Cursos Open Water, Advanced y expediciones a Providencia, Isla Fuerte, Gorgona y Malpelo.",
        "telephone": "+573017836467",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Taganga",
          "addressRegion": "Santa Marta",
          "addressCountry": "CO"
        },
        "sameAs": ["https://www.instagram.com/siedivingandadventure/"],
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.2727,
          "longitude": -74.1900
        },
        "areaServed": ["Taganga", "Santa Marta", "Providencia", "Isla Fuerte", "Gorgona", "Malpelo"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cursos de Buceo PADI",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "PADI Open Water Diver",
              "description": "El curso de buceo más popular en Colombia. Certifícate en 3-5 días en Taganga, Santa Marta.",
              "provider": { "@type": "Organization", "name": "SIE DIVING AND ADVENTURE" },
              "url": `https://siediving.com/${lang}/cursos-padi`
            },
            {
              "@type": "Course",
              "name": "PADI Advanced Open Water",
              "description": "Lleva tu buceo al siguiente nivel. 5 inmersiones de aventura hasta 30 metros en Colombia.",
              "provider": { "@type": "Organization", "name": "SIE DIVING AND ADVENTURE" },
              "url": `https://siediving.com/${lang}/cursos-padi`
            }
          ]
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLD) }}
      />
      {/* Floating WhatsApp Button */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.floatingWhatsapp} aria-label={dict.hero?.cta_whatsapp || 'WhatsApp'}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.2c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 331.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
      </a>

      {/* (A) ATENCIÓN - HERO SECTION */}
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
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} text-gradient`}>{dict.hero?.title}</h1>
          <p className={styles.subtitle}>{dict.hero?.subtitle}</p>
          <div className={styles.actions}>
            <a href={`/${lang}/expediciones`} className="btn btn-primary">{dict.hero?.cta_primary}</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.8rem 1.5rem', borderRadius: '50px', border: '1px solid var(--color-primary)', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              Síguenos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* EXPEDICIONES - CAROUSEL */}
      <ExpeditionsCarousel lang={lang} />

      {/* (I) INTERÉS - POR QUÉ TAGANGA */}
      {dict.interest && (
        <section className={`${styles.expeditionSection} section`}>
          <div className="container">
            <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
              {dict.interest.title}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              {dict.interest.desc}
            </p>

            <div className={styles.grid}>
              {dict.interest.features?.map((feature: any, idx: number) => (
                <div key={idx} className={`glass-panel ${styles.card}`}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>✦</div>
                  <h3 className={styles.cardTitle} style={{ color: 'white', fontSize: '1.2rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EQUIPOS DE BUCEO SEGURO */}
      {(() => {
        const isEs = lang === 'es';
        const GEAR = [
          {
            icon: '🥽',
            titleEs: 'Máscara de Buceo',
            titleEn: 'Diving Mask',
            descEs: 'Vidrio templado de doble lente y silicona hipoalergénica. Ajuste hermético esencial en las aguas del Caribe y el Pacífico colombiano.',
            descEn: 'Tempered double-lens glass and hypoallergenic silicone. A perfect seal is essential in Colombia\'s Caribbean and Pacific waters.',
          },
          {
            icon: '🦺',
            titleEs: 'Chaleco Hidrostático (BCD)',
            titleEn: 'Buoyancy Control Device',
            descEs: 'Regula tu flotabilidad en aguas cambiantes. Imprescindible para las fuertes corrientes de Malpelo y Gorgona en el Pacífico.',
            descEn: 'Controls buoyancy in changing waters. Essential for the strong currents of Malpelo and Gorgona in the Pacific.',
          },
          {
            icon: '💨',
            titleEs: 'Regulador de Primera y Segunda Etapa',
            titleEn: 'First & Second Stage Regulator',
            descEs: 'Tu fuente de aire bajo el agua. Usamos reguladores DIN certificados, revisados antes de cada inmersión en nuestras dos costas.',
            descEn: 'Your air source underwater. We use certified DIN regulators, checked before every dive on both coasts.',
          },
          {
            icon: '🌊',
            titleEs: 'Traje de Neopreno',
            titleEn: 'Wetsuit',
            descEs: 'Caribe (Taganga, Providencia): 3 mm · 26–29 °C. Pacífico (Gorgona, Malpelo): 5–7 mm · 20–24 °C. Siempre el grosor correcto según el océano.',
            descEn: 'Caribbean (Taganga, Providencia): 3 mm · 26–29 °C. Pacific (Gorgona, Malpelo): 5–7 mm · 20–24 °C. Always the right thickness for each ocean.',
          },
          {
            icon: '⌚',
            titleEs: 'Computador de Buceo',
            titleEn: 'Dive Computer',
            descEs: 'Monitoreo en tiempo real de profundidad, tiempo y límites de no descompresión. Obligatorio en las inmersiones técnicas del Pacífico.',
            descEn: 'Real-time monitoring of depth, time and no-decompression limits. Mandatory for technical Pacific dives.',
          },
          {
            icon: '🔦',
            titleEs: 'Linterna Subacuática',
            titleEn: 'Underwater Torch',
            descEs: 'Revela los colores reales a partir de los 10 m. Esencial en las grutas coralinas de Providencia y los fondos oscuros del Pacífico.',
            descEn: 'Reveals true colors below 10 m. Essential in Providencia\'s coral caves and the Pacific\'s dark depths.',
          },
          {
            icon: '🎯',
            titleEs: 'Boya SMB (Señal de Superficie)',
            titleEn: 'SMB Surface Marker Buoy',
            descEs: 'Señaliza tu posición al salir en mar abierto. Indispensable en las salidas oceánicas de Malpelo y Gorgona.',
            descEn: 'Signals your position when surfacing in open sea. Indispensable on ocean dives at Malpelo and Gorgona.',
          },
          {
            icon: '🐟',
            titleEs: 'Aletas de Propulsión',
            titleEn: 'Propulsion Fins',
            descEs: 'Aletas de paleta o split según la corriente. Las corrientes del Pacífico exigen mayor potencia que las aguas cálidas del Caribe.',
            descEn: 'Blade or split fins depending on currents. Pacific currents demand more power than the warm Caribbean waters.',
          },
        ];
        return (
          <section className={styles.equipmentSection} id="equipo-buceo">
            <div className="container">
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span className={styles.equipBadge}>
                  🤿 {isEs ? 'Seguridad · Tecnología · Confort' : 'Safety · Technology · Comfort'}
                </span>
                <h2 className={`text-gradient ${styles.equipTitle}`}>
                  {isEs ? 'Equipo para un Buceo Seguro en Colombia' : 'Equipment for Safe Diving in Colombia'}
                </h2>
                <p className={styles.equipDesc}>
                  {isEs
                    ? 'Dos océanos, dos realidades distintas. En SIE DIVING seleccionamos y mantenemos el equipo adecuado para las condiciones específicas del Caribe y el Pacífico colombiano.'
                    : 'Two oceans, two different realities. At SIE DIVING we select and maintain the right gear for the specific conditions of the Colombian Caribbean and Pacific.'}
                </p>
              </div>

              <div className={styles.equipGrid}>
                {GEAR.map((item, i) => (
                  <div key={i} className={`glass-panel ${styles.equipCard}`}>
                    <div className={styles.equipIcon}>{item.icon}</div>
                    <h3 className={styles.equipCardTitle}>{isEs ? item.titleEs : item.titleEn}</h3>
                    <p className={styles.equipCardDesc}>{isEs ? item.descEs : item.descEn}</p>
                  </div>
                ))}
              </div>

              {/* Ocean conditions banner */}
              <div className={styles.oceanBanner}>
                <div className={styles.oceanCard}>
                  <div className={styles.oceanEmoji}>🌴</div>
                  <div className={styles.oceanName}>{isEs ? 'Caribe Colombiano' : 'Colombian Caribbean'}</div>
                  <div className={styles.oceanSites}>Taganga · Providencia · Isla Fuerte</div>
                  <ul className={styles.oceanList}>
                    <li>🌡️ 26–29 °C</li>
                    <li>👁️ {isEs ? 'Visibilidad 15–30 m' : '15–30 m visibility'}</li>
                    <li>🌊 {isEs ? 'Corrientes suaves' : 'Mild currents'}</li>
                    <li>🤿 {isEs ? 'Traje 3 mm' : '3 mm wetsuit'}</li>
                  </ul>
                </div>
                <div className={styles.oceanDivider}>⚡</div>
                <div className={`${styles.oceanCard} ${styles.oceanCardPacific}`}>
                  <div className={styles.oceanEmoji}>🦈</div>
                  <div className={styles.oceanName}>{isEs ? 'Pacífico Colombiano' : 'Colombian Pacific'}</div>
                  <div className={styles.oceanSites}>Gorgona · Malpelo</div>
                  <ul className={styles.oceanList}>
                    <li>🌡️ 20–24 °C</li>
                    <li>👁️ {isEs ? 'Visibilidad 10–20 m' : '10–20 m visibility'}</li>
                    <li>🌊 {isEs ? 'Corrientes fuertes' : 'Strong currents'}</li>
                    <li>🤿 {isEs ? 'Traje 5–7 mm' : '5–7 mm wetsuit'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* (D) DESEO - CURSOS Y EXPERIENCIAS */}
      {dict.desire && (
        <section id="cursos" className="section" style={{ background: 'var(--color-bg)' }}>
          <div className="container">
            <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
              {dict.desire.title}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
              {dict.desire.date_highlight}
            </p>

            <div className={styles.grid}>
              {/* PADI Open Water */}
              <div className={`glass-panel ${styles.card}`} style={{ borderTop: '4px solid var(--color-primary)' }}>
                <h3 className={styles.cardTitle}>{dict.desire.padi_ow.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{dict.desire.padi_ow.desc}</p>
                <div className={styles.cardPrice}>{dict.desire.padi_ow.price}</div>
                <ul style={{ listStyle: 'none', textAlign: 'left', margin: '2rem 0', color: '#ccc' }}>
                  {dict.desire.padi_ow.features?.map((feature: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--color-primary)' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  {dict.desire.book_btn}
                </a>
              </div>

              {/* PADI Advanced */}
              <div className={`glass-panel ${styles.card}`} style={{ borderTop: '4px solid var(--color-secondary)' }}>
                <h3 className={styles.cardTitle}>{dict.desire.padi_adv.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{dict.desire.padi_adv.desc}</p>
                <div className={styles.cardPrice}>{dict.desire.padi_adv.price}</div>
                <ul style={{ listStyle: 'none', textAlign: 'left', margin: '2rem 0', color: '#ccc' }}>
                  {dict.desire.padi_adv.features?.map((feature: string, idx: number) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--color-secondary)' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                  {dict.desire.book_btn}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* (A) ACCIÓN - CTA FINAL */}
      {dict.action && (
        <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
          <div className="container">
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(0, 229, 255, 0.05)', borderColor: 'rgba(0, 229, 255, 0.2)' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
                {dict.action.title}
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                {dict.action.desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                  {dict.action.cta_final}
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '50px', border: '1px solid var(--color-primary)', color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.2 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  Seguir en Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* FOOTER */}
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'var(--color-bg)', color: 'var(--color-text-muted)' }}>
        <p>© {new Date().getFullYear()} SIE DIVING AND ADVENTURE. Todos los derechos reservados.</p>
        <p style={{ marginTop: '0.5rem' }}>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>@siedivingandadventure</a>
        </p>
      </footer>
    </main>
  );
}
