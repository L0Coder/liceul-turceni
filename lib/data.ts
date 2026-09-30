import { aniDeActivitate, anAdmitere } from "./constants";
/* ═══ PROFILE EDUCAȚIONALE ═══ */
export interface Profil {
  slug: string; icon: string; title: string; shortDesc: string; fullDesc: string;
  discipline: string[]; competente: string[]; perspective: string[];
  color: string; glowColor: string; imagini: string[];
}

export const PROFILE: Profil[] = [
  { slug: "matematica-informatica", icon: "🧮", title: "Matematică — Informatică",
    shortDesc: "Algebră, programare, algoritmi. Fundament solid pentru IT.",
    fullDesc: "Profilul Matematică-Informatică oferă pregătire aprofundată în matematică, informatică și programare. Elevii învață algoritmi, structuri de date, dezvoltare web. Absolvenții continuă la Informatică, Automatică sau Politehnică.",
    discipline: ["Matematică", "Informatică", "Fizică", "Limba engleză", "TIC"],
    competente: ["Programare (C++, Python)", "Algoritmi", "Dezvoltare web", "Baze de date", "Gândire logico-matematică"],
    perspective: ["Facultatea de Informatică", "Politehnică", "Inginerie software", "Data scientist"],
    color: "#3498db", glowColor: "#00b0ff", imagini: ["02_laboratoare/Lab_informatica_1.jpg", "02_laboratoare/Lab_informatica_2.jpg"] },
  { slug: "stiinte-ale-naturii", icon: "🔬", title: "Științe ale Naturii",
    shortDesc: "Biologie, chimie, fizică. Pregătire pentru medicină și științe.",
    fullDesc: "Profilul Științe ale Naturii pregătește pentru cariere în medicină, farmacie, biochimie și cercetare. Laboratoarele de chimie și biologie sunt echipate modern.",
    discipline: ["Biologie", "Chimie", "Fizică", "Matematică", "Limba engleză"],
    competente: ["Analiză de laborator", "Metode experimentale", "Chimie organică", "Biologie celulară", "Cercetare"],
    perspective: ["Medicină", "Farmacie", "Biologie", "Chimie", "Biotehnologie"],
    color: "#27ae60", glowColor: "#00e676", imagini: ["02_laboratoare/Lab_chimie_1.jpg", "02_laboratoare/Lab_fizica_1.jpg"] },
  { slug: "filologie-bilingv-engleza", icon: "🌍", title: "Filologie Bilingv Engleză",
    shortDesc: "Limbi moderne, literatură, comunicare. Deschidere internațională.",
    fullDesc: "Pregătire intensivă în limba engleză, literatură universală și comunicare. Certificări Cambridge și proiecte Erasmus+ internaționale.",
    discipline: ["Limba engleză (intensiv)", "Limba română", "Literatură universală", "Limba franceză", "Istorie"],
    competente: ["Nivel B2-C1 engleză", "Comunicare interculturală", "Traducere", "Redactare academică", "Analiză literară"],
    perspective: ["Litere", "Relații Internaționale", "Comunicare", "Jurnalism", "Traducere"],
    color: "#8e44ad", glowColor: "#d500f9", imagini: ["09_clase/Sala_clasa_1.jpg", "07_erasmus/Erasmus_grup_1.jpg"] },
  { slug: "electronica-automatizari", icon: "⚡", title: "Electronică Automatizări",
    shortDesc: "Circuite, PLC-uri, sisteme automate. Industria viitorului.",
    fullDesc: "Specialiști în circuite electronice, automatizare industrială și programare PLC. Laborator echipat modern. Absolvenți angajați la Complexul Energetic Oltenia.",
    discipline: ["Electronică", "Automatizări", "Măsurări electrice", "Informatică aplicată", "Matematică"],
    competente: ["Proiectare circuite", "Programare PLC", "Sisteme SCADA", "Senzori", "Depanare"],
    perspective: ["Inginer automatist", "Tehnician electronist", "CEO", "Industria auto", "Energii regenerabile"],
    color: "#f26b00", glowColor: "#ff9100", imagini: ["02_laboratoare/Lab_electronica_1.jpg", "02_laboratoare/Lab_electronica_2.jpg"] },
  { slug: "mecanica", icon: "⚙️", title: "Mecanică",
    shortDesc: "Proiectare, fabricare, mentenanță. Baza industriei.",
    fullDesc: "Pregătire practică în prelucrarea metalelor, CAD și mentenanță industrială. Ateliere echipate cu strunguri, freze și CNC.",
    discipline: ["Mecanică", "Desen tehnic", "Tehnologie mecanică", "Rezistența materialelor", "Matematică"],
    competente: ["Operare strung/freză", "Desen tehnic CAD", "Citire scheme", "Măsurători de precizie", "Mentenanță"],
    perspective: ["Inginer mecanic", "Operator CNC", "Mentenanță industrială", "Industria auto", "Industria energetică"],
    color: "#2c3e50", glowColor: "#00e5ff", imagini: ["03_ateliere/Atelier_mecanica_1.jpg", "03_ateliere/Atelier_mecanica_2.jpg"] },
  { slug: "electromecanica", icon: "🔧", title: "Electromecanică",
    shortDesc: "Motoare, generatoare, sisteme energetice. Parteneriat cu CEO.",
    fullDesc: "Specialiști în motoare electrice, generatoare și sisteme energetice. Parteneriat direct cu Complexul Energetic Oltenia — practică în centrale.",
    discipline: ["Electromecanică", "Mașini electrice", "Instalații electrice", "Automatizări", "Protecția muncii"],
    competente: ["Montaj motoare", "Bobinare", "Instalații de forță", "Securitate electrică", "Diagnosticare"],
    perspective: ["CEO — angajare directă", "Electrician industrial", "Energii regenerabile", "Mentenanță centrale"],
    color: "#c0392b", glowColor: "#ff1744", imagini: ["03_ateliere/Atelier_electromecanica_1.jpg", "11_parteneriate/CEO_practica_1.jpg"] },
  { slug: "constructii-instalatii", icon: "🏗️", title: "Construcții Instalații",
    shortDesc: "Proiectare clădiri, instalații sanitare și termice.",
    fullDesc: "Specialiști în proiectarea și execuția construcțiilor civile, instalații sanitare, termice și electrice. Meserie cu cerere mare.",
    discipline: ["Construcții", "Instalații sanitare", "Instalații termice", "Topografie", "Desen tehnic"],
    competente: ["Citire planuri", "Execuție zidărie", "Montaj instalații", "Montaj termice", "Topografie"],
    perspective: ["Constructor", "Instalator", "Diriginte de șantier", "Proiectant", "Antreprenor"],
    color: "#2aa198", glowColor: "#1de9b6", imagini: ["03_ateliere/Atelier_constructii_1.jpg", "09_clase/Sala_clasa_2.jpg"] },
  { slug: "scoala-profesionala", icon: "🔥", title: "Școală Profesională",
    shortDesc: "Sudori și electromecanic centrale. Rată ridicată de angajare.",
    fullDesc: "Două specializări de 3 ani: Sudor și Electromecanic Centrale Electrice. Pregătire 70% practică. Rată ridicată de angajare la Complexul Energetic Oltenia.",
    discipline: ["Pregătire practică (70%)", "Sudură MIG/MAG/TIG", "Electromecanică", "Protecția muncii", "Matematică aplicată"],
    competente: ["Sudură în toate pozițiile", "Citire desene", "Montaj/demontaj", "Mentenanță", "Certificare profesională"],
    perspective: ["CEO — angajare directă", "Sudor certificat", "Mentenanță centrală", "Angajare în Europa"],
    color: "#d35400", glowColor: "#ff6d00", imagini: ["03_ateliere/Atelier_sudura_1.jpg", "11_parteneriate/CEO_centrala_1.jpg"] },
];

