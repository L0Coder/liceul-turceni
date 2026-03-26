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
    color: "#f26b00", glowColor: "#ff9100", imagini: ["02_laboratoare/Lab_electronnica_1.jpg", "02_laboratoare/Lab_electronica_2.jpg"] },
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
    shortDesc: "Sudori și electromecanic centrale. Angajare garantată.",
    fullDesc: "Două specializări de 3 ani: Sudor și Electromecanic Centrale Electrice. Pregătire 70% practică. Rata de angajare: peste 90%.",
    discipline: ["Pregătire practică (70%)", "Sudură MIG/MAG/TIG", "Electromecanică", "Protecția muncii", "Matematică aplicată"],
    competente: ["Sudură în toate pozițiile", "Citire desene", "Montaj/demontaj", "Mentenanță", "Certificare profesională"],
    perspective: ["CEO — angajare directă", "Sudor certificat", "Mentenanță centrală", "Angajare în Europa"],
    color: "#d35400", glowColor: "#ff6d00", imagini: ["03_ateliere/Atelier_sudura_1.jpg", "11_parteneriate/CEO_centrala_1.jpg"] },
];

/* ═══ STATISTICI ═══ */
export const STATS = [
  { number: "1604", label: "Elevi înscriși", icon: "🎓", glowColor: "#00e5ff" },
  { number: "155", label: "Cadre didactice", icon: "👩‍🏫", glowColor: "#76ff03" },
  { number: "8", label: "Profile educaționale", icon: "📚", glowColor: "#00b0ff" },
  { number: "60+", label: "Ani de excelență", icon: "🏆", glowColor: "#ffd600" },
];

/* ═══ NOUTĂȚI ═══ */
export interface Noutate { slug: string; date: string; category: string; title: string; excerpt: string; content: string; image?: string; glowColor: string; }

export const NOUTATI: Noutate[] = [
  { slug: "inscrieri-2026-2027", date: "15 Martie 2026", category: "Admitere", title: "Înscrierile pentru anul școlar 2026-2027 sunt deschise",
    excerpt: "Depuneți dosarele la secretariat între orele 8:00-16:00.",
    content: "Înscrierile pentru anul școlar 2026-2027 sunt deschise. Depuneți dosarele la secretariatul liceului, Str. Educației nr. 1, între orele 8:00-16:00. Lista documentelor este disponibilă pe pagina de Admitere.",
    image: "10_hero/Hero_admitere_1.jpg", glowColor: "#00e5ff" },
  { slug: "robotica-locul-2", date: "10 Martie 2026", category: "Eveniment", title: "Clubul de Robotică — locul II la regionale",
    excerpt: "Echipa LTT Robotics a obținut locul II la competiția regională din Craiova.",
    content: "Echipa LTT Robotics a obținut locul II la competiția regională de robotică din Craiova și s-a calificat la faza națională din mai.",
    image: "04_club_robotica/Club_robotica_3.jpg", glowColor: "#76ff03" },
  { slug: "simulari-bac-2026", date: "28 Februarie 2026", category: "Examen", title: "Calendarul simulărilor pentru BAC 2026",
    excerpt: "Simulările pentru Bacalaureat încep pe 18 martie.",
    content: "Simulările BAC 2026: 18 martie — Limba română, 19 martie — Matematică/Istorie, 20 martie — Proba profil, 21 martie — Competențe digitale.", glowColor: "#ff9100" },
  { slug: "erasmus-green-energy", date: "15 Februarie 2026", category: "Proiect", title: "Proiect Erasmus+ aprobat: 'Green Energy Schools'",
    excerpt: "Finanțare pentru un proiect de 2 ani focusat pe energie verde.",
    content: "Finanțare Erasmus+ pentru proiectul 'Green Energy Schools', 2 ani, mobilități în Italia și Spania pentru 20 elevi și 8 profesori.",
    image: "07_erasmus/Erasmus_activitate_1.jpg", glowColor: "#1de9b6" },
  { slug: "olimpiada-info", date: "1 Februarie 2026", category: "Olimpiadă", title: "3 elevi calificați la faza județeană — Informatică",
    excerpt: "Mihai P., Ana R. și Vlad C. s-au calificat cu rezultate remarcabile.",
    content: "Trei elevi s-au calificat la faza județeană a Olimpiadei de Informatică 2026. Le urăm succes!", glowColor: "#d500f9" },
  { slug: "ziua-portilor-deschise", date: "20 Ianuarie 2026", category: "Activitate", title: "Ziua Porților Deschise — 25 ianuarie 2026",
    excerpt: "Invităm elevii de clasa a VIII-a și părinții lor.",
    content: "Ziua Porților Deschise: 25 ianuarie, 9:00-14:00. Prezentări, tur ghidat, demonstrații robotică.",
    image: "06_evenimente/Porti_deschise_1.jpg", glowColor: "#00b0ff" },
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
  bac: { title: "Bacalaureat 2026", items: ["Simulare: 18-21 martie", "Examen: 16-19 iunie", "Rezultate: 26 iunie", "Contestații: 27-28 iunie", "Finale: 1 iulie"] },
  evaluare: { title: "Evaluare Națională 2026", items: ["Simulare: 25-27 martie", "Limba română: 23 iunie", "Matematică: 25 iunie", "Limba maternă: 27 iunie", "Rezultate: 2 iulie"] },
  rezultate: { title: "Rezultate recente", items: ["BAC 2025: 72% promovare", "EN 2025: media 7.2", "3 elevi faza națională Info", "2 elevi faza națională Chimie", "Locul II robotică regională"] },
};

/* ═══ ADMITERE ═══ */
export const ADMITERE = {
  documente: ["Cerere de înscriere (de la secretariat)", "Certificat de naștere — copie legalizată", "Foaie matricolă V-VIII — original", "Fișa medicală — original", "Carte de identitate — copie", "Adeverință absolvire cls. VIII", "2 fotografii tip buletin"],
  calendar: [
    { data: "Mai 2026", eveniment: "Ziua Porților Deschise" },
    { data: "Iunie 2026", eveniment: "Evaluare Națională" },
    { data: "Iulie 2026", eveniment: "Repartizare Etapa I" },
    { data: "August 2026", eveniment: "Repartizare Etapa II" },
    { data: "Septembrie 2026", eveniment: "Înmatriculare" },
  ],
};

/* ═══ TRANSPARENȚĂ ═══ */
export const TRANSPARENTA = [
  "Regulament de ordine interioară", "Hotărâri Consiliul de Administrație",
  "Declarații de avere și interese", "Informații publice (Legea 544/2001)",
  "Politica GDPR", "Mobilitatea personalului didactic",
  "Organigrama instituției", "Raport anual (RAEI)", "Bugetul instituției", "Codul de etică",
];

/* ═══ GALERIE ═══ */
export const GALERIE_CATEGORII = [
  { slug: "laboratoare", label: "Laboratoare", emoji: "🔬", desc: "Fizică, chimie, informatică, electronică.",
    imagini: ["02_laboratoare/Lab_fizica_1.jpg", "02_laboratoare/Lab_chimie_1.jpg", "02_laboratoare/Lab_informatica_1.jpg", "02_laboratoare/Lab_electronnica_1.jpg"] },
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
