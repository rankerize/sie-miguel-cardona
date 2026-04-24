"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "../data/products";

type Props = {
  product: Product;
  isEs: boolean;
};

export default function ProductCard({ product, isEs }: Props) {
  const waText = isEs
    ? `Hola, quiero cotizar el producto: ${product.name} de la marca ${product.brand}`
    : `Hi, I want a quote for: ${product.name} by ${product.brand}`;
  const waUrl = `https://wa.me/573017836467?text=${encodeURIComponent(waText)}`;

  return (
    <div
      className="glass-panel"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden", transition: "transform 0.3s ease", cursor: "pointer" }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ position: "relative", height: "250px", backgroundColor: "rgba(255,255,255,0.05)" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover", mixBlendMode: "overlay" }}
        />
        {product.isPopular && (
          <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "var(--color-primary)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: "bold" }}>
            {isEs ? "Más Vendido" : "Best Seller"}
          </div>
        )}
        <div style={{ position: "absolute", bottom: "1rem", left: "1rem", backgroundColor: "rgba(0,0,0,0.6)", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.8rem", color: "white", textTransform: "uppercase", letterSpacing: "1px" }}>
          {product.brand}
        </div>
      </div>

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "white" }}>{product.name}</h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem", flexGrow: 1, lineHeight: 1.5 }}>
          {product.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold", color: "var(--color-primary)" }}>
            ${product.price.toLocaleString("es-CO")} <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", fontWeight: "normal" }}>COP</span>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "var(--color-primary)", color: "var(--color-bg)", padding: "0.5rem 1rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <ShoppingCart size={16} />
            {isEs ? "Cotizar" : "Quote"}
          </a>
        </div>
      </div>
    </div>
  );
}
