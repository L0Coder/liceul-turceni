import Link from "next/link";
import { AnimatedSection } from "./SectionHeader";
import { PROFILE, FILIERA } from "@/lib/data";
import { DESEN_PROFIL } from "@/components/home/Desene";

/** Cele 8 profiluri ca grilă de fișe, fiecare cu desenul ei; duc la /oferta#profil. */
export function GrilaProfiluri({ fundal = "bg-paper-2" }: { fundal?: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
      {PROFILE.map((p, i) => {
        const Desen = DESEN_PROFIL[p.slug];
        return (
          <AnimatedSection key={p.slug} delay={i * 0.05} className={fundal}>
            <Link href={`/oferta#${p.slug}`} className="group flex flex-col h-full p-6 hover:bg-paper transition-colors">
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
