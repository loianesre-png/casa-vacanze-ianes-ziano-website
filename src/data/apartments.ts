// src/data/apartments.ts
/**
 * Centralized apartment data for Casa Negrano
 * Contains all information for the three available apartments
 */

export interface Room {
  /** Room name (e.g., "Camera da letto", "Cucina") */
  name: string;
  /** Detailed description of the room */
  description: string;
  /** Image filename from the apartment's image directory */
  image: string;
  /** Optional list of specific amenities in this room */
  amenities?: string[];
}

export interface Apartment {
  /** Unique identifier */
  id: string;
  /** URL-friendly slug for routing */
  slug: string;
  /** Display name of the apartment */
  name: string;
  /** Subtitle/tagline */
  subtitle: string;
  /** Main description paragraph */
  description: string;
  /** Number of guests */
  capacity: number;
  /** Size in square meters */
  size: number;
  /** Bedroom configuration description */
  bedrooms: string;
  /** Bathroom configuration description */
  bathrooms: string;
  /** Main hero image filename */
  heroImage: string;
  /** Property overview image filename */
  propertyImage: string;
  /** Detailed room-by-room information */
  rooms: Room[];
  /** Key features/highlights */
  features: string[];
  /** Ideal for (target audience) */
  idealFor: string[];
}