/* ═══ STATISTICI ═══ */
export const STATS = [
  { number: "1604", label: "Elevi înscriși", icon: "🎓", glowColor: "#00e5ff" },
  { number: "155", label: "Cadre didactice", icon: "👩‍🏫", glowColor: "#76ff03" },
  { number: "8", label: "Profiluri educaționale", icon: "📚", glowColor: "#00b0ff" },
  { number: String(aniDeActivitate()), label: "Ani de excelență", icon: "🏆", glowColor: "#ffd600" },
];

/* ═══ NOUTĂȚI ═══ */
export interface Noutate { slug: string; date: string; category: string; title: string; excerpt: string; content: string; image?: string; glowColor: string; }

export const NOUTATI: Noutate[] = [
  { slug: "an-scolar-2026-2027", date: "7 Septembrie 2026", category: "Eveniment", title: "A început anul școlar 2026-2027",
    excerpt: "Cursurile au început luni, 7 septembrie 2026. Anul școlar are 36 de săptămâni, organizate în 5 module.",
    content: "Anul școlar 2026-2027 a început luni, 7 septembrie 2026, și are 36 de săptămâni de cursuri, organizate în 5 module separate de vacanțe. Cursurile se încheie pe 4 iunie 2027 pentru clasa a XII-a, pe 11 iunie 2027 pentru clasa a VIII-a, pe 18 iunie 2027 pentru majoritatea claselor și pe 25 iunie 2027 pentru clasele de la filiera tehnologică, cu excepțiile prevăzute în ordin. Sursa: Ordinul ministrului educației nr. 3194/2026.", glowColor: "#00e5ff" },
  { slug: "bac-2027-calendar", date: "7 Septembrie 2026", category: "Examen", title: "Calendarul Bacalaureatului 2027",
    excerpt: "Probele de competențe în aprilie, probele scrise între 14 și 18 iunie 2027.",
    content: "Calendarul bacalaureatului 2027 a fost aprobat prin Ordinul nr. 5211/2026, publicat în Monitorul Oficial nr. 758 din 7 septembrie 2026. Probele de competențe: 12 - 23 aprilie 2027 (înscriere 5 - 9 aprilie). Probele scrise: 14 iunie - limba și literatura română; 15 iunie - proba obligatorie a profilului; 17 iunie - proba la alegere a profilului și specializării; 18 iunie - limba și literatura maternă. Rezultate inițiale: 23 iunie 2027.", glowColor: "#ff9100" },
  { slug: "vacante-2026-2027", date: "16 Februarie 2026", category: "Calendar", title: "Vacanțele anului școlar 2026-2027",
    excerpt: "Toamnă, iarnă, februarie, primăvară și vară - datele oficiale.",
    content: "Vacanța de toamnă: 24 octombrie - 1 noiembrie 2026. Vacanța de iarnă: 23 decembrie 2026 - 10 ianuarie 2027. Vacanța din februarie: o săptămână între 15 februarie și 7 martie 2027, stabilită de Inspectoratul Școlar Județean Gorj. Vacanța de primăvară: 24 aprilie - 4 mai 2027. Vacanța de vară: 19 iunie - 5 septembrie 2027. Sursa: Ordinul nr. 3194/2026, Monitorul Oficial nr. 126 din 16 februarie 2026.", glowColor: "#1de9b6" },
];

