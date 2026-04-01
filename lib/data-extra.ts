/* ═══ FAQ ═══ */
export interface FAQItem { question: string; answer: string; category: "admitere" | "scoala" | "examene" | "general"; }

export const FAQ_DATA: FAQItem[] = [
  { category: "admitere", question: "Când încep înscrierile pentru admitere?", answer: "Înscrierile se fac conform calendarului MEN, de regulă în iulie. Ziua Porților Deschise: mai. Urmăriți pagina Admitere." },
  { category: "admitere", question: "Ce documente sunt necesare?", answer: "Cerere, certificat naștere (copie legalizată), foaie matricolă V-VIII, fișa medicală, CI copie, adeverință absolvire, 2 poze." },
  { category: "admitere", question: "Câte locuri sunt pe profil?", answer: "28 locuri/clasă. Numărul de clase variază anual (plan ISJ Gorj)." },
  { category: "admitere", question: "Există burse?", answer: "Da: burse de merit și burse sociale. Detalii la secretariat." },
  { category: "scoala", question: "Ce orar au elevii?", answer: "Două schimburi: dimineața (8:00-14:00) și după-amiaza (14:00-20:00)." },
  { category: "scoala", question: "Există activități extrașcolare?", answer: "Club Robotică, echipe sportive, Erasmus+, olimpiade, voluntariat." },
  { category: "scoala", question: "Cum funcționează Clubul de Robotică?", answer: "2 întâlniri/săptămână, laborator dedicat, Arduino, Raspberry Pi, imprimantă 3D, competiții naționale." },
  { category: "scoala", question: "Există cantină sau after-school?", answer: "Nu avem cantină proprie, dar sunt magazine alimentare în apropiere. Nu există after-school organizat." },
  { category: "scoala", question: "Elevii fac practică la firme?", answer: "Da. Profilurile tehnice și școala profesională fac practică la CEO și alți parteneri." },
  { category: "examene", question: "Care e rata de promovare la BAC?", answer: "Rezultatele variază de la an la an. Consultați bacplus.ro/i/liceul-tehnologic-turceni pentru statistici complete pe ani și specializări." },
  { category: "examene", question: "Când sunt simulările?", answer: "De regulă în martie. Datele exacte pe pagina Examene." },
  { category: "general", question: "Cum ajung la liceu?", answer: "Str. Educației nr. 1, Turceni. Pe DN66 sau transport public din Târgu Jiu." },
  { category: "general", question: "Cum contactez secretariatul?", answer: "Tel: 0253-335012, Email: licturceni@yahoo.com. Luni-Vineri, 8:00-16:00." },
  { category: "general", question: "Site-ul vechi mai funcționează?", answer: "Site-ul vechi a fost înlocuit. Toate informațiile sunt aici." },
];

/* ═══ BLOG ═══ */
export interface BlogPost { slug: string; title: string; date: string; author: string; authorRole: string; excerpt: string; content: string; category: string; image?: string; }

export const BLOG_POSTS: BlogPost[] = [
  { slug: "experienta-erasmus-italia", title: "Experiența mea Erasmus+ în Italia", date: "5 Martie 2026",
    author: "Elena S.", authorRole: "Elevă clasa a XII-a, Filologie",
    excerpt: "Două săptămâni în Roma m-au schimbat perspectiva.",
    content: "Am plecat în Italia cu emoții — era prima călătorie fără familie. Dar din momentul în care am ajuns la Fiumicino, totul a fost o aventură.\n\nAm lucrat alături de elevi din Spania, Portugalia și Turcia pe un proiect despre energia verde. Am vizitat o fermă solară, am construit maquete de turbine și am prezentat în fața unui juriu internațional.\n\nCe m-a impresionat cel mai mult? Că elevii din alte țări nu sunt diferiți de noi. Am legat prietenii care durează.\n\nCând m-am întors, încrederea mea în engleză crescuse enorm. Dar mai important, am înțeles că lumea e mult mai mică decât pare de pe băncile școlii din Turceni.",
    category: "Erasmus+", image: "07_erasmus/Erasmus_Italia_1.jpg" },
  { slug: "cum-am-construit-primul-robot", title: "Cum am construit primul nostru robot", date: "20 Februarie 2026",
    author: "Mihai P.", authorRole: "Elev clasa a XI-a, Mate-Info",
    excerpt: "De la un kit Arduino la concursurile naționale de robotică.",
    content: "Totul a început în octombrie, când profesorul ne-a arătat un videoclip de la First Tech Challenge. Am zis: 'Noi putem face asta?'\n\nPrimele luni au fost haotice. Nu știam să lipim, nu înțelegeam senzorii, iar codul C++ avea mai multe bug-uri decât linii.\n\nDar încet-încet am învățat. Ana s-a ocupat de mecanică, eu de programare, Vlad de electronică. Fiecare joi rămâneam până la 8 în laborator.\n\nCând robotul a funcționat autonom prima dată — a mers 3 metri și a ridicat un cub — am sărit toți de bucurie. La competiție am obținut un rezultat de care suntem mândri. Anul viitor vrem și mai mult.",
    category: "Club Robotică", image: "04_club_robotica/Club_robotica_2.jpg" },
  { slug: "o-zi-profil-mecanica", title: "O zi din viața unui elev la Mecanică", date: "10 Februarie 2026",
    author: "Andrei P.", authorRole: "Elev clasa a XII-a, Mecanică",
    excerpt: "De la ore de matematică la strung.",
    content: "Ziua începe la 7:30. Primele ore sunt de matematică — și la mecanică facem mate. Trebuie să calculez toleranțe, unghiuri, viteze.\n\nOrele 3 și 4 sunt cele care mă fac să vin cu plăcere: atelierul. Astăzi lucrăm la strung. Profesorul ne arată cum se fixează semifabricatul, cum se alege viteza.\n\nDupă pauză avem tehnologie și desen tehnic — e ca o altă limbă, dar fascinant.\n\nCe îmi place cel mai mult? La sfârșitul zilei am ceva concret în mână — o piesă pe care am făcut-o eu, de la zero.",
    category: "Viața la LTT", image: "03_ateliere/Atelier_mecanica_2.jpg" },
];
