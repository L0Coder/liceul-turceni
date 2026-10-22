import Link from "next/link";
import { AnimatedSection } from "./SectionHeader";
import { PROFILE_ADMITERE, FILIERA } from "@/lib/data";
import { DESEN_PROFIL } from "@/components/home/Desene";

/** Profilurile cu admitere ca grilă de fișe, fiecare cu desenul ei; duc la /oferta#profil. */
export function GrilaProfiluri() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-line">
      {PROFILE_ADMITERE.map((p, i) => {
        const Desen = DESEN_PROFIL[p.slug];
        return (
          <AnimatedSection key={p.slug} delay={i * 0.05} className="border-r border-b border-line">
            <Link href={`/oferta#${p.slug}`} className="group flex flex-col h-full p-6 hover:bg-ink/[0.03] transition-colors">
              {Desen && <Desen className="w-20 text-ink" />}
              <span className="ltt-kicker ltt-accent !text-[10px] mt-5">{FILIERA[p.slug]}</span>
              <span className="font-heading text-xl text-ink mt-2 leading-snug group-hover:underline underline-offset-4 decoration-1">{p.title}</span>
            </Link>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
