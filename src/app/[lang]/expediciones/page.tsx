import { getDictionary, Locale } from "../../../i18n";
import ExpedicionesClient from "./ExpedicionesClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEs = lang === "es";
  return {
    title: isEs
      ? "Expediciones de Buceo en Colombia | SIE DIVING"
      : "Scuba Diving Expeditions in Colombia | SIE DIVING",
    description: isEs
      ? "Descubre Providencia, Isla Fuerte, Malpelo, Gorgona y Taganga. Los mejores destinos de buceo en Colombia con SIE DIVING."
      : "Discover Providencia, Isla Fuerte, Malpelo, Gorgona and Taganga. The best diving destinations in Colombia with SIE DIVING.",
  };
}

export default async function ExpedicionesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  await getDictionary(lang as Locale);
  return <ExpedicionesClient lang={lang} />;
}
