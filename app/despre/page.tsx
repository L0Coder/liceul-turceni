import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeader, AnimatedSection } from "@/components/ui/SectionHeader";
import { CONDUCERE } from "@/lib/constants";
import { fetchSettings } from "@/lib/fetcher";
import { ButonCerneala, LinkSubliniat } from "@/components/ui/Buton";
import { DesenScoala } from "@/components/home/Desene";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Istoria și prezentarea Liceului Tehnologic Turceni, înființat în 1982: niveluri de școlarizare, repere istorice, echipa de conducere.",
};

// Cifrele vin din CMS (Setări site), ca pe homepage.
export const revalidate = 60;

const repere = [
  { an: "1982", text: "Înființarea liceului la 1 septembrie, ca necesitate de instruire a salariaților termocentralei Turceni și de asigurare a forței de muncă viitoare." },
  { an: "1990", text: "Reorganizare post-revoluție. Diversificarea ofertei educaționale cu profiluri teoretice alături de cele tehnice." },
  { an: "2000+", text: "Dezvoltarea parteneriatelor cu Complexul Energetic Oltenia. Introducerea proiectelor Erasmus+ și a mobilităților internaționale." },
  { an: "2012", text: "Redenumirea oficială în Liceul Tehnologic Turceni, conform noii legislații a învățământului." },
  { an: "2016", text: "Locul II la concursul național de educație ecologică Școala Zero Waste - premiu pentru implicarea în protecția mediului." },
  { an: "2020+", text: "Înființarea Clubului de Robotică. Participare la concursuri naționale. Elevă finalistă la competiția Solve for Tomorrow (Samsung România)." },
  { an: "2025", text: "Finalizarea proiectului PNRR de dotare cu mobilier, materiale didactice și echipamente digitale (Contract nr. 1856DOT/31.08.2023). Dotare completă: laptopuri, table interactive, mobilier modern, imprimante, scannere." },
  { an: "2026", text: "Mobilitate Erasmus+ în Grecia (septembrie–octombrie). Școala profesională intră în lichidare: din anul școlar 2026–2027 nu se mai fac înscrieri în clasa a IX-a profesională." },
];

const niveluri = [
  "Învățământ preșcolar (grădiniță) - Turceni și structura Strâmba-Jiu",
  "Învățământ primar (clasele pregătitoare - IV) - Turceni și structura Strâmba-Jiu",
  "Învățământ gimnazial (clasele V - VIII)",
  "Liceu teoretic - Matematică-Informatică, Științe ale Naturii, Filologie Bilingv Engleză",
  "Liceu tehnologic - Mecanică, Electronică și automatizări, Electromecanică; Construcții instalații doar în clasele mai mari, fără clasă a IX-a în 2026–2027",
  "Școală profesională - În lichidare: doar clasele a X-a și a XI-a (sudor, electromecanic centrale electrice), fără înscrieri noi în clasa a IX-a",
];

