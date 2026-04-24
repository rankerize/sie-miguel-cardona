"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, BookOpen, Compass, MapPin, ShoppingBag, Wind, Shirt, Eye, Palmtree, Watch, Box } from "lucide-react";
import styles from "./Navbar.module.css";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  lang: string;
  dict: {
    courses: string;
    open_water: string;
    advanced: string;
    destinations: string;
    shop?: string;
    blog: string;
  };
  shopDict?: {
    regulators: string;
    bcd: string;
    masks: string;
    fins: string;
    computers: string;
    wetsuits: string;
    accessories: string;
  };
};

export default function Navbar({ lang, dict, shopDict }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [destsOpen, setDestsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const destsRef = useRef<HTMLLIElement>(null);
  const coursesRef = useRef<HTMLLIElement>(null);
  const shopRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target as Node)) setCoursesOpen(false);
      if (destsRef.current && !destsRef.current.contains(e.target as Node)) setDestsOpen(false);
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) setShopOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const shopLabel = dict.shop || "Tienda";
  const defaultShopDict = shopDict || {
    regulators: "Reguladores",
    bcd: "Chalecos (BCD)",
    masks: "Máscaras",
    fins: "Aletas",
    computers: "Computadores",
    wetsuits: "Trajes",
    accessories: "Accesorios"
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href={`/${lang}`} className={styles.logo}>
          <Image 
            src="/logo-sie.png" 
            alt="SIE Diving" 
            width={215} 
            height={85} 
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className={styles.desktopMenu}>
          
          {/* Expeditions dropdown */}
          <li
            ref={destsRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => !menuOpen && setDestsOpen(true)}
            onMouseLeave={() => !menuOpen && setDestsOpen(false)}
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

          {/* Cursos dropdown */}
          <li
            ref={coursesRef}
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

          {/* Tienda dropdown */}
          <li
            ref={shopRef}
            className={styles.dropdownWrapper}
            onMouseEnter={() => !menuOpen && setShopOpen(true)}
            onMouseLeave={() => !menuOpen && setShopOpen(false)}
          >
            <Link
              href={`/${lang}/tienda`}
              className={styles.navBtn}
              onClick={() => setShopOpen(false)}
            >
              {shopLabel}
              <ChevronDown size={16} className={`${styles.chevron} ${shopOpen ? styles.chevronOpen : ""}`} />
            </Link>
            {shopOpen && (
              <div className={styles.dropdown}>
                <Link href={`/${lang}/tienda/reguladores`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={styles.dropdownIcon}><Wind size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.regulators}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/bcd`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><Shirt size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.bcd}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/mascaras`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={styles.dropdownIcon}><Eye size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.masks}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/aletas`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><Palmtree size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.fins}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/computadores`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={styles.dropdownIcon}><Watch size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.computers}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/trajes-neopreno`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={`${styles.dropdownIcon} ${styles.dropdownIconDeep}`}><Shirt size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.wetsuits}</div></div>
                </Link>
                <Link href={`/${lang}/tienda/accesorios`} className={styles.dropdownItem} onClick={() => setShopOpen(false)}>
                  <span className={styles.dropdownIcon}><Box size={20} /></span>
                  <div><div className={styles.dropdownItemTitle}>{defaultShopDict.accessories}</div></div>
                </Link>
              </div>
            )}
          </li>

          {/* Noticias / Blog */}
          <li>
            <Link href={`/${lang}/noticias`} className={styles.navBtn}>
              {dict.blog || "Blog"}
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
          {/* Mobile Expeditions */}
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

          {/* Mobile Cursos */}
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

          {/* Mobile Tienda */}
          <div className={styles.mobileSection}>
            <Link 
              href={`/${lang}/tienda`} 
              className={styles.mobileSectionLabel} 
              style={{ display: 'block', textDecoration: 'none' }}
              onClick={() => setMenuOpen(false)}
            >
              🛍️ {shopLabel}
            </Link>
            <Link href={`/${lang}/tienda/reguladores`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Wind size={18} />{defaultShopDict.regulators}
            </Link>
            <Link href={`/${lang}/tienda/bcd`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Shirt size={18} />{defaultShopDict.bcd}
            </Link>
            <Link href={`/${lang}/tienda/mascaras`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Eye size={18} />{defaultShopDict.masks}
            </Link>
            <Link href={`/${lang}/tienda/aletas`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Palmtree size={18} />{defaultShopDict.fins}
            </Link>
            <Link href={`/${lang}/tienda/computadores`} className={styles.mobileItem} onClick={() => setMenuOpen(false)}>
              <Watch size={18} />{defaultShopDict.computers}
            </Link>
          </div>

          {/* Mobile Blog */}
          <div className={styles.mobileSection}>
            <Link
              href={`/${lang}/noticias`}
              className={styles.mobileItem}
              onClick={() => setMenuOpen(false)}
            >
              📰 {dict.blog || "Blog"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
