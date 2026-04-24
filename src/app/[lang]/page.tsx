import styles from "./page.module.css";
import { getDictionary } from "../../i18n";
import { Locale } from "../../i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  const WHATSAPP_NUMBER = "573017836467";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20buceo%20en%20Taganga`;
  const INSTAGRAM_LINK = "https://www.instagram.com/siedivingandadventure/";

  return (
    <main>
      {/* Floating WhatsApp Button */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.floatingWhatsapp} aria-label={dict.hero?.cta_whatsapp || 'WhatsApp'}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.2c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 331.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
      </a>

      {/* (A) ATENCIÓN - HERO SECTION */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
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

      {/* DESTINOS - GALERÍA VISUAL */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
            {lang === "es" ? "Nuestros Destinos Destacados" : "Our Featured Destinations"}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            {lang === "es" ? "Desde arrecifes de coral en el Caribe hasta expediciones pelágicas en el Pacífico." : "From coral reefs in the Caribbean to pelagic expeditions in the Pacific."}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <a href={`/${lang}/destinos/malpelo`} style={{ display: 'block', textDecoration: 'none', borderRadius: '15px', overflow: 'hidden', position: 'relative', height: '300px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/img-239db711.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} className="hover-zoom"></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <span style={{ background: 'var(--color-primary)', color: 'black', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'inline-block' }}>Pacífico</span>
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Malpelo</h3>
                <p style={{ color: '#ccc', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{lang === "es" ? "Tiburones Martillo · Vida a Bordo" : "Hammerheads · Liveaboard"}</p>
              </div>
            </a>
            
            <a href={`/${lang}/destinos/providencia`} style={{ display: 'block', textDecoration: 'none', borderRadius: '15px', overflow: 'hidden', position: 'relative', height: '300px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/img-860a4676.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} className="hover-zoom"></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <span style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'inline-block' }}>Caribe</span>
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Providencia</h3>
                <p style={{ color: '#ccc', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{lang === "es" ? "Arrecife · Reserva UNESCO" : "Reef · UNESCO Reserve"}</p>
              </div>
            </a>

            <a href={`/${lang}/destinos/gorgona`} style={{ display: 'block', textDecoration: 'none', borderRadius: '15px', overflow: 'hidden', position: 'relative', height: '300px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/images/img-f0b2070e.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} className="hover-zoom"></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <span style={{ background: 'var(--color-primary)', color: 'black', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'inline-block' }}>Pacífico</span>
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Gorgona</h3>
                <p style={{ color: '#ccc', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{lang === "es" ? "Ballenas · Vida a Bordo · Parque Nacional" : "Whales · Liveaboard · National Park"}</p>
              </div>
            </a>

            <a href={`/${lang}/destinos/santa-marta`} style={{ display: 'block', textDecoration: 'none', borderRadius: '15px', overflow: 'hidden', position: 'relative', height: '300px' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1586398660697-d4a1f4f56f93?w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease' }} className="hover-zoom"></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <span style={{ background: 'var(--color-secondary)', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', display: 'inline-block' }}>Caribe</span>
                <h3 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Santa Marta</h3>
                <p style={{ color: '#ccc', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{lang === "es" ? "Taganga · Vida Marina" : "Taganga · Marine Life"}</p>
              </div>
            </a>
          </div>

        </div>
      </section>

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
