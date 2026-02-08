// src/data/services.ts
/**
 * Services, amenities, and benefits for property rental apartments
 *
 * Note: Contact information is now managed in src/config/site.config.ts
 * The contactInfo export below is kept for backward compatibility but
 * pulls data from the centralized config.
 */

import { getContactEmail, getContactPhone, getAddress, getCoordinates } from '../config';

export interface Service {
  /** Service title */
  title: string;
  /** Detailed description */
  description: string;
  /** Tabler icon name */
  icon: string;
}

export interface Benefit {
  /** Benefit title */
  title: string;
  /** Description of the benefit */
  description: string;
  /** Optional icon */
  icon?: string;
}

export interface LocalRecommendation {
  /** Name of place/activity */
  name: string;
  /** Type (restaurant, attraction, activity, etc.) */
  type: 'restaurant' | 'attraction' | 'activity' | 'transport' | 'other';
  /** Description */
  description: string;
  /** Distance from property */
  distance?: string;
  /** Optional website or contact */
  website?: string;
}

/**
 * Core services and amenities included with all apartments
 */
export const coreServices: Service[] = [
  {
    title: 'Grande prato',
    description:
      'Oltre 2000mq con panorama sul Lagorai, offre un soleggiato relax all\'aperto e pranzi all\'ombra del grande faggio rosso.',
    icon: 'tabler:tree',
  },
  {
    title: 'Deposito attrezzatura',
    description:
      'Locale chiuso di 37 mq attiguo all\'appartamento, ideale per depositare e-bike, sci e scarponi. Dispone di un frigo per bevande, un freezer e di asciugatrice.',
    icon: 'tabler:building-warehouse',
  },
  {
    title: 'Tavoli, sdraio e lettini',
    description:
      'Ampia dotazione di sdraio, sedie, tavoli, panche e materassini da giardino per freschi pranzi e merende estive all\'aperto.',
    icon: 'tabler:armchair',
  },
  {
    title: 'Parcheggio',
    description:
      'Parcheggia comodamente la tua auto nella nostra struttura, senza pensieri e senza costi aggiuntivi. Sono disponibili 2 posti auto all\'ingresso della proprietà.',
    icon: 'tabler:parking-circle',
  },
  {
    title: 'Parcheggio ridotta mobilità',
    description:
      'Possibilità di parcheggiare a pochi metri dall\'ingresso dell\'appartamento per ospiti con mobilità ridotta.',
    icon: 'tabler:wheelchair',
  },
  {
    title: 'Wi-Fi gratuito',
    description:
      'Wi-Fi gratuito disponibile per gli ospiti.',
    icon: 'tabler:wifi',
  },
  {
    title: 'Check-in flessibile a partire dalle 16:00',
    description:
      "Arriva quando vuoi dalle 16:00 in poi, hai la libertà di scegliere l'orario di arrivo più comodo per te. Check-out alle 10:00.",
    icon: 'tabler:door-enter',
  },
  {
    title: 'Riscaldamento ad aria',
    description:
      'Riscaldamento ad aria per un rapido comfort, con possibilità di controllo remoto da App.',
    icon: 'tabler:air-conditioning',
  },
  {
    title: 'Cucina ben attrezzata',
    description:
      'L\'appartamento a piano terra dispone di una cucina completa, dotata di tutto il necessario per preparare e gustare i tuoi pasti preferiti.',
    icon: 'tabler:tools-kitchen',
  },
  {
    title: 'Biancheria e asciugamani inclusi',
    description:
      'Troverai tutto ciò di cui hai bisogno per un soggiorno confortevole, con biancheria e asciugamani forniti per ogni ospite.',
    icon: 'tabler:bed',
  },
];

/**
 * Additional premium services (for specific apartments)
 */