export default async function DesprePage() {
  const settings = await fetchSettings();
  const cifre = [
    { nr: String(settings.eleviCount), label: `Elevi în anul școlar ${settings.anScolar}` },
    { nr: String(settings.cadreCount), label: "Cadre didactice" },
    { nr: String(settings.profileCount), label: "Profiluri de liceu, teoretic și tehnologic" },
    { nr: settings.aniExcelenta, label: "Ani școlari, din 1982–1983 până azi" },
  ];
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Despre noi" }]} />
      <PaginaAntet eticheta="Din 1982" titlu="Despre noi" subtitlu="Un liceu complet pentru Turceni și satele din jur: de la grădiniță până la bacalaureat și certificat de calificare." />

      {/* Intro */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.15fr] gap-14 md:gap-20 items-start">
          <AnimatedSection className="text-ink">
            <DesenScoala className="w-full max-w-md" />
            <p className="font-heading italic text-3xl md:text-4xl text-ink leading-snug mt-8">Carte și meserie, sub același acoperiș.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="font-body text-[16px] text-ink-soft leading-[1.9] space-y-5">
            <p className="first-letter:font-heading first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:text-ink">
              Liceul Tehnologic Turceni a fost înființat la <strong className="text-ink font-medium">1 septembrie 1982</strong>, ca o necesitate de instruire a elevilor și a salariaților termocentralei Turceni, cu scopul de a asigura forța de muncă calificată pentru industria energetică a zonei.
            </p>
            <p>
              De-a lungul a peste patru decenii, liceul a evoluat de la o instituție industrială la un centru educațional complet, cu profiluri atât teoretice cât și tehnice, școlarizând elevi din Turceni și din localitățile învecinate ale județului Gorj.
            </p>
            <p>
              Astăzi, liceul este situat în zona centrală a orașului și oferă educație de la grădiniță până la liceu, cu <strong className="text-ink font-medium">{settings.eleviCount} de elevi</strong> și <strong className="text-ink font-medium">{settings.cadreCount} de cadre didactice</strong>.
            </p>
            <p>
              În 2025, liceul a beneficiat de un proiect PNRR în valoare de <strong className="text-ink font-medium">2.163.924 lei</strong> pentru dotarea cu mobilier modern, laptopuri, table interactive, imprimante multifuncționale și scannere, modernizând laboratoarele de informatică, chimie, fizică, biologie, atelierele și sala de sport.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cifre */}
      <section className="py-16 md:py-20 px-6 border-y border-line ltt-nuanta">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {cifre.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.06}>
              <div className="font-heading text-5xl md:text-6xl text-ink leading-none">{c.nr}</div>
              <p className="font-body text-[13px] text-ink-soft mt-3 max-w-[14rem]">{c.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Niveluri de școlarizare */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12">
          <AnimatedSection><SectionHeader label="Structură" title="Niveluri de școlarizare" /></AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ol className="border-t border-line">
              {niveluri.map((n, i) => {
                const [nivel, detalii] = n.split(" - ");
                return (
                  <li key={i} className="grid grid-cols-[3rem_1fr] gap-4 py-5 border-b border-line">
                    <span className="font-heading ltt-accent">{String(i + 1).padStart(2, "0")}</span>
                    <div><div className="font-heading text-xl text-ink">{nivel}</div>{detalii && <div className="font-body text-[14px] text-ink-soft mt-1">{detalii}</div>}</div>
                  </li>
                );
              })}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* Repere istorice */}
      <section className="py-20 md:py-24 px-6 ltt-nuanta">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12">
          <AnimatedSection><SectionHeader label="Istorie" title="Repere istorice" subtitle="Patru decenii, pe scurt." /></AnimatedSection>
          <ol className="relative border-l border-line ml-2">
            {repere.map((r, i) => (
              <AnimatedSection key={r.an} delay={i * 0.05}>
                <li className="relative pl-8 pb-10 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full bg-accent-2" />
                  <div className="font-heading text-3xl text-ink">{r.an}</div>
                  <p className="font-body text-[15px] text-ink-soft leading-relaxed mt-2 max-w-xl">{r.text}</p>
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>
      </section>

      {/* Conducere */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12">
          <AnimatedSection><SectionHeader label="Conducere" title="Echipa de conducere" /></AnimatedSection>
          <AnimatedSection delay={0.1}>
            <ul className="border-t border-line">
              {CONDUCERE.map(p => (
                <li key={p.nume} className="flex gap-6 items-center py-6 border-b border-line">
                  <span aria-hidden="true" className="w-16 h-16 border border-line bg-paper-2 grid place-items-center font-heading text-3xl text-ink flex-shrink-0">{p.nume.charAt(0)}</span>
                  <div>
                    <div className="ltt-kicker ltt-accent !text-[10px]">{p.functie}</div>
                    <h3 className="font-heading text-2xl text-ink mt-1">{p.titlu} {p.nume}</h3>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8"><LinkSubliniat href="/profesori">Toate cadrele didactice</LinkSubliniat></div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-24 px-6 border-t border-line ltt-nuanta">
        <AnimatedSection className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-ink">Vino să ne cunoști.</h2>
            <p className="font-body text-[15px] text-ink-soft mt-4">
              Str. Educației nr. 1, Turceni · <a href="tel:+40253335012" className="hover:underline underline-offset-4">0253-335012</a> · <a href="mailto:licturceni@yahoo.com" className="hover:underline underline-offset-4">licturceni@yahoo.com</a>
            </p>
          </div>
          <ButonCerneala href="/contact">Pagina de contact</ButonCerneala>
        </AnimatedSection>
      </section>
    </div>
  );
}
