export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "reguladores" | "bcd" | "mascaras" | "aletas" | "computadores" | "trajes-neopreno" | "accesorios";
  brand: string;
  image: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  // REGULADORES
  {
    id: "reg-1",
    name: "REGULADOR MK2 EVO / R095",
    description: "Diseñado para operación. El caballito de batalla de los centros de buceo. Confiable y duradero.",
    price: 1278800,
    category: "reguladores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    isPopular: true
  },
  {
    id: "reg-2",
    name: "REGULADOR MK11 EVO / C370",
    description: "Diseñado para viajeros. Compacto, ligero y con un rendimiento respiratorio excepcional.",
    price: 2375100,
    category: "reguladores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
  },
  {
    id: "reg-3",
    name: "REGULADOR MK25 EVO / S600",
    description: "La facilidad para respirar es la esencia de este sistema. Máximo rendimiento en cualquier condición.",
    price: 3936000,
    category: "reguladores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
  },

  // BCD (Chalecos)
  {
    id: "bcd-1",
    name: "CHALECO T-ONE",
    description: "Diseño mejorado ideal para renta. Cordura de Nylon de 1000 Deniers interna y externamente.",
    price: 1987400,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80"
  },
  {
    id: "bcd-2",
    name: "CHALECO LEVEL BPI",
    description: "Nylon EndurTex 420 Deniers de alta densidad. Diseño ajustable frontal envolvente y sistema de lastre integrado.",
    price: 3250000,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80",
    isPopular: true
  },
  {
    id: "bcd-3",
    name: "CHALECO HYDROS PRO",
    description: "Un verdadero avance en la comodidad. Monprene ajustable con múltiples puntos de unión. Ganador del premio RED DOT 2016.",
    price: 6248800,
    category: "bcd",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1621217036735-a77c3855ff4b?w=600&q=80"
  },

  // COMPUTADORES
  {
    id: "comp-1",
    name: "COMPUTADOR ALADIN ONE MATRIX",
    description: "Algoritmo ZH-L16, Ajustes Aire/Nitrox. Pila sustituible por el usuario CR2450.",
    price: 2049900,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80"
  },
  {
    id: "comp-2",
    name: "COMPUTADOR LUNA 2.0",
    description: "Pantalla LCD de alto contraste con caracteres grandes y retroiluminación LED brillante. Compatible con Nitrox.",
    price: 3062500,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80",
    isPopular: true
  },
  {
    id: "comp-3",
    name: "COMPUTADOR G3 TI",
    description: "Pantalla a todo color de alto contraste. Batería de litio recargable. Interfaz Bluetooth.",
    price: 4074900,
    category: "computadores",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1610486337583-04b31174092b?w=600&q=80"
  },

  // MÁSCARAS
  {
    id: "mask-1",
    name: "TRINIDAD 3 MASK",
    description: "Diseño elegante sin marco. Disponible en amarillo, azul, rosado, naranja y turquesa.",
    price: 368900,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },
  {
    id: "mask-2",
    name: "CARETA GHOST FRAMELESS",
    description: "Máscara de amplio campo visual y bajo volumen interno. Perfecta para fotografía submarina.",
    price: 374900,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },
  {
    id: "mask-3",
    name: "CARETA ZOOM EVO",
    description: "Sistema de cambio de lentes rápido. Diseño de bajo volumen.",
    price: 469500,
    category: "mascaras",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80",
    isPopular: true
  },
  {
    id: "mask-4",
    name: "EXPLORER MASK",
    description: "Doble lente de vidrio templado, bajo volumen interno y amplio campo visual. Marco reforzado.",
    price: 138800,
    category: "mascaras",
    brand: "Oceans Sub",
    image: "https://images.unsplash.com/photo-1596328325026-6a4a7f058098?w=600&q=80"
  },

  // ALETAS
  {
    id: "fin-1",
    name: "ALETAS JET CLUB",
    description: "Aletas de pie completo. Diseño moderno y de líneas puras.",
    price: 359900,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },
  {
    id: "fin-2",
    name: "ALETAS GO TRAVEL",
    description: "Diseño 100% Monprene ultrarresistente y liviano ideal para viajes.",
    price: 536400,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80",
    isPopular: true
  },
  {
    id: "fin-3",
    name: "ALETAS SEAWING NOVA",
    description: "Mundialmente galardonadas con las últimas innovaciones de diseño hidrodinámico. Más rendimiento con menor esfuerzo.",
    price: 1590300,
    category: "aletas",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },
  {
    id: "fin-4",
    name: "MANTA FINS",
    description: "Aleta de correa ajustable, ideal para renta. No requiere escarpines.",
    price: 224900,
    category: "aletas",
    brand: "Oceans Sub",
    image: "https://images.unsplash.com/photo-1510619865039-4977464a2f45?w=600&q=80"
  },

  // TRAJES NEOPRENO
  {
    id: "suit-1",
    name: "TRAJE ONEFLEX 3MM",
    description: "Traje todo terreno. Neopreno N2S de secado rápido y material antiabrasión en rodillas y caderas.",
    price: 1004800,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80",
    isPopular: true
  },
  {
    id: "suit-2",
    name: "TRAJE SPORT 3MM ENTERIZO",
    description: "Ideal para temperaturas del agua de 21°C a 27°C. Flexibilidad y confort superior.",
    price: 1068000,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80"
  },
  {
    id: "suit-3",
    name: "TRAJE EVERFLEX YULEX 3/2MM",
    description: "100% en neopreno Everflex YULEX, elaborado a partir de procesos ambientalmente amigables.",
    price: 2550500,
    category: "trajes-neopreno",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1513253245468-b7781b29a286?w=600&q=80"
  },

  // ACCESORIOS
  {
    id: "acc-1",
    name: "LINTERNA NOVA LIGHT 250 LED",
    description: "Luz auxiliar de 250 lumen. Modos: 100%, 50% y flash. Robusta y compacta.",
    price: 734900,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80",
    isPopular: true
  },
  {
    id: "acc-2",
    name: "CUCHILLO MAKO TITANIUM",
    description: "Titanio endurecido, ligero, durable y mínima corrosión. Funda con mecanismo de bloqueo.",
    price: 1013850,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  },
  {
    id: "acc-3",
    name: "SNORKEL SPECTRA DRY",
    description: "Sistema Seco, boquilla en silicona antialérgica. Diseño hidrodinámico superior.",
    price: 294000,
    category: "accesorios",
    brand: "Scubapro",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  },
  {
    id: "acc-4",
    name: "MALETIN PLEGABLE BACK PACK",
    description: "Tela de nylon 420 denniers, tamaño amplio para todo el equipo de buceo.",
    price: 265900,
    category: "accesorios",
    brand: "Problue",
    image: "https://images.unsplash.com/photo-1588616405785-02cd201f8101?w=600&q=80"
  }
];
