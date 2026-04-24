export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // ISO YYYY-MM-DD
  category: string;
  readingTime: number;   // minutes
  coverImage: string;    // path under /public
  content: string;       // HTML string
  keywords: string[];
}

export const posts: Post[] = [
  {
    slug: "mejores-temporadas-buceo-colombia",
    title: "Mejores Temporadas para Hacer Buceo en Colombia",
    excerpt: "Descubre cuándo viajar a Taganga, Providencia, Isla Fuerte, Gorgona y Malpelo para tener la mejor visibilidad, fauna y condiciones del mar.",
    date: "2026-04-01",
    category: "Guías de Viaje",
    readingTime: 7,
    coverImage: "/blog/temporadas-buceo.jpg",
    keywords: ["buceo colombia temporada", "cuando bucear en colombia", "buceo taganga temporada", "mejor epoca buceo colombia"],
    content: `
      <h2>¿Cuándo es la mejor época para bucear en Colombia?</h2>
      <p>Colombia tiene costas en el Caribe y el Pacífico, lo que crea condiciones muy distintas según el destino. Aquí te explicamos mes a mes cuándo visitar cada sitio.</p>

      <h3>Taganga y Santa Marta (Caribe)</h3>
      <p>La temporada de mayor visibilidad en Taganga va de <strong>diciembre a abril</strong> y de <strong>julio a agosto</strong>. El mar está en calma y la visibilidad puede superar los 20 metros. Estas son también las épocas de mayor demanda, por lo que reservar con anticipación es fundamental.</p>
      <ul>
        <li><strong>Dic–Abr:</strong> Temporada alta. Vientos alisos, agua fría y clara, tortugas marinas frecuentes.</li>
        <li><strong>Jul–Ago:</strong> Segunda temporada alta. Excelente para cursos Open Water.</li>
        <li><strong>May–Jun / Sep–Nov:</strong> Aguas más cálidas, menos viento. Buena opción para buzos que prefieren menos turistas.</li>
      </ul>

      <h3>Providencia (Caribe)</h3>
      <p>La isla de Providencia tiene una de las barreras de coral más grandes del Caribe. La mejor época para bucear es de <strong>enero a mayo</strong>, cuando la visibilidad puede llegar a 30 metros. Evita los meses de septiembre y octubre, que coinciden con la temporada de huracanes.</p>

      <h3>Isla Fuerte (Caribe)</h3>
      <p>Esta joya escondida entre Cartagena y el Golfo de Morrosquillo es mejor visitarla entre <strong>diciembre y abril</strong>. Las aguas calmadas permiten ver tortugas verdes, peces loro y enormes esponjas de barril.</p>

      <h3>Gorgona (Pacífico)</h3>
      <p>La Isla Gorgona es un parque nacional con buceo de clase mundial. La temporada de <strong>ballenas jorobadas (julio–octubre)</strong> es el momento más esperado: podrás bucear mientras escuchas sus cantos. La visibilidad es menor que en el Caribe, pero la megafauna compensa con creces.</p>

      <h3>Malpelo (Pacífico)</h3>
      <p>Malpelo es para buceadores experimentados. Las expediciones se realizan todo el año, pero los meses de <strong>febrero–abril y junio–septiembre</strong> concentran la mayor cantidad de tiburones martillo y tiburones ballena. Solo se llega en embarcación desde Buenaventura (36 horas).</p>

      <h2>Consejos para planificar tu expedición de buceo en Colombia</h2>
      <ol>
        <li>Reserva con al menos 4 semanas de anticipación en temporada alta.</li>
        <li>Consulta el estado de tu certificación PADI antes de viajar.</li>
        <li>Para Malpelo, necesitas al menos 50 inmersiones registradas.</li>
        <li>Contrata un operador local certificado — SIE DIVING opera en todos estos destinos.</li>
      </ol>
    `
  },
  {
    slug: "buceo-providencia-guia-completa",
    title: "Buceo en Providencia: Guía Completa para Buceadores",
    excerpt: "Todo lo que necesitas saber para planificar tu expedición de buceo en Providencia, Colombia: sitios, logística, alojamiento y qué esperar bajo el agua.",
    date: "2026-04-10",
    category: "Destinos",
    readingTime: 9,
    coverImage: "/blog/providencia-buceo.jpg",
    keywords: ["buceo providencia", "providencia colombia buceo", "expedicion providencia", "bucear en providencia"],
    content: `
      <h2>Providencia: El Caribe Que Pocos Conocen</h2>
      <p>A 750 km al noroeste de Cartagena, Providencia alberga la <strong>tercera barrera de coral más grande del mundo</strong>. Sus aguas cristalinas, la ausencia de turismo masivo y la increíble biodiversidad la convierten en el destino de buceo más exclusivo de Colombia.</p>

      <h3>Principales sitios de buceo en Providencia</h3>
      <ul>
        <li><strong>La Pared:</strong> Una pared vertical de coral que desciende hasta 40 metros. Ideal para buceadores Advanced.</li>
        <li><strong>El Pináculo:</strong> Montículo de coral rodeado de cardúmenes de peces tropicales y langostas.</li>
        <li><strong>Felipe's Place:</strong> Sitio tranquilo, perfecto para buceadores Open Water. Tortugas verdes y rayas.</li>
      </ul>

      <h3>Cómo llegar</h3>
      <p>El único acceso es en avión desde Bogotá o San Andrés (vuelos diarios con Satena). SIE DIVING coordina la logística completa de la expedición.</p>
    `
  },
  {
    slug: "certificacion-padi-open-water-taganga",
    title: "Cómo Obtener tu Certificación PADI Open Water en Taganga",
    excerpt: "Paso a paso para sacar el curso de buceo más popular del mundo en Taganga, Santa Marta. Duración, precio, qué incluye y por qué Taganga es el mejor sitio de Colombia.",
    date: "2026-04-18",
    category: "Cursos PADI",
    readingTime: 6,
    coverImage: "/blog/open-water-taganga.jpg",
    keywords: ["curso padi open water taganga", "certificacion padi colombia", "buceo taganga precio", "aprender buceo colombia"],
    content: `
      <h2>PADI Open Water Diver: Tu Primera Certificación</h2>
      <p>El PADI Open Water Diver es el punto de partida para cualquier buceador. En SIE DIVING lo completamos en <strong>3 a 5 días</strong> en las aguas de Taganga, Santa Marta.</p>

      <h3>¿Qué incluye el curso?</h3>
      <ul>
        <li>Material de estudio PADI (e-learning o presencial)</li>
        <li>Todo el equipo (BCD, regulador, traje húmedo, máscara, aletas)</li>
        <li>Sesiones en piscina para practicar habilidades básicas</li>
        <li>4 inmersiones en el mar de Taganga con instructor certificado</li>
        <li>Certificación PADI internacional válida de por vida</li>
      </ul>

      <h3>¿Por qué Taganga?</h3>
      <p>Taganga tiene todo lo que un buceador principiante necesita: aguas calmadas, visibilidad de hasta 20 metros, fauna variada y acceso inmediato al mar desde el centro del pueblo. Además, es uno de los destinos más económicos del Caribe para sacar la certificación.</p>
    `
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