/* ═══ PARTENERIATE ═══ */
export const PARTENERIATE = [
  { title: "Complexul Energetic Oltenia", desc: "Partener strategic nr. 1. Practică directă în centralele din Turceni și Rovinari. Zeci de absolvenți angajați anual.", tag: "Partener strategic", color: "#1f3b5b", glowColor: "#00e5ff" },
  { title: "Club Robotică LTT", desc: "Competiții naționale, laborator cu Arduino, Raspberry Pi și imprimantă 3D.", tag: "Excelență", color: "#27ae60", glowColor: "#76ff03" },
  { title: "Proiecte Erasmus+", desc: "4 proiecte în ultimii 5 ani. Mobilități în Italia, Spania, Portugalia, Turcia.", tag: "Internațional", color: "#f26b00", glowColor: "#ff9100" },
  { title: "Primăria Turceni", desc: "Colaborare pentru infrastructură, burse de merit și stagii de practică.", tag: "Comunitate", color: "#2aa198", glowColor: "#1de9b6" },
];

/* ═══ TESTIMONIALE ═══ */
export const TESTIMONIALE = [
  { text: "LTT mi-a oferit baza carierei. Profesorii de electronică m-au învățat să gândesc practic. Astăzi lucrez la CEO.", author: "Alexandru M.", role: "Absolvent 2018, inginer la CEO" },
  { text: "Ca părinte, apreciez implicarea profesorilor. Fiul meu a descoperit pasiunea pentru robotică aici.", author: "Maria D.", role: "Părinte" },
  { text: "Practica în ateliere m-a pregătit pentru lumea reală. Am fost angajat înainte să termin liceul.", author: "Andrei P.", role: "Absolvent 2024, Școala Profesională" },
  { text: "Erasmus+ mi-a deschis orizonturi. Am fost în Italia și Spania, am lucrat cu elevi din alte țări.", author: "Elena S.", role: "Elevă clasa a XII-a, Filologie" },
];

