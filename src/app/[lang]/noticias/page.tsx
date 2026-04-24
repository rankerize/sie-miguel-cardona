import Link from "next/link";
import { posts } from "../../../lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias de Buceo en Colombia | Blog SIE DIVING",
  description: "Artículos, guías y consejos sobre buceo en Colombia: mejores temporadas, destinos, cursos PADI y expediciones. Blog oficial de SIE DIVING AND ADVENTURE.",
  alternates: {
    canonical: "https://siediving.com/es/noticias",
  },
  openGraph: {
    title: "Noticias de Buceo en Colombia | Blog SIE DIVING",
    description: "Guías de viaje, temporadas y destinos de buceo en Colombia.",
    url: "https://siediving.com/es/noticias",
    siteName: "SIE DIVING AND ADVENTURE",
    type: "website",
  },
};

const schemaBlog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog SIE DIVING – Buceo en Colombia",
  "url": "https://siediving.com/es/noticias",
  "description": "Guías, consejos y noticias sobre buceo en Colombia.",
  "publisher": {
    "@type": "Organization",
    "name": "SIE DIVING AND ADVENTURE",
    "url": "https://siediving.com"
  }
};

export default function NoticiasPage() {
  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "6rem", paddingBottom: "4rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlog) }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ color: "var(--color-primary)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
            Blog · Noticias
          </p>
          <h1 className="text-gradient" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>
            Noticias de Buceo en Colombia
          </h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "1.15rem", maxWidth: "650px", margin: "0 auto" }}>
            Guías de viaje, mejores temporadas, destinos y consejos de buceo de nuestros instructores PADI.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
        }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/es/noticias/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="glass-panel"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,229,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {/* Cover placeholder */}
                <div style={{
                  height: "200px",
                  background: "linear-gradient(135deg, rgba(0,229,255,0.2), rgba(0,100,150,0.4))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                }}>
                  🤿
                </div>

                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      background: "rgba(0,229,255,0.1)",
                      borderRadius: "50px",
                      padding: "0.25rem 0.75rem",
                      letterSpacing: "0.05em",
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {post.readingTime} min lectura
                    </span>
                  </div>

                  <h2 style={{ color: "white", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                      {new Date(post.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span style={{ color: "var(--color-primary)", fontSize: "0.9rem", fontWeight: 700 }}>
                      Leer →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
