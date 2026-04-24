import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "../../../../lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog SIE DIVING`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `https://siediving.com/es/noticias/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://siediving.com/es/noticias/${slug}`,
      type: "article",
      publishedTime: post.date,
      siteName: "SIE DIVING AND ADVENTURE",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "SIE DIVING AND ADVENTURE" },
    publisher: {
      "@type": "Organization",
      name: "SIE DIVING AND ADVENTURE",
      url: "https://siediving.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://siediving.com/es/noticias/${slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh", paddingTop: "6rem", paddingBottom: "5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <div className="container" style={{ maxWidth: "780px" }}>
        {/* Breadcrumb */}
        <nav style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          <a href="/es" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Inicio</a>
          {" · "}
          <a href="/es/noticias" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Noticias</a>
          {" · "}
          <span>{post.title}</span>
        </nav>

        {/* Meta */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "0.75rem", fontWeight: 700, color: "var(--color-primary)",
            background: "rgba(0,229,255,0.1)", borderRadius: "50px", padding: "0.25rem 0.75rem",
          }}>
            {post.category}
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            {new Date(post.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            ⏱ {post.readingTime} min lectura
          </span>
        </div>

        {/* Title */}
        <h1 className="text-gradient" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "1.5rem", lineHeight: 1.3 }}>
          {post.title}
        </h1>

        <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", borderLeft: "3px solid var(--color-primary)", paddingLeft: "1.25rem", marginBottom: "3rem", lineHeight: 1.7 }}>
          {post.excerpt}
        </p>

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: "#d0d0d0",
            lineHeight: 1.85,
            fontSize: "1.05rem",
          }}
        />

        {/* CTA */}
        <div className="glass-panel" style={{ marginTop: "4rem", textAlign: "center", padding: "2.5rem", borderColor: "rgba(0,229,255,0.2)" }}>
          <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "0.75rem" }}>¿Listo para bucear en Colombia?</h3>
          <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
            Reserva tu expedición con SIE DIVING — cupos limitados.
          </p>
          <a
            href={`https://wa.me/573017836467?text=Hola,%20le%C3%AD%20el%20art%C3%ADculo%20sobre%20${encodeURIComponent(post.title)}%20y%20quiero%20m%C3%A1s%20info`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
