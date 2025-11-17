// src/data/reviews.ts
/**
 * Guest reviews for Casa Negrano
 * Curated selection of the best reviews highlighting hospitality, cleanliness, and facilities
 */

export interface Review {
  /** Reviewer's name */
  username: string;
  /** Review text content */
  text: string;
  /** Review score (out of 10) */
  reviewScore: number;
  /** Optional language code for internationalization */
  language?: 'it' | 'en' | 'de' | 'es' | 'fr' | 'other';
}

/**
 * Best reviews curated for quality and detail
 * These reviews highlight the unique aspects of Casa Negrano:
 * - Exceptional hospitality and personal touch
 * - Modern, clean, well-equipped facilities
 * - Attention to details and guest comfort
 * - Family-friendly atmosphere
 */
export const featuredReviews: Review[] = [
  {
    username: 'Elena',
    text: "Casa Negrano è molto più di un alloggio in cui vivi distrattamente quando vai fuori. \nA Casa Negrano trovi accoglienza, cura e sorriso. \nSi dice che la differenza la fanno i dettagli, a Casa Negrano trovi gli asciugamani profumati e delicatamente piegati, il caffè e le tisane che ti aspettano al mattino, l'acqua fresca messa in frigo. \nNoi siamo andati a Trento per giocare le finali TPRA e quando tornavamo stanchi dopo gli incontri è stato bello tornare a casa.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Carrara',
    text: "Pulizia impeccabile, ottimo isolamento acustico, ambienti spaziosi, curati nei minimi dettagli, dotati di tutte le comodità con arredamento moderno e domotica. Letti comodissimi. In più una terrazza ampia con una bella vista sulle montagne! \nLa posizione è molto comoda perché la città di Trento si raggiunge in auto davvero molto facilmente. \nI proprietari persone squisite, accoglienti, disponibili e cordiali.\nÈ stato un piacere soggiornare a CasaNegrano!\nSicuramente ci torneremo per soggiornare a Trento.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Krzysztof',
    text: "This was hands down one of the best (if not THE) best apartment we have ever stayed at. I'd give 20/10 if I could. A lot of space, a lot of light, everything was ultra-clean, the beds were comfy, the kitchen had everything you might need and then some - we counted at least three different coffee machines. Not too mention the spacious balcony with a view of the mountains. It was comfortably cool during the summer heat thanks to a smart aircon system, thanks to which the temperature inside stayed around 24C. The area was very quiet at night and yet in close proximity to at least two bus stops, so if you want to use public transport to explore Trento - you are all set. And of course we mustn't forget the extra-nice, extra-accomodating owners - it has been a real pleasure to stay at CasaNegrano. Grazie mille!",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Larissa',
    text: "It was absolutely wonderful week: Trento is very beautiful and Casa Negrano is perfect: well-designed, well-equipped with all you need and even more (for example for coffee you will have both capsule- and filter coffee machine, and also kettle; washing machine and dishwasher are provided with capsules for washing and so on). All is really like you see on the pictures. What we like very much: very clean, space for parking is in the courtyard, beautiful view  to the village and to the mountains from the balcony, wi-fi is quick, refrigeraator is large. This house has very well working aircon – for us it was even a little too cool, but it was very quickly regulated by the host, so we felt really very comfortable.\r\nCasa Negrano owners are very friendly and caring. That you can understand more clearly, how great are the hosts of Casa Negrano: in our first day we left the car home and went to the center  of Trento by bus. In the evening we were waiting for the bus to go back home when storm began: strong wind, hail, heavy rain. We came home 2 hours later we planned, and of course we were very worried about the car. Although the host sent us a message, when storm began, we got this message due to the storm and loss on internet right at the moment we already came home. But when we came to courtyard we found our car carefully covered with many blankets to save it from the hail. We were very  impressed and we really appriciate this level of care and hospitality. \r\nWe would be happy to stay in Casa Negrano also next time, of course.",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Gabriele',
    text: "Abbiamo soggiornato in 8 nell'appartamento deluxe. Nonostante fossimo due famiglie non abbiamo sofferto la mancanza di spazio, l'appartamento è studiato per accogliere comodamente gruppi numerosi.\r\nPienamente soddisfatti della struttura, dell'accoglienza e della pulizia. Non potevamo voler di più. Grazie Franco e Fabiana per l'ospitalità, quando torneremo a Trento sarete sicuramente la nostra prima scelta.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Cristinavenier',
    text: "L'accoglienza del signor Franco è un enorme punto a favore, mi ha aspettata fuori la struttura e mi ha subito mostrato l'appartamento. Molto gentile e super disponibile per qualsiasi necessità.\r\nAppartamento praticamente nuovo, molto luminoso e spazioso, confortevole, silenzioso e pulitissimo, non mancava nulla. Ho adorato il cuscino in memory che non si trova praticamente da nessuna parte, nemmeno negli hotel 5 stelle, grande cura e attenzione per la persona.\r\nZona tranquilla e silenziosa a 15 minuti di macchina dal centro. Mi sono sentita praticamente a casa.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Nunzia',
    text: "È difficile dire cosa ci è piaciuto di più. \nInnanzi tutto il quartiere,  tranquillo e silenzioso. \nNon ho mai trovato una struttura così o simile: accogliente, pulita, profumata,  efficiente sotto tutti i  punto di vista, dotata di ogni genere di cosa che possa servire. La casa è di recente ristrutturazione,  con tutti gli  elementi che rendano \n\nefficiente ogni sorgente energetica .\nGli host ,Franco e Fabiana, ci hanno fatto sentire veri ospiti, accolti con una gentilezza che non si trova facilmente, come se fossi andata a trovare i miei zii.Tornerei a Trento solo per soggiornare nuovamente qui.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Antonio',
    text: "È stato un soggiorno perfetto, siamo rimasti più che soddisfatti. L'appartamento è nuovissimo, spazioso e dotato di tutti i comfort possibili.....non ci è mancato davvero nulla e di sicuro quando ritorneremo in Trentino, alloggeremo di nuovo qui. Addirittura i bambini potevano giocare con giochi da tavola presenti nell' appartamento .\nInoltre il proprietario , Franco, è stato di una disponibilità e gentilezza rara tanto che i miei bambini lo ricorderanno con affetto.Consigliamo a tutti questo alloggio che è andato oltre le nostre aspettative.",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Lorenzo',
    text: "This review is for the one bedroom apartment.\n\nThere's a reason for all the highly rated reviews for this accommodation, and the reason is pretty simple, the family running this business is doing an outstanding job!\n\nWe were guided and greeted by Andrea and kept in touch with him during our stay.\n\nWhatever our needs or inquiries, they were all satisfied by this very helpful young man, who also has an excellent command of English language, among others \n\nThe apartment itself is new, spotless, large, modern and comes equipped with all the appliances and utensils that one needs.\n\nThe building even has an elevator!\n\nThere's three large parking spots in front, for those driving and also a bus station close by, if interested.\n\nThe location is perfect, very quiet, yet still close to the center of the city.\n\nEverything was perfect!",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Inna',
    text: "First of all, the location is incredible – mountain views from the window, birds singing outside.\r\nSecondly, the hosts. We were warmly welcomed by the wonderful Franco and Andre – they showed us everything and explained how it all works (nothing complicated, but still very nice).\r\n\r\nAs we had already been traveling for almost two weeks, the apartment felt perfect for rest and comfort. Nothing was missing.\r\n\r\nTwo special moments are worth mentioning:\r\nIt was my friend's birthday, and the hosts greeted her in Ukrainian – a sweet and thoughtful gesture.\r\nAnd when we had car trouble, they immediately offered help – which meant a lot to us.\r\n\r\nWe wholeheartedly recommend this place. Grazie mille!",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Raffaella',
    text: "I proprietari Franco e Fabiana ci hanno accolto con il sorriso, super disponibili e cordiali, caratteristiche da non dare per scontato. \nL'appartamento è nuovo, gli spazi sono ampi ed è tutto curato nei particolari. Sia in cucina che nelle camere e nei bagni è presente il necessario per il soggiorno. Abbiamo apprezzato le prese usb/ usb c su tutti i comodini, molto comode e funzionali.\nTorneremo sicuramente e consiglieremo sicuramente la struttura",
    reviewScore: 9,
    language: 'it',
  },
  {
    username: 'Tps',
    text: "Siamo stati ospiti in questa casa e devo dire che è stata un'esperienza veramente positiva! La casa è spaziosa e pulita, con arredi moderni e confortevoli. La posizione è comoda, a pochi minuti da Trento, quindi è facile raggiungere la città e tutti i suoi servizi.\r\nMa ciò che mi ha colpito di più è stata la tranquillità della zona, perfetta per rilassarsi e godersi un po' di pace. E il merito è anche degli host, il signor Franco e sua moglie, che sono stati veramente bravissimi e accoglienti. \r\nIn sintesi, consigliamo vivamente questa casa a chiunque cerchi un posto comodo e tranquillo dove soggiornare vicino a Trento. Gli host sono fantastici e la casa è perfetta per un soggiorno rilassante. \r\nValentin e Nikolas",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Baumgartner',
    text: "This is one of the best location where I have been staying. Completely new apartment,  absolutely everything we needed was available.  The hosts are extremely friendly and nice people.  My daughter even received a present from them. We felt more than welcome and if we go to Trento will love to stay there again.",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Sara',
    text: "Casa moderna con ascensore e parcheggio, dotata di tutto il necessario e anche di più! C'è addirittura un adattatore per caricare qualsiasi tipo di cellulare. Franco e la moglie sono molto disponibili. La doccia è enorme e il materasso è comodissimo. Consigliatissimo!",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Scott',
    text: "The owners were were very friendly and met us when we arrived. They had a very secure system where we could lock our bikes in a garage as we travelled to Trento by bike.  The apartment was very newly renovated and was very clean. It had an excellent kitchen with three different options to make coffee!",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Lucia',
    text: "L'appartamento è di recentissima ristrutturazione. Tutto è nuovo pulitissimo e curato nei minimi dettagli. Gli spazi sono ampi e ben organizzati. \nCi ha accolto Franco con gentilezza e disponibilità. \nTorneremo sicuramente!",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Alessandro',
    text: "Tutto pulito, organizzato, stoviglie e posate nuove, letti comodi, ascensore, parcheggio interno comodo per 3 auto, host molto gentile e disponibile! 5 minuti netti in auto e sei nel centro di Trento",
    reviewScore: 10,
    language: 'it',
  },
  {
    username: 'Beate',
    text: "Franco und Familie sind wunderbar.\r\nSie sind immer freundlich und hilfsbereit und stets für ihre Gäste da. Das Apartment ist außergewöhnlich groß, sehr komfortabel und mit allem ausgestattet. Wir haben uns sehr wohl gefühlt. Beate und Harald",
    reviewScore: 10,
    language: 'de',
  },
  {
    username: 'Peter',
    text: "We had a fantastic stay at this apartment! It was clean, modern, and exactly as shown in the photos. The kitchen was fully equipped, which made it easy to cook meals, and the bed was very comfortable. The Wi-Fi worked perfectly throughout my stay. The host was very responsive and friendly, making check-in simple . The location was also great . I would definitely stay here again and highly recommend it to others looking for a comfortable and convenient place to stay.",
    reviewScore: 10,
    language: 'en',
  },
  {
    username: 'Tauber',
    text: "Äußerst komfortabel, freundlich, modern, hell, wunderbar bequemes Bett! Vorzügliches, modernes Bad mit walk-in Dusche und Bidet. Extrem gut ausgestattete Küche. Die Gastgeber auf unaufdringliche Weise herzlich, freundlich und zuvorkommend. Bei Fragen waren sie schnell ansprechbar und haben geholfen. Uns hat es an nichts gefehlt. Sogar ein kleiner Vorrat an Kaffee, Tee und Dolce stand bereit, dass wir mit einem Frühstück in die ersten Tage starten konnten 😃",
    reviewScore: 10,
    language: 'de',
  },
];

