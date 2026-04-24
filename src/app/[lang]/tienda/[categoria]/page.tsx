import Link from "next/link";
import { getDictionary, Locale } from "../../../../i18n";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { products } from "../../../../data/products";
import ProductCard from "../../../../components/ProductCard";

const CATEGORIES = ["reguladores", "bcd", "mascaras", "aletas", "computadores", "trajes-neopreno", "accesorios"] as const;
const LANGS = ["es", "en", "fr", "de", "ja", "zh"] as const;

export async function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    CATEGORIES.map((categoria) => ({ lang, categoria }))
  );
}

export default async function TiendaCategoriaPage({ params }: { params: Promise<{ lang: string, categoria: string }> }) {
  const { lang, categoria } = await params;
  const dict = await getDictionary(lang as Locale);
  const isEs = lang === "es";

  const categoryProducts = products.filter(p => p.category === categoria);

  // Mapeo de categorías a títulos y descripciones SEO amigables
  const categoryData: Record<string, { title: string, desc: string, img: string }> = {
    "reguladores": {
      title: dict.shop?.regulators || "Reguladores",
      desc: isEs ? "Descubre nuestra selección de reguladores de buceo de alto rendimiento para aguas frías y cálidas." : "Discover our selection of high-performance scuba regulators for cold and warm waters.",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
    },
    "bcd": {
      title: dict.shop?.bcd || "Chalecos (BCD)",
      desc: isEs ? "Encuentra el BCD perfecto para tu estilo de buceo. Chalecos tipo jacket, alas y de viaje." : "Find the perfect BCD for your diving style. Jacket style, wings and travel BCDs.",
      img: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=800&q=80"
    },
    "mascaras": {
      title: dict.shop?.masks || "Máscaras",
      desc: isEs ? "Máscaras de buceo de silicona hipoalergénica con ajuste perfecto. Variedad de colores y estilos." : "Hypoallergenic silicone diving masks with a perfect fit. Variety of colors and styles.",
      img: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=800&q=80"
    },
    "aletas": {
      title: dict.shop?.fins || "Aletas",
      desc: isEs ? "Aletas de buceo para máxima propulsión. Opciones de talón abierto para escarpines y cerradas." : "Scuba fins for maximum propulsion. Open heel options for booties and full foot fins.",
      img: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=800&q=80"
    },
    "computadores": {
      title: dict.shop?.computers || "Computadores",
      desc: isEs ? "Computadores de buceo avanzados para monitorear tu profundidad, tiempo y límites sin descompresión." : "Advanced dive computers to monitor your depth, time, and no-decompression limits.",
      img: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=800&q=80"
    },
    "trajes-neopreno": {
      title: dict.shop?.wetsuits || "Trajes de Neopreno",
      desc: isEs ? "Trajes de neopreno de 3mm, 5mm y 7mm para bucear cómodamente en cualquier océano." : "3mm, 5mm and 7mm wetsuits to dive comfortably in any ocean.",
      img: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=800&q=80"
    },
    "accesorios": {
      title: dict.shop?.accessories || "Accesorios",
      desc: isEs ? "Todo lo que necesitas: linternas, boyas SMB, cuchillos, pizarras y repuestos." : "Everything you need: torches, SMBs, knives, slates and spare parts.",
      img: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=800&q=80"
    }
  };

  const currentCategory = categoryData[categoria] || {
    title: categoria.toUpperCase(),
    desc: isEs ? "Catálogo de productos para buceo." : "Scuba diving product catalog.",
    img: "https://images.unsplash.com/photo-1510414696678-2415ea84792e?w=800&q=80"
  };

  return (
    <main style={{ minHeight: "100vh", paddingBottom: "4rem" }}>
      {/* Hero Section */}
      <section style={{ position: "relative", height: "40vh", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <Image 
          src={currentCategory.img} 
          alt={currentCategory.title} 
          fill 
          style={{ objectFit: "cover", zIndex: 0 }} 
          priority
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
          <div style={{ marginBottom: "1rem", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
            <Link href={`/${lang}`} style={{ color: "inherit", textDecoration: "none" }}>{isEs ? "Inicio" : "Home"}</Link>
            <ChevronRight size={14} />
            <Link href={`/${lang}/tienda`} style={{ color: "inherit", textDecoration: "none" }}>{isEs ? "Tienda" : "Shop"}</Link>
            <ChevronRight size={14} />
            <span style={{ color: "white" }}>{currentCategory.title}</span>
          </div>
          <h1 className="text-gradient" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{currentCategory.title}</h1>
          <p style={{ color: "white", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>{currentCategory.desc}</p>
        </div>
      </section>

      {/* Grid de Productos */}
      <section style={{ maxWidth: "1200px", margin: "4rem auto 0", padding: "0 2rem" }}>
        {categoryProducts.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} isEs={isEs} />
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: "3rem", textAlign: "center", borderStyle: "dashed", borderColor: "rgba(0, 229, 255, 0.3)" }}>
            <ShoppingCart size={48} style={{ color: "var(--color-text-muted)", margin: "0 auto 1.5rem" }} />
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              {isEs ? "Catálogo en Construcción" : "Catalog Under Construction"}
            </h2>
            <p style={{ color: "var(--color-text-muted)", maxWidth: "500px", margin: "0 auto 2rem" }}>
              {isEs 
                ? `Estamos actualizando nuestro inventario de ${currentCategory.title.toLowerCase()} basados en el Catálogo Público 2026. ¡Vuelve pronto para ver los nuevos productos!` 
                : `We are updating our inventory of ${currentCategory.title.toLowerCase()} based on the 2026 Public Catalog. Check back soon for new products!`}
            </p>
            <a 
              href={`https://wa.me/573017836467?text=${encodeURIComponent(isEs ? `Hola, quiero cotizar equipos de la categoría: ${currentCategory.title}` : `Hi, I want a quote for: ${currentCategory.title}`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              {isEs ? "Cotizar por WhatsApp" : "Quote via WhatsApp"}
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
