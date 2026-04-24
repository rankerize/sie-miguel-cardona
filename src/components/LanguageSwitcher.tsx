"use client";

import { useState, useRef, useEffect } from "react";
import type { ReactElement } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import styles from "./LanguageSwitcher.module.css";

/* ── Flag SVGs (inline, no extra deps) ── */
const flags: Record<string, ReactElement> = {
  es: (
    // Colombia 🇨🇴
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="22" height="15" role="img" aria-label="Colombia">
      <rect width="900" height="600" fill="#FCD116"/>
      <rect y="300" width="900" height="150" fill="#003893"/>
      <rect y="450" width="900" height="150" fill="#CE1126"/>
    </svg>
  ),
  en: (
    // United Kingdom 🇬🇧
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="15" role="img" aria-label="English">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  ),
  fr: (
    // France 🇫🇷
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="22" height="15" role="img" aria-label="France">
      <rect width="300" height="600" fill="#002395"/>
      <rect x="300" width="300" height="600" fill="#fff"/>
      <rect x="600" width="300" height="600" fill="#ED2939"/>
    </svg>
  ),
  de: (
    // Germany 🇩🇪
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="22" height="15" role="img" aria-label="Germany">
      <rect width="5" height="3" fill="#000"/>
      <rect y="1" width="5" height="2" fill="#D00"/>
      <rect y="2" width="5" height="1" fill="#FFCE00"/>
    </svg>
  ),
  zh: (
    // China 🇨🇳
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="22" height="15" role="img" aria-label="China">
      <rect width="900" height="600" fill="#DE2910"/>
      <polygon points="150,75 180,165 90,105 210,105 120,165" fill="#FFDE00"/>
      <polygon points="270,30 280,60 250,40 290,40 260,60" fill="#FFDE00"/>
      <polygon points="315,75 325,105 295,85 335,85 305,105" fill="#FFDE00"/>
      <polygon points="315,135 325,165 295,145 335,145 305,165" fill="#FFDE00"/>
      <polygon points="270,180 280,210 250,190 290,190 260,210" fill="#FFDE00"/>
    </svg>
  ),
  ja: (
    // Japan 🇯🇵
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="22" height="15" role="img" aria-label="Japan">
      <rect width="900" height="600" fill="#fff"/>
      <circle cx="450" cy="300" r="180" fill="#BC002D"/>
    </svg>
  ),
};

const languageNames: Record<string, { native: string; label: string }> = {
  es: { native: "Español",  label: "Español" },
  en: { native: "English",  label: "English" },
  fr: { native: "Français", label: "Français" },
  de: { native: "Deutsch",  label: "Deutsch" },
  zh: { native: "中文",     label: "中文" },
  ja: { native: "日本語",   label: "日本語" },
};

const allLocales = ["es", "en", "fr", "de", "zh", "ja"];

type Props = { lang: string };

export default function LanguageSwitcher({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchTo = (locale: string) => {
    setOpen(false);
    // Replace /[lang] segment in the current path
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  };

  const current = languageNames[lang] ?? languageNames.es;

  return (
    <div ref={ref} className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Select language"
        id="lang-switcher-btn"
      >
        <span className={styles.flag}>{flags[lang]}</span>
        <span className={styles.label}>{current.native}</span>
        <ChevronDown
          size={14}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>

      {open && (
        <ul className={styles.dropdown} role="listbox" aria-label="Languages">
          {allLocales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === lang}>
              <button
                className={`${styles.option} ${locale === lang ? styles.active : ""}`}
                onClick={() => switchTo(locale)}
              >
                <span className={styles.flag}>{flags[locale]}</span>
                <span className={styles.optionLabel}>{languageNames[locale].native}</span>
                {locale === lang && <span className={styles.check}>✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