/**
 * Get a random selection of reviews
 * @param count Number of reviews to return (default: 3)
 * @returns Array of randomly selected reviews
 */
export function getRandomReviews(count: number = 3): Review[] {
  // Create a copy to avoid mutating the original array
  const shuffled = [...featuredReviews].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get reviews by language
 * @param language Language code to filter by
 * @returns Array of reviews in the specified language
 */
export function getReviewsByLanguage(language: 'it' | 'en' | 'de' | 'es' | 'fr' | 'other'): Review[] {
  return featuredReviews.filter((review) => review.language === language);
}

/**
 * Get reviews with a minimum score
 * @param minScore Minimum review score (default: 10)
 * @returns Array of reviews with score >= minScore
 */
export function getReviewsByMinScore(minScore: number = 10): Review[] {
  return featuredReviews.filter((review) => review.reviewScore >= minScore);
}

/**
 * Get all featured reviews
 */
export function getAllReviews(): Review[] {
  return featuredReviews;
}

/**
 * Statistics about the reviews
 */
export const reviewStats = {
  total: featuredReviews.length,
  averageScore: featuredReviews.reduce((sum, r) => sum + r.reviewScore, 0) / featuredReviews.length,
  perfectScores: featuredReviews.filter((r) => r.reviewScore === 10).length,
  languages: {
    italian: featuredReviews.filter((r) => r.language === 'it').length,
    english: featuredReviews.filter((r) => r.language === 'en').length,
    german: featuredReviews.filter((r) => r.language === 'de').length,
  },
};
