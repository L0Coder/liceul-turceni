import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Informații despre cookies utilizate pe site-ul Liceului Tehnologic Turceni.",
};

export default function CookiesPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Politica de cookies" }]} />
      <PaginaAntet eticheta="Legal" titlu="Politica de cookies" />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Ce sunt cookies?</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Cookies sunt fișiere text mici stocate pe dispozitivul dvs. atunci când vizitați un site web. Acestea permit site-ului să funcționeze corect și să rețină anumite preferințe.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Ce cookies folosim?</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-paper-2 border-l-2 border-ink/40">
                    <h3 className="ltt-kicker !text-[11px] text-ink mb-2">Preferințe păstrate în browser (strict necesare)</h3>
                    <p className="font-body text-xs text-ink-soft">
                      Site-ul nu setează cookies proprii. Două preferințe se păstrează în stocarea locală a browserului și nu sunt transmise liceului. Sunt strict necesare și nu necesită consimțământ.
                    </p>
                    <div className="mt-2 font-body text-xs text-ink-soft">
                      <code className="bg-paper-2 px-1 rounded">ltt-cookie-consent</code> — răspunsul dat bannerului de cookies.
                      <code className="bg-paper-2 px-1 rounded ml-1">ltt-dark-mode</code> — modul de afișare ales (luminos sau întunecat).
                    </div>
                  </div>

                  <div className="p-5 bg-paper-2 border-l-2 border-ink/40">
                    <h3 className="ltt-kicker !text-[11px] text-ink mb-2">Cookies funcționale</h3>
                    <p className="font-body text-xs text-ink-soft">
                      Îmbunătățesc experiența de navigare. Se activează doar cu consimțământul dvs.
                    </p>
                    <div className="mt-2 font-body text-xs text-ink-soft">
                      În prezent, site-ul nu folosește cookies funcționale suplimentare.
                    </div>
                  </div>

                  <div className="p-5 bg-paper-2 border-l-2 border-ink/40">
                    <h3 className="ltt-kicker !text-[11px] text-ink mb-2">Cookies de analiză</h3>
                    <p className="font-body text-xs text-ink-soft">
                      În prezent, site-ul <strong>nu folosește</strong> servicii de analiză (Google Analytics, Plausible sau altele). Dacă în viitor se va implementa un serviciu de analiză, această pagină va fi actualizată.
                    </p>
                  </div>

                  <div className="p-5 bg-paper-2 border-l-2 border-ink/40">
                    <h3 className="ltt-kicker !text-[11px] text-ink mb-2">Cookies de marketing</h3>
                    <p className="font-body text-xs text-ink-soft">
                      Site-ul <strong>nu folosește</strong> cookies de marketing sau publicitate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Cookies de la terți</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Harta Google de pe pagina Contact se încarcă numai dacă apăsați „Afișează harta”; după afișare, Google poate folosi cookies proprii, potrivit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="ltt-accent underline underline-offset-2 hover:decoration-2">politicii Google</a>. La trimiterea unui mesaj prin formularul de contact, datele ajung la serviciul Formspree, potrivit politicii acestuia. Panoul de administrare (/studio), folosit doar de administratorii site-ului, folosește cookies pentru autentificare.
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Cum dezactivezi cookies?</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Puteți controla și șterge cookies din setările browser-ului dvs. Rețineți că dezactivarea cookies poate afecta funcționalitatea site-ului (de exemplu, preferința pentru modul luminos sau întunecat nu va fi salvată).
                </p>
              </div>

              <div className="bg-paper rounded-sm border border-line p-6">
                <h2 className="font-heading text-xl font-bold text-ink mb-4">Contact</h2>
                <p className="font-body text-sm text-ink-soft leading-relaxed">
                  Pentru întrebări despre cookies: Liceul Tehnologic Turceni, Tel: <a href="tel:+40253335012" className="ltt-accent underline underline-offset-2 hover:decoration-2">0253-335012</a>, Email: <a href="mailto:licturceni@yahoo.com" className="ltt-accent underline underline-offset-2 hover:decoration-2">licturceni@yahoo.com</a>.
                </p>
              </div>

              <p className="font-body text-xs text-ink-soft text-center">Ultima actualizare: octombrie 2026</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