export const premiumServices: Service[] = [
  {
    title: 'Lavatrice e asciugatrice',
    description:
      'Lavatrice e asciugatrice disponibili per soggiorni prolungati, garantendo massima comodità e autonomia.',
    icon: 'tabler:wash',
  },
  {
    title: 'TV Smart di grandi dimensioni',
    description:
      'Smart TV con accesso a piattaforme streaming e ampia selezione di canali per il tuo intrattenimento.',
    icon: 'tabler:device-tv',
  },
  {
    title: 'Cucina professionale',
    description:
      'Cucina completamente equipaggiata con elettrodomestici di fascia alta e tutto il necessario per gli amanti della cucina.',
    icon: 'tabler:chef-hat',
  },
];

/**
 * Trentino Guest Card benefits
 */
export const trentinoGuestCardBenefits: Benefit[] = [
  {
    title: 'Trasporti pubblici gratuiti',
    description:
      'Accesso illimitato a tutti i mezzi pubblici del Trentino, inclusi autobus urbani ed extraurbani per spostarsi comodamente in tutta la regione.',
    icon: 'tabler:bus',
  },
  {
    title: 'Ingressi a musei e castelli',
    description:
      'Accesso gratuito o scontato a oltre 60 musei, castelli e siti culturali del Trentino, inclusi il MUSE, Castello del Buonconsiglio e molto altro.',
    icon: 'tabler:building-castle',
  },
  {
    title: 'Funivie e impianti di risalita',
    description:
      'Tariffe agevolate per funivie, seggiovie e skilift in numerose località montane, per raggiungere facilmente i sentieri e i panorami più belli.',
    icon: 'tabler:stairs-up',
  },
  {
    title: 'Attività outdoor e sport',
    description:
      'Sconti su attività come rafting, canyoning, noleggio biciclette, passeggiate guidate e esperienze nella natura trentina.',
    icon: 'tabler:mountain',
  },
  {
    title: 'Piscine e centri benessere',
    description:
      'Accesso scontato a piscine, terme e centri benessere convenzionati per momenti di relax e rigenerazione.',
    icon: 'tabler:pool',
  },
  {
    title: 'Degustazioni e cantine',
    description:
      'Visite guidate e degustazioni presso cantine, malghe e produttori locali per scoprire i sapori autentici del Trentino.',
    icon: 'tabler:glass',
  },
];

/**
 * Local recommendations and attractions near Ziano di Fiemme
 */
export const localRecommendations: LocalRecommendation[] = [
  {
    name: 'Predazzo – Ski Center Latemar',
    type: 'attraction',
    description: 'Comprensorio sciistico e centro per sport invernali ed estivi ai piedi del Latemar.',
    distance: '4 km – 8 min.',
  },
  {
    name: 'Cavalese – Alpe Cermis',
    type: 'attraction',
    description: 'Skiarea e punto panoramico raggiungibile in funivia, escursioni e sci.',
    distance: '8 km – 10 min.',
  },
  {
    name: 'Pampeago – Obereggen',
    type: 'attraction',
    description: 'Comprensorio sciistico con piste per tutti i livelli e panorami sulle Dolomiti.',
    distance: '12 km – 15 min.',
  },
  {
    name: 'Moena',
    type: 'attraction',
    description: 'La "Fata delle Dolomiti", pittoresco borgo alpino con passeggiate e gastronomia tipica.',
    distance: '13 km – 16 min.',
  },
  {
    name: 'Bellamonte – Skiarea Alpe Lusia',
    type: 'attraction',
    description: 'Area sciistica e escursionistica con vista sulle Pale di San Martino.',
    distance: '14 km – 18 min.',
  },
  {
    name: 'Passo Rolle – Le Pale di San Martino',
    type: 'attraction',
    description: 'Passo dolomitico con vista spettacolare sulle Pale di San Martino, ideale per escursioni e sci.',
    distance: '25 km – 35 min.',
  },
  {
    name: 'Terme QC Spa – Vigo di Fassa',
    type: 'activity',
    description: 'Centro termale e benessere immerso nelle Dolomiti per momenti di relax.',
    distance: '26 min. in auto',
  },
  {
    name: 'Canazei',
    type: 'attraction',
    description: 'Rinomata località turistica nel cuore delle Dolomiti, punto di partenza per la Sella Ronda.',
    distance: '30 km – 35 min.',
  },
  {
    name: 'Centro acquatico Dolaondes – Canazei',
    type: 'activity',
    description: 'Centro acquatico con piscine, scivoli e area benessere per tutta la famiglia.',
    distance: '30 km – 35 min.',
  },
  {
    name: 'Campitello di Fassa – Val Duron – Sella Ronda',
    type: 'attraction',
    description: 'Punto di accesso alla Val Duron e al circuito sciistico Sella Ronda.',
    distance: '32 km – 38 min.',
  },
  {
    name: 'Passo Fedaia con la Marmolada',
    type: 'attraction',
    description: 'Passo ai piedi della Regina delle Dolomiti, la Marmolada, con il suo ghiacciaio e il lago.',
    distance: '42 km – 52 min.',
  },
  {
    name: 'Passo Sella – Gruppo del Sella e Sassolungo',
    type: 'attraction',
    description: 'Passo iconico delle Dolomiti con vista sul Gruppo del Sella e Sassolungo, paradiso per alpinisti e ciclisti.',
    distance: '44 km – 55 min.',
  },
  {
    name: 'Bolzano',
    type: 'attraction',
    description: 'I portici, il centro storico, piazza Walther ed il museo di Oetzi.',
    distance: '44 km – 55 min.',
  },
  {
    name: 'Piscina Cavalese',
    type: 'activity',
    description: 'Piscina pubblica ideale per famiglie e momenti di svago.',
    distance: '8 km – 10 min.',
  },
  {
    name: 'Trento',
    type: 'attraction',
    description: 'Il Castello del Buonconsiglio, il Duomo e la piazza, il MuSe.',
    distance: '60 km – 65 min.',
  },
];

