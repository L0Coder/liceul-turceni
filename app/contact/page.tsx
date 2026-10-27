import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Metadata } from "next";
import { AnimatedSection, SectionHeader } from "@/components/ui/SectionHeader";
import { FormularContact } from "@/components/ui/FormularContact";
import { HartaGoogle } from "@/components/ui/HartaGoogle";
import { CONTACT } from "@/lib/constants";
import { PaginaAntet } from "@/components/ui/PaginaAntet";

export const metadata: Metadata = { title: "Contact", description: "Contactează Liceul Tehnologic Turceni." };

const info: { label: string; value: string; href?: string }[] = [
  { label: "Adresă", value: CONTACT.adresa },
  { label: "Telefon", value: CONTACT.telefon, href: "tel:+40253335012" },
  { label: "Fax", value: CONTACT.fax },
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "Program", value: CONTACT.program },
  { label: "Director", value: CONTACT.director },
];

export default function ContactPage() {
  return (
    <div className="pt-28">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PaginaAntet eticheta="Secretariat" titlu="Contact" subtitlu="Ne găsiți la secretariat, la telefon sau pe email." />
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20">
          <AnimatedSection>
            <SectionHeader label="Date de contact" title="Secretariatul" />
            <dl className="border-t border-line">
              {info.map(it => (
                <div key={it.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4 border-b border-line">
                  <dt className="ltt-kicker !text-[10px] text-ink-soft pt-1">{it.label}</dt>
                  <dd className="font-body text-[15px] text-ink">{it.href ? <a href={it.href} className="hover:underline underline-offset-4">{it.value}</a> : it.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <SectionHeader label="Scrie-ne" title="Trimite un mesaj" />
            <FormularContact />
          </AnimatedSection>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 px-6 ltt-nuanta">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader label="Hartă" title="Unde ne găsești" />
            <HartaGoogle />
            <p className="font-body text-[13px] text-ink-soft mt-3">
              Str. Educației nr. 1, Turceni 217520, Județul Gorj — pe DN66
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