/* ═══ EXAMENE ═══ */
export const EXAMENE = {
  bac: { title: "Bacalaureat 2027", items: ["Simulare: 22-25 martie 2027", "Competențe: 12-23 aprilie 2027", "Probe scrise: 14-18 iunie 2027", "Rezultate inițiale: 23 iunie 2027", "Sursa: OM 5211/2026 (MO nr. 758/07.09.2026)"] },
  evaluare: { title: "Evaluare Națională 2027", items: ["Limba română: 22 iunie 2027", "Matematică: 24 iunie 2027", "Limba maternă: 25 iunie 2027", "Simulare: 16-18 martie 2027", "Date din proiectul de ordin - forma finală se aprobă prin ordin de ministru"] },
  rezultate: { title: "Rezultate recente", items: ["Evaluare Națională 2025: media 7.20", "Locuri fruntașe la concursuri naționale de robotică", "Rezultate BAC complete: bacplus.ro"] },
};

/* ═══ ADMITERE ═══ */
export const ADMITERE = {
  documente: ["Cerere de înscriere (de la secretariat)", "Certificat de naștere — copie (certificată conform cu originalul la secretariat)", "Foaie matricolă V-VIII — original", "Fișa medicală — original", "Carte de identitate — copie", "Adeverință absolvire cls. VIII", "2 fotografii tip buletin"],
};

/** Calendar orientativ al admiterii; anul se calculează la randare. */
export function calendarAdmitere(an: number = anAdmitere()) {
  return [
    { data: `Iunie ${an}`, eveniment: "Evaluare Națională" },
    { data: `Iulie ${an}`, eveniment: "Repartizare computerizată - etapa I" },
    { data: `Iulie - August ${an}`, eveniment: "Etapa a II-a de admitere" },
    { data: `Septembrie ${an}`, eveniment: "Începerea cursurilor" },
  ];
}

/* ═══ TRANSPARENȚĂ ═══ */
export const TRANSPARENTA = [
  "ROF — Regulament de organizare și funcționare",
  "RI — Regulament intern",
  "PDI — Plan de dezvoltare instituțională",
  "Plan managerial anual",
  "RAEI — Raport de evaluare internă a calității",
  "Raport de evaluare externă ARACIP",
  "Raport de activitate anual",
  "Execuție bugetară",
  "Bugetul instituției",
  "Hotărâri Consiliul de Administrație",
  "Declarații de avere și interese",
  "Informații de interes public (Legea 544/2001)",
  "Politica GDPR — Protecția datelor personale",
  "Mobilitatea personalului didactic",
  "Organigrama instituției",
  "Codul de etică",
  "Plan de școlarizare",
  "Proceduri operaționale",
];