/**
 * House rules and important information
 */
export interface HouseRule {
  title: string;
  description: string;
  icon?: string;
}

export const houseRules: HouseRule[] = [
  {
    title: 'Check-in / Check-out',
    description: 'Check-in dalle 16:00, check-out entro le 10:00. Orari flessibili su richiesta.',
    icon: 'tabler:clock',
  },
  {
    title: 'Non fumatori',
    description: 'È vietato fumare all\'interno degli appartamenti. È possibile fumare sul balcone.',
    icon: 'tabler:smoking-no',
  },
  {
    title: 'Animali domestici',
    description: 'Gli animali domestici sono ammessi previo accordo con i proprietari.',
    icon: 'tabler:paw',
  },
  {
    title: 'Feste e rumori',
    description: 'Si prega di rispettare la quiete serale dopo le 22:00 per il comfort di tutti gli ospiti.',
    icon: 'tabler:volume',
  },
  {
    title: 'Pulizia',
    description: 'Pulizia finale inclusa. Pulizie intermedie disponibili su richiesta per soggiorni prolungati.',
    icon: 'tabler:vacuum-cleaner',
  },
];

/**
 * Contact information
 * Now pulls from centralized config (src/config/site.config.ts)
 */
export const contactInfo = {
  get email() {
    return getContactEmail();
  },
  get phone() {
    return getContactPhone() || '';
  },
  get address() {
    return getAddress();
  },
  get coordinates() {
    return getCoordinates();
  },
};

/**
 * Pricing information (optional - can be customized)
 */
export interface PricingPeriod {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const pricingPeriods: PricingPeriod[] = [
  {
    name: 'Bassa stagione',
    startDate: 'Novembre - Marzo (escluso Natale/Capodanno)',
    endDate: '',
    description: 'Periodo ideale per visitare i mercatini di Natale e godersi la quiete invernale.',
  },
  {
    name: 'Media stagione',
    startDate: 'Aprile - Maggio, Settembre - Ottobre',
    endDate: '',
    description: 'Stagione perfetta per escursioni e temperature miti.',
  },
  {
    name: 'Alta stagione',
    startDate: 'Giugno - Agosto',
    endDate: '',
    description: 'Estate con clima ideale per attività outdoor e lago di Garda.',
  },
  {
    name: 'Festività',
    startDate: 'Natale, Capodanno, Pasqua',
    endDate: '',
    description: 'Periodi speciali con eventi e atmosfera unica.',
  },
];
