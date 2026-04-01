import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { GlowCard } from "@/components/ui/GlowCard";
import { AnimatedSection } from "@/components/ui/SectionHeader";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = { title: "Contact", description: "Contactează Liceul Tehnologic Turceni." };

const info = [
  { icon: "📍", label: "Adresă", value: CONTACT.adresa },
  { icon: "📞", label: "Telefon", value: CONTACT.telefon },
  { icon: "📠", label: "Fax", value: CONTACT.fax },
  { icon: "✉️", label: "Email", value: CONTACT.email },
  { icon: "🕐", label: "Program", value: CONTACT.program },
  { icon: "👤", label: "Director", value: CONTACT.director },
];

export default function ContactPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #1f3b5b 0%, #2980b9 50%, #1a6e5e 100%)" }}>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
        <p className="font-body text-lg text-white/70 max-w-xl mx-auto">Suntem aici pentru tine.</p>
      </section>
      <section className="py-20 px-6 bg-[#fafbfd] dark:bg-dark-bg">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection><GlowCard glowColor="#00e5ff" className="h-full">
            <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-6">Informatii de contact</h2>
            {info.map((it, i) => (
              <div key={i} className="font-body text-sm py-3 flex gap-3 border-b border-gray-100 dark:border-dark-border last:border-0">
                <span className="text-lg flex-shrink-0">{it.icon}</span>
                <div><div className="font-semibold text-gray-900 dark:text-dark-text mb-0.5">{it.label}</div><div className="text-gray-500 dark:text-dark-muted">{it.value}</div></div>
              </div>
            ))}
          </GlowCard></AnimatedSection>
          <AnimatedSection delay={0.15}><GlowCard glowColor="#ff9100" className="h-full">
            <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-dark-text mb-6">Trimite un mesaj</h2>
            {/* 
              FORMSPREE: Inlocuieste FORM_ID_AICI cu codul tau de pe formspree.io
              Exemplu: daca ID-ul e xpzvqkld, pune https://formspree.io/f/xpzvqkld
            */}
            <form action="https://formspree.io/f/FORM_ID_AICI" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-body text-[13px] font-semibold text-gray-900 dark:text-dark-text mb-1.5">Nume complet</label>
                <input type="text" id="name" name="name" required placeholder="Numele dvs."
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text font-body text-sm outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-[13px] font-semibold text-gray-900 dark:text-dark-text mb-1.5">Email</label>
                <input type="email" id="email" name="email" required placeholder="email@exemplu.ro"
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text font-body text-sm outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              <div>
                <label htmlFor="_subject" className="block font-body text-[13px] font-semibold text-gray-900 dark:text-dark-text mb-1.5">Subiect</label>
                <input type="text" id="_subject" name="_subject" required placeholder="Subiectul mesajului"
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text font-body text-sm outline-none focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              <div>
                <label htmlFor="message" className="block font-body text-[13px] font-semibold text-gray-900 dark:text-dark-text mb-1.5">Mesaj</label>
                <textarea id="message" name="message" rows={4} required placeholder="Scrie mesajul..."
                  className="w-full px-4 py-3 rounded-[10px] border border-gray-200 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text font-body text-sm outline-none resize-y focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/10" />
              </div>
              {/* Anti-spam honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit"
                className="w-full py-3.5 rounded-[10px] bg-brand-accent text-white font-body text-[15px] font-semibold hover:bg-brand-accent-light transition-all cursor-pointer">
                Trimite mesajul
              </button>
            </form>
          </GlowCard></AnimatedSection>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 px-6 bg-[#fef9f3] dark:bg-dark-card">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-dark-text mb-6 text-center">Unde ne găsești</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=44.681853677773404,23.37467370552185&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Liceului Tehnologic Turceni pe Google Maps"
                className="w-full"
              />
            </div>
            <p className="font-body text-xs text-gray-400 dark:text-dark-subtle text-center mt-3">
              Str. Educației nr. 1, Turceni 217520, Județul Gorj — pe DN66
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