/* ═══ GALERIE ═══ */
export const GALERIE_CATEGORII = [
  { slug: "laboratoare", label: "Laboratoare", emoji: "🔬", desc: "Fizică, chimie, informatică, electronică.",
    imagini: ["02_laboratoare/Lab_fizica_1.jpg", "02_laboratoare/Lab_chimie_1.jpg", "02_laboratoare/Lab_informatica_1.jpg", "02_laboratoare/Lab_electronica_1.jpg"] },
  { slug: "ateliere", label: "Ateliere", emoji: "⚙️", desc: "Mecanică, electromecanică, sudură.",
    imagini: ["03_ateliere/Atelier_mecanica_1.jpg", "03_ateliere/Atelier_electromecanica_1.jpg", "03_ateliere/Atelier_sudura_1.jpg"] },
  { slug: "club-robotica", label: "Club Robotică", emoji: "🤖", desc: "Roboți, Arduino, competiții.",
    imagini: ["04_club_robotica/Club_robotica_1.jpg", "04_club_robotica/Club_robotica_2.jpg", "04_club_robotica/Imprimanta_3D_1.jpg"] },
  { slug: "evenimente", label: "Evenimente", emoji: "🎭", desc: "Festivități, concursuri.",
    imagini: ["06_evenimente/Festivitate_absolvire_1.jpg", "06_evenimente/Porti_deschise_1.jpg", "06_evenimente/Olimpiada_1.jpg"] },
  { slug: "sport", label: "Sport", emoji: "⚽", desc: "Sala de sport, teren, competiții.",
    imagini: ["05_sport/Sala_sport_1.jpg", "05_sport/Teren_sport_1.jpg", "05_sport/Competitie_sport_1.jpg"] },
  { slug: "erasmus", label: "Erasmus+", emoji: "🌍", desc: "Mobilități internaționale.",
    imagini: ["07_erasmus/Erasmus_Italia_1.jpg", "07_erasmus/Erasmus_Spania_1.jpg", "07_erasmus/Erasmus_grup_1.jpg"] },
];

/* ═══ EVENIMENTE CALENDAR (fallback static) ═══ */
export const EVENIMENTE_STATICE = [
  { date: "2026-09-07", title: "Începutul anului școlar 2026-2027", type: "eveniment", description: "Prima zi de cursuri (OM 3194/2026)." },
  { date: "2026-10-24", title: "Vacanța de toamnă", type: "vacanta", description: "24 octombrie - 1 noiembrie 2026." },
  { date: "2026-11-02", title: "Reluarea cursurilor - modulul 2", type: "eveniment", description: null },
  { date: "2026-12-23", title: "Vacanța de iarnă", type: "vacanta", description: "23 decembrie 2026 - 10 ianuarie 2027." },
  { date: "2027-01-11", title: "Reluarea cursurilor - modulul 3", type: "eveniment", description: null },
  { date: "2027-02-22", title: "Vacanța din februarie (Gorj)", type: "vacanta", description: "22 - 28 februarie 2027, conform grupării publicate. De verificat decizia ISJ Gorj." },
  { date: "2027-03-22", title: "Simulare Bacalaureat 2027", type: "examen", description: "22 - 25 martie 2027." },
  { date: "2027-04-12", title: "Bacalaureat 2027 - probele de competențe", type: "examen", description: "12 - 23 aprilie 2027." },
  { date: "2027-04-24", title: "Vacanța de primăvară", type: "vacanta", description: "24 aprilie - 4 mai 2027." },
  { date: "2027-06-04", title: "Ultima zi de cursuri - clasa a XII-a", type: "administrativ", description: null },
  { date: "2027-06-14", title: "Bacalaureat 2027 - probele scrise", type: "examen", description: "14 - 18 iunie 2027." },
  { date: "2027-06-18", title: "Încheierea cursurilor", type: "administrativ", description: "Pentru majoritatea claselor. Filiera tehnologică: 25 iunie 2027, cu excepțiile din ordin." },
  { date: "2027-06-22", title: "Evaluare Națională 2027", type: "examen", description: "22 - 25 iunie 2027, conform proiectului de calendar." },
];
