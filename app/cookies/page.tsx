import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Informații despre cookies utilizate pe site-ul Liceului Tehnologic Turceni.",
};

export default function CookiesPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Politica de cookies" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Politica de cookies</h1>
      </section>

      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Ce sunt cookies?</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Cookies sunt fișiere text mici stocate pe dispozitivul dvs. atunci când vizitați un site web. Acestea permit site-ului să funcționeze corect și să rețină anumite preferințe.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Ce cookies folosim?</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                    <h3 className="font-body text-sm font-bold text-green-800 dark:text-green-400 mb-2">Cookies strict necesare</h3>
                    <p className="font-body text-xs text-gray-600 dark:text-dark-muted">
                      Esențiale pentru funcționarea site-ului. Nu colectează date personale. Nu necesită consimțământ.
                    </p>
                    <div className="mt-2 font-body text-xs text-gray-500 dark:text-dark-subtle">
                      Exemplu: <code className="bg-gray-100 dark:bg-dark-border px-1 rounded">ltt-cookie-consent</code> — stochează alegerea dvs. privind cookies.
                      <code className="bg-gray-100 dark:bg-dark-border px-1 rounded ml-1">ltt-dark-mode</code> — preferința de dark/light mode.
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                    <h3 className="font-body text-sm font-bold text-blue-800 dark:text-blue-400 mb-2">Cookies funcționale</h3>
                    <p className="font-body text-xs text-gray-600 dark:text-dark-muted">
                      Îmbunătățesc experiența de navigare. Se activează doar cu consimțământul dvs.
                    </p>
                    <div className="mt-2 font-body text-xs text-gray-500 dark:text-dark-subtle">
                      În prezent, site-ul nu folosește cookies funcționale suplimentare.
                    </div>
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                    <h3 className="font-body text-sm font-bold text-amber-800 dark:text-amber-400 mb-2">Cookies de analiză</h3>
                    <p className="font-body text-xs text-gray-600 dark:text-dark-muted">
                      În prezent, site-ul <strong>nu folosește</strong> servicii de analiză (Google Analytics, Plausible sau altele). Dacă în viitor se va implementa un serviciu de analiză, această pagină va fi actualizată.
                    </p>
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                    <h3 className="font-body text-sm font-bold text-red-800 dark:text-red-400 mb-2">Cookies de marketing</h3>
                    <p className="font-body text-xs text-gray-600 dark:text-dark-muted">
                      Site-ul <strong>nu folosește</strong> cookies de marketing sau publicitate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Cookies de la terți</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Panoul de administrare (Sanity Studio) la adresa /studio folosește cookies proprii pentru autentificare. Formularul de contact (Formspree) poate seta cookies tehnice la trimiterea mesajului. Acestea sunt strict necesare pentru funcționarea serviciilor respective.
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Cum dezactivezi cookies?</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Puteți controla și șterge cookies din setările browser-ului dvs. Rețineți că dezactivarea cookies poate afecta funcționalitatea site-ului (de exemplu, preferința dark mode nu va fi salvată).
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-4">Contact</h2>
                <p className="font-body text-sm text-gray-600 dark:text-dark-muted leading-relaxed">
                  Pentru întrebări despre cookies: Liceul Tehnologic Turceni, Tel: <a href="tel:+40253335012" className="text-brand-teal hover:underline">0253-335012</a>, Email: <a href="mailto:licturceni@yahoo.com" className="text-brand-teal hover:underline">licturceni@yahoo.com</a>.
                </p>
              </div>

              <p className="font-body text-xs text-gray-400 dark:text-dark-subtle text-center">Ultima actualizare: martie 2026</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