export const apartments: Apartment[] = [
  {
    id: 'bilocale',
    slug: 'bilocale',
    name: "Appartamento L'Angolino",
    subtitle: 'Bilocale con camera matrimoniale e balcone privato',
    description:
      "Composto da una camera matrimoniale, un bagno con doccia e un soggiorno con cucina completamente attrezzata, L'Angolino offre un ambiente intimo e confortevole. Il balcone privato regala momenti di relax con vista sulla natura circostante, mentre gli interni moderni garantiscono tutti i comfort per un soggiorno perfetto.",
    capacity: 2,
    size: 70,
    bedrooms: '1 camera matrimoniale',
    bathrooms: '1 bagno con doccia',
    heroImage: '20250519_105447.webp',
    propertyImage: '20250519_105511.webp',
    rooms: [
      {
        name: 'Camera da letto',
        description:
          "Spaziosa camera matrimoniale con ampi armadi, riscaldamento e raffrescamento a pavimento, e accesso diretto al balcone privato. L'ambiente è arredato con gusto moderno e offre un'atmosfera tranquilla per un riposo perfetto. Il letto matrimoniale è dotato di materasso di alta qualità per garantire il massimo comfort.",
        image: '20250519_110007.webp',
        amenities: ['Letto matrimoniale', 'Armadio capiente', 'Accesso al balcone', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Soggiorno',
        description:
          "Il luminoso soggiorno combina comfort e funzionalità con un comodo divano, TV a schermo piatto e una zona pranzo elegante. Le ampie finestre offrono abbondante luce naturale e una splendida vista. L'ambiente è perfetto per rilassarsi dopo una giornata di esplorazione del Trentino.",
        image: '20250519_105348.webp',
        amenities: ['Divano', 'TV a schermo piatto', 'Tavolo da pranzo', 'Finestre ampie', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Cucina',
        description:
          "Cucina moderna e completamente attrezzata con tutto il necessario per preparare i vostri pasti preferiti. Dotata di frigorifero, piano cottura a induzione, forno, microonde e utensili completi. L'angolo cottura si integra perfettamente con il soggiorno, creando uno spazio conviviale.",
        image: '20250519_105313.webp',
        amenities: [
          'Frigorifero',
          'Piano cottura a induzione',
          'Microonde',
          'Lavastoviglie',
          'Caffettiera',
          'Utensili completi',
        ],
      },
      {
        name: 'Bagno',
        description:
          "Bagno moderno con ampia doccia, sanitari di qualità e finiture eleganti. Dotato di asciugacapelli, set di cortesia e ampio spazio per i vostri effetti personali. La doccia spaziosa garantisce comfort e praticità.",
        image: '20250519_105935.webp',
        amenities: ['Doccia spaziosa', 'Asciugacapelli', 'Set di cortesia', 'Asciugamani forniti'],
      },
      {
        name: 'Balcone',
        description:
          "Balcone privato attrezzato con tavolino e sedie, perfetto per godersi un caffè al mattino o rilassarsi la sera ammirando il panorama sulle colline trentine. Uno spazio ideale per momenti di tranquillità all'aria aperta.",
        image: '20250519_110417.webp',
        amenities: ['Tavolino', 'Sedie', 'Vista panoramica'],
      },
    ],
    features: [
      'WiFi ad alta velocità',
      'Parcheggio incluso',
      'Balcone privato',
      'Cucina completamente attrezzata',
      'Riscaldamento e raffrescamento a pavimento',
      'TV a schermo piatto',
      'Biancheria e asciugamani inclusi',
      'Ascensore',
      'Cassaforte',
      'Possibilità di brandine e culle'
    ],
    idealFor: ['Coppie', 'Viaggiatori singoli', 'Viaggi di lavoro', 'Weekend romantici'],
  },
  {
    id: 'trilocale',
    slug: 'trilocale',
    name: 'Appartamento La Famiglia',
    subtitle: 'Trilocale con 2 camere e 2 bagni',
    description:
      "L'appartamento offre due camere da letto (una matrimoniale e una con due letti singoli), due bagni completi e un ampio soggiorno con cucina ben fornita. Gli spazi generosi e la configurazione intelligente lo rendono perfetto per famiglie o gruppi di amici che desiderano maggiore privacy e comfort durante il loro soggiorno a Trento.",
    capacity: 4,
    size: 120,
    bedrooms: '1 camera matrimoniale + 1 camera doppia',
    bathrooms: '2 bagni con doccia',
    heroImage: '523A1074 - Modificata.webp',
    propertyImage: '523A1092 - Modificata.webp',
    rooms: [
      {
        name: 'Camera matrimoniale',
        description:
          "Elegante camera matrimoniale, ampi armadi a muro e riscaldamento a pavimento. L'arredamento moderno e i colori rilassanti creano un'atmosfera accogliente. La camera offre tutto lo spazio necessario per un soggiorno confortevole e include un ampio guardaroba.",
        image: '523A1015 - Modificata.webp',
        amenities: ['Letto matrimoniale', 'Armadio a muro', 'Climatizzazione a pavimento', 'Finestre ampie'],
      },
      {
        name: 'Camera doppia',
        description:
          "Camera spaziosa con due letti singoli, perfetta per bambini o amici. Dotata di armadio capiente e scrivania, offre un ambiente luminoso e confortevole. I letti possono essere uniti su richiesta per creare un secondo letto matrimoniale.",
        image: '32a7fc80-6f47-466a-9f49-b1b405980869.webp',
        amenities: ['Due letti singoli', 'Armadio', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Soggiorno',
        description:
          "Ampio soggiorno open space con zona pranzo e area relax. Il divano comodo può ospitare ospiti aggiuntivi, mentre la TV smart e la connessione WiFi veloce garantiscono intrattenimento. Le grandi finestre riempiono lo spazio di luce naturale.",
        image: '523A1047 - Modificata.webp',
        amenities: ['Divano letto', 'TV smart', 'Tavolo da pranzo', 'Area relax', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Cucina',
        description:
          "Cucina moderna e spaziosa, perfettamente attrezzata per preparare pasti per tutta la famiglia. Include elettrodomestici di ultima generazione, ampio piano di lavoro e dispensa. L'isola centrale offre spazio aggiuntivo per la preparazione dei cibi e può servire come zona colazione.",
        image: '523A1074 - Modificata.webp',
        amenities: [
          'Frigorifero',
          'Piano cottura a induzione',
          'Forno elettrico',
          'Lavastoviglie',
          'Microonde',
          'Macchina del caffè',
          'Pentole e stoviglie',
        ],
      },
      {
        name: 'Bagno principale',
        description:
          "Bagno principale spazioso con ampia doccia, lavabo e finiture di pregio. Include lavatrice per maggiore comodità durante soggiorni prolungati. Design moderno con ceramiche di alta qualità.",
        image: '523A1116 - Modificata - Modificata.webp',
        amenities: ['Doccia', 'Lavabo', 'Lavatrice', 'Asciugacapelli', 'Set di cortesia'],
      },
      {
        name: 'Secondo bagno',
        description:
          "Secondo bagno, ideale per garantire privacy e comfort a tutti gli ospiti. Dotato di tutti i servizi necessari e finiture moderne.",
        image: '523A1139 - Modificata.webp',
        amenities: ['Lavabo', 'Asciugacapelli', 'Asciugamani forniti'],
      },
      {
        name: 'Balcone',
        description:
          "Balcone privato attrezzato con tavolino e sedie, perfetto per godersi un caffè al mattino o rilassarsi la sera ammirando il panorama sulle colline trentine. Uno spazio ideale per momenti di tranquillità all'aria aperta.",
        image: '20250519_111428.webp',
        amenities: ['Tavolino', 'Sedie', 'Vista panoramica'],
      },
    ],
    features: [
      'WiFi ad alta velocità',
      'Parcheggio incluso',
      'Due bagni',
      'Cucina spaziosa attrezzata',
      'Riscaldamento e raffrescamento a pavimento',
      'TV smart',
      'Lavatrice',
      'Biancheria e asciugamani inclusi',
      'Ascensore',
      'Cassaforte',
      'Possibilità di brandine e culle'
    ],
    idealFor: ['Famiglie con bambini', 'Gruppi di amici', 'Soggiorni prolungati', 'Chi cerca spazio e privacy'],
  },
  {
    id: 'suite-deluxe',
    slug: 'suite-deluxe',
    name: 'Appartamento Suite Deluxe',
    subtitle: 'Appartamento deluxe con 4 camere e 2 bagni',
    description:
      "Il nostro appartamento più spazioso offre quattro ampie camere da letto: due matrimoniali (una con romantico balconcino privato) e due doppie, perfette per famiglie numerose o gruppi. La casa è completata da due bagni moderni con doccia, una cucina completamente attrezzata e un ampio soggiorno dove rilassarsi in compagnia. L'appartamento è pensato per le famiglie, con la possibilità di aggiungere brandine e culle per i più piccoli.",
    capacity: 8,
    size: 180,
    bedrooms: '2 camere matrimoniali + 2 camere doppie',
    bathrooms: '2 bagni con doccia',
    heroImage: '20250519_113155.webp',
    propertyImage: '20250519_113406.webp',
    rooms: [
      {
        name: 'Camera matrimoniale con balcone',
        description:
          "La camera matrimoniale principale è un vero gioiello, armadio a muro spazioso e accesso esclusivo a un balconcino privato. Perfetta per momenti di intimità, offre un ambiente elegante e rilassante con tutti i comfort moderni. Il balcone privato è ideale per iniziare la giornata con una vista sulle montagne.",
        image: '20250519_114135.webp',
        amenities: ['Letto', 'Armadio a muro', 'Balcone privato', 'Climatizzazione a pavimento', 'Vista panoramica'],
      },
      {
        name: 'Seconda camera matrimoniale',
        description:
          "Elegante camera matrimoniale, arredamento raffinato e ampio spazio guardaroba. Offre un ambiente tranquillo e confortevole, perfetto per garantire privacy agli ospiti. Le finestre ampie assicurano ottima illuminazione naturale.",
        image: '20250519_114626.webp',
        amenities: ['Letto', 'Armadio capiente', 'Climatizzazione a pavimento', 'Finestre ampie'],
      },
      {
        name: 'Prima camera doppia',
        description:
          "Spaziosa camera con due letti singoli, ideale per bambini o amici. Dotata di armadio, scrivania e ampio spazio per muoversi. L'ambiente luminoso e colorato crea un'atmosfera accogliente. I letti possono essere uniti su richiesta.",
        image: '20250519_113406.webp',
        amenities: ['Due letti singoli', 'Armadio', 'Scrivania', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Seconda camera doppia',
        description:
          "Seconda camera con due letti singoli, configurata in modo identico alla prima per garantire comfort equilibrato a tutti gli ospiti. Perfetta per bambini o come camera aggiuntiva per il gruppo.",
        image: '20250519_114743.webp',
        amenities: ['Due letti singoli', 'Armadio', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Soggiorno',
        description:
          "Ampio soggiorno open space con zone distinte per pranzo e relax. Il grande divano componibile può ospitare comodamente tutto il gruppo, mentre la TV smart di grandi dimensioni e il sistema audio assicurano intrattenimento per tutti. Lo spazio è progettato per momenti di condivisione e convivialità.",
        image: '20250519_113259.webp',
        amenities: ['Divano componibile', 'TV smart grande', 'Tavolo da pranzo per 8+ persone', 'Area giochi', 'Climatizzazione a pavimento'],
      },
      {
        name: 'Cucina',
        description:
          "Cucina professionale completamente attrezzata, progettata per chi ama cucinare. Dotata di tutti gli elettrodomestici necessari, ampio piano di lavoro in pietra, isola centrale e dispensa. La cucina può ospitare più persone contemporaneamente e include tutto il necessario per preparare pasti per grandi gruppi.",
        image: '20250519_113654.webp',
        amenities: [
          'Frigorifero XXL con freezer',
          'Piano cottura a induzione 5 fuochi',
          'Forno elettrico doppio',
          'Lavastoviglie grande capacità',
          'Microonde',
          'Macchina del caffè professionale',
          'Isola centrale',
          'Pentole e stoviglie per 10+ persone',
        ],
      },
      {
        name: 'Bagno principale',
        description:
          "Bagno principale con doccia, lavabo e ampio spazio. Include lavatrice per massima comodità. Design elegante con finiture di alta qualità e set di cortesia premium per un'esperienza di lusso.",
        image: '20250519_114450.webp',
        amenities: ['Doccia', 'Lavabo', 'Lavatrice', 'Asciugacapelli', 'Set di cortesia premium'],
      },
      {
        name: 'Secondo bagno',
        description:
          "Secondo bagno completo con doccia e tutti i comfort. Progettato per gestire le esigenze di un gruppo numeroso, garantendo che tutti abbiano accesso comodo ai servizi senza attese.",
        image: '20250519_114441.webp',
        amenities: ['Doccia', 'Lavabo', 'Asciugacapelli', 'Asciugamani forniti', 'Set di cortesia'],
      },
    ],
    features: [
      'WiFi ad alta velocità',
      'Parcheggio per 2 auto',
      'Balcone privato',
      'Due bagni completi',
      'Cucina professionale attrezzata',
      'Riscaldamento e raffrescamento a pavimento',
      'TV smart grande',
      'Lavatrice e asciugatrice',
      'Biancheria e asciugamani per tutti',
      'Ascensore',
      'Cassaforte',
      'Possibilità di brandine e culle',
    ],
    idealFor: [
      'Famiglie numerose',
      'Gruppi di amici',
      'Riunioni familiari',
      'Eventi speciali',
      'Soggiorni prolungati',
      'Chi cerca massimo spazio',
    ],
  },
];

/**
 * Get apartment by slug
 */
export function getApartmentBySlug(slug: string): Apartment | undefined {
  return apartments.find((apt) => apt.slug === slug);
}

/**
 * Get apartment by ID
 */
export function getApartmentById(id: string): Apartment | undefined {
  return apartments.find((apt) => apt.id === id);
}

/**
 * Get all apartment slugs (useful for generating routes)
 */
export function getApartmentSlugs(): string[] {
  return apartments.map((apt) => apt.slug);
}
