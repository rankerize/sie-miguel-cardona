"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  label: string;
  desc: string;
  cta: string;
};

export default function CategoryCard({ href, icon, label, desc, cta }: Props) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        className="glass-panel"
        style={{ padding: "2rem", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", transition: "transform 0.3s ease, border-color 0.3s ease" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"; }}
      >
        <div style={{ color: "var(--color-primary)", marginBottom: "1rem" }}>{icon}</div>
        <h2 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem" }}>{label}</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", flexGrow: 1 }}>{desc}</p>
        <div style={{ color: "var(--color-secondary)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "bold" }}>
          {cta} <ChevronRight size={16} />
        </div>
      </div>
    </Link>
  );
}
