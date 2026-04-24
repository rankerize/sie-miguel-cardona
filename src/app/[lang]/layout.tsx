import type { Metadata } from "next";
import "../globals.css";
import { i18n, type Locale } from "../../i18n";
import { getDictionary } from "../../i18n";
import Navbar from "../../components/Navbar";

const SITE_URL = "https://siediving.com";
const LOCALES = i18n.locales; // ['es','en','fr','de','zh','ja']

/**
 * Generates hreflang alternate links for a given path.
 * Works with static export (no server-side headers needed).
 * Each page component that needs per-route hreflang should call
 * generateHreflang with its own path suffix.
 */
export function generateHreflang(pathSuffix: string = ""): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of LOCALES) {
    alternates[locale] = `${SITE_URL}/${locale}${pathSuffix}`;
  }
  alternates["x-default"] = `${SITE_URL}/es${pathSuffix}`;
  return alternates;
}

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: generateHreflang(),
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return (
    <>
      <Navbar lang={lang} dict={dictionary.nav} />
      {children}
    </>
  );
}
