"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Waves, BookOpen, Compass, MapPin, Anchor } from "lucide-react";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  lang: string;
  dict: {
    courses: string;
    open_water: string;
    advanced: string;
    fun_dives: string;
    destinations: string;
    blog: string;
  };
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [destsOpen, setDestsOpen] = useState(false);
  const [funDivesOpen, setFunDivesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const destsRef = useRef<HTMLLIElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const funDivesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setCoursesOpen(false);
      if (destsRef.current && !destsRef.current.contains(e.target as Node)) setDestsOpen(false);
      if (funDivesRef.current && !funDivesRef.current.contains(e.target as Node)) setFunDivesOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);



  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href={`/${lang}`} className={styles.logo}>
          <Waves size={26} strokeWidth={2.5} />
          <span>SIE <strong>DIVING</strong></span>
        </Link>

        {/* Desktop menu */}
        <ul className={styles.desktopMenu}>
          {/* Cursos dropdown */}
          <li
            ref={dropdownRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => !menuOpen && setCoursesOpen(true)}
            onMouseLeave={() => !menuOpen && setCoursesOpen(false)}
          >
            <button
              className={styles.navBtn}
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
            >
              {dict.courses}
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${coursesOpen ? styles.chevronOpen : ""}`}
              />
            </button>
            {coursesOpen && (
              <div className={styles.dropdown}>
                <Link
                  href={`/${lang}/cursos-padi/open-water`}
                  className={styles.dropdownItem}
                  onClick={() => setCoursesOpen(false)}
                >
                  <span className={styles.dropdownIcon}>
                    <BookOpen size={20} />
                  </span>
                  <div>
                    <div className={styles.dropdownItemTitle}>{dict.open_water}</div>
                    <div className={styles.dropdownItemDesc}>
                      {lang === "es"
                        ? "Certificación PADI • Profundidad 18m • 4 inmersiones"
                        : "PADI Certification • 18m depth • 4 dives"}
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/${lang}/cursos-padi/advanced`}
                  className={styles.dropdownItem}
                  onClick={() => setCoursesOpen(false)}
                >
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}>
                    <Compass size={20} />
                  </span>
                  <div>
                    <div className={styles.dropdownItemTitle}>{dict.advanced}</div>
                    <div className={styles.dropdownItemDesc}>
                      {lang === "es"
                        ? "Certificación PADI • Profundidad 30m • 5 aventuras"
                        : "PADI Certification • 30m depth • 5 adventures"}
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </li>

          {/* Fun Dives dropdown */}
          <li
            ref={funDivesRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => !menuOpen && setFunDivesOpen(true)}
            onMouseLeave={() => !menuOpen && setFunDivesOpen(false)}
          >
            <button
              className={styles.navBtn}
              onClick={() => setFunDivesOpen((v) => !v)}
              aria-expanded={funDivesOpen}
            >
              {dict.fun_dives}
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${funDivesOpen ? styles.chevronOpen : ""}`}
              />
            </button>
            {funDivesOpen && (
              <div className={styles.dropdown}>
                <Link href={`/${lang}/destinos/providencia`} className={styles.dropdownItem} onClick={() => setFunDivesOpen(false)}>
                  <span className={styles.dropdownIcon}><Anchor size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Providencia ✦</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Reserva UNESCO · Arrecife coralino" : "UNESCO Reserve · Coral reef"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/gorgona`} className={styles.dropdownItem} onClick={() => setFunDivesOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><Anchor size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Gorgona ✦</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Ballenas · Tiburones · Biodiversidad" : "Whales · Sharks · Biodiversity"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/malpelo`} className={styles.dropdownItem} onClick={() => setFunDivesOpen(false)}>
                  <span className={styles.dropdownIcon}><Anchor size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Malpelo ✦</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Patrimonio UNESCO · Tiburones martillo" : "UNESCO Heritage · Hammerhead sharks"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.dropdownItem} onClick={() => setFunDivesOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><Anchor size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Isla Fuerte ✦</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Coral virgen · Aguas cristalinas" : "Pristine coral · Crystal waters"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/santa-marta`} className={styles.dropdownItem} onClick={() => setFunDivesOpen(false)}>
                  <span className={styles.dropdownIcon}><Anchor size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Taganga ✦</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Arrecifes · Tortugas · Caribe colombiano" : "Reefs · Turtles · Colombian Caribbean"}</div>
                  </div>
                </Link>
              </div>
            )}
          </li>

          {/* Expeditions dropdown */}
          <li
            ref={destsRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => setDestsOpen(true)}
            onMouseLeave={() => setDestsOpen(false)}
          >
            <Link
              href={`/${lang}/expediciones`}
              className={styles.navBtn}
              onClick={() => setDestsOpen(false)}
            >
              {dict.destinations}
              <ChevronDown size={16} className={`${styles.chevron} ${destsOpen ? styles.chevronOpen : ""}`} />
            </Link>
            {destsOpen && (
              <div className={styles.dropdown}>
                <Link href={`/${lang}/destinos/santa-marta`} className={styles.dropdownItem} onClick={() => setDestsOpen(false)}>
                  <span className={styles.dropdownIcon}><MapPin size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Santa Marta</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Taganga · Coral · Gastronomía Caribeña" : "Taganga · Coral · Caribbean Gastronomy"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/providencia`} className={styles.dropdownItem} onClick={() => setDestsOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><MapPin size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Providencia</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Reserva UNESCO · Rondón · Cangrejo Negro" : "UNESCO Reserve · Rondón · Black Crab"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/malpelo`} className={styles.dropdownItem} onClick={() => setDestsOpen(false)}>
                  <span className={styles.dropdownIcon}><MapPin size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Malpelo</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Vida a Bordo · Tiburones Martillo" : "Liveaboard · Hammerhead Sharks"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/gorgona`} className={styles.dropdownItem} onClick={() => setDestsOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><MapPin size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Gorgona</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Vida a Bordo · Ballenas · Parque Nacional" : "Liveaboard · Whales · National Park"}</div>
                  </div>
                </Link>
                <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.dropdownItem} onClick={() => setDestsOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><MapPin size={20} /></span>
                  <div>
                    <div className={styles.dropdownItemTitle}>Isla Fuerte</div>
                    <div className={styles.dropdownItemDesc}>{lang === "es" ? "Coral virgen · Langosta fresca · Sin carros" : "Pristine coral · Fresh lobster · No cars"}</div>
                  </div>
                </Link>
              </div>
            )}
          </li>

          {/* Noticias / Blog */}
          <li>
            <Link href={`/${lang}/noticias`} className={styles.navBtn}>
              {dict.blog || "Noticias"}
            </Link>
          </li>
        </ul>

        {/* Lang switcher + mobile toggle */}
        <div className={styles.rightSide}>
          <LanguageSwitcher lang={lang} />

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileSection}>
            <div className={styles.mobileSectionLabel}>{dict.courses}</div>
            <Link
              href={`/${lang}/cursos-padi/open-water`}
              className={styles.mobileItem}
              onClick={() => setMenuOpen(false)}
            >
              <BookOpen size={18} />
              {dict.open_water}
            </Link>
            <Link
              href={`/${lang}/cursos-padi/advanced`}
              className={styles.mobileItem}
              onClick={() => setMenuOpen(false)}
            >
              <Compass size={18} />
              {dict.advanced}
            </Link>
          </div>
          <div className={styles.mobileSection}>
            <div className={styles.mobileSectionLabel}>{dict.fun_dives}</div>
            <Link href={`/${lang}/destinos/providencia`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Anchor size={18} />Providencia ✦
            </Link>
            <Link href={`/${lang}/destinos/gorgona`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Anchor size={18} />Gorgona ✦
            </Link>
            <Link href={`/${lang}/destinos/malpelo`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Anchor size={18} />Malpelo ✦
            </Link>
            <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Anchor size={18} />Isla Fuerte ✦
            </Link>
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Anchor size={18} />Taganga ✦
            </Link>
          </div>
          <div className={styles.mobileSection}>
            <Link 
              href={`/${lang}/expediciones`} 
              className={styles.mobileSectionLabel} 
              style={{ display: 'block', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              {dict.destinations}
            </Link>
            <Link href={`/${lang}/destinos/santa-marta`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <MapPin size={18} />Santa Marta
            </Link>
            <Link href={`/${lang}/destinos/providencia`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <MapPin size={18} />Providencia
            </Link>
            <Link href={`/${lang}/destinos/malpelo`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <MapPin size={18} />Malpelo
            </Link>
            <Link href={`/${lang}/destinos/gorgona`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <MapPin size={18} />Gorgona
            </Link>
            <Link href={`/${lang}/destinos/isla-fuerte`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <MapPin size={18} />Isla Fuerte
            </Link>
          </div>
          <div className={styles.mobileSection}>
            <Link
              href={`/${lang}/noticias`}
              className={styles.mobileItem}
              onClick={() => setMenuOpen(false)}
            >
              📰 {dict.blog || "Noticias"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
