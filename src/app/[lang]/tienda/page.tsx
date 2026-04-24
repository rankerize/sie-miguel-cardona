import { getDictionary, Locale } from "../../../i18n";
import { ShoppingBag, Wind, Shirt, Eye, Palmtree, Watch, Box } from "lucide-react";
import CategoryCard from "../../../components/CategoryCard";

export default async function TiendaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const isEs = lang === "es";

  const categories = [
    { id: "reguladores", icon: <Wind size={32} />, label: dict.shop?.regulators || "Reguladores", desc: isEs ? "Sistemas de respiración de alto rendimiento" : "High performance breathing systems" },
    { id: "bcd", icon: <Shirt size={32} />, label: dict.shop?.bcd || "Chalecos (BCD)", desc: isEs ? "Control de flotabilidad seguro y cómodo" : "Safe and comfortable buoyancy control" },
    { id: "mascaras", icon: <Eye size={32} />, label: dict.shop?.masks || "Máscaras", desc: isEs ? "Visión cristalina bajo el agua" : "Crystal clear underwater vision" },
    { id: "aletas", icon: <Palmtree size={32} />, label: dict.shop?.fins || "Aletas", desc: isEs ? "Propulsión eficiente con mínimo esfuerzo" : "Efficient propulsion with minimal effort" },
    { id: "computadores", icon: <Watch size={32} />, label: dict.shop?.computers || "Computadores", desc: isEs ? "Monitoreo preciso de tus inmersiones" : "Precise dive monitoring" },
    { id: "trajes-neopreno", icon: <Shirt size={32} />, label: dict.shop?.wetsuits || "Trajes", desc: isEs ? "Protección térmica para cualquier temperatura" : "Thermal protection for any temperature" },
    { id: "accesorios", icon: <Box size={32} />, label: dict.shop?.accessories || "Accesorios", desc: isEs ? "Luces, cuchillos, boyas y más" : "Lights, knives, SMBs and more" },
  ];

  const cta = isEs ? "Ver catálogo" : "View catalog";

  return (
    <main style={{ padding: "8rem 2rem 4rem", maxWidth: "1200px", margin: "0 auto", minHeight: "100vh" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <ShoppingBag size={48} style={{ color: "var(--color-primary)", marginBottom: "1rem" }} />
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }} className="text-gradient">
          {isEs ? "Tienda de Buceo" : "Dive Shop"}
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          {isEs ? "Equipamiento profesional para todas tus aventuras submarinas. Explora nuestro catálogo." : "Professional equipment for all your underwater adventures. Explore our catalog."}
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            href={`/${lang}/tienda/${cat.id}`}
            icon={cat.icon}
            label={cat.label}
            desc={cat.desc}
            cta={cta}
          />
        ))}
      </div>
    </main>
  );
}
