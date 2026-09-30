import { PROGRAM_ORE, graficOre } from "@/lib/constants";

/** Programul orelor pentru gimnaziu și liceu — generat din PROGRAM_ORE (lib/constants.ts). */
export function ProgramOre() {
  const ore = graficOre();
  return (
    <section className="py-16 px-6 bg-[#fafbfd] dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-gray-900 dark:text-dark-text mb-3">Programul orelor</h2>
        <p className="font-body text-[15px] text-gray-600 dark:text-dark-muted leading-relaxed mb-6">
          Gimnaziu și liceu, numai dimineața. Orele durează {PROGRAM_ORE.durata} de minute, cu pauze de {PROGRAM_ORE.pauza} minute.
          Majoritatea zilelor au 6 sau 7 ore, mai rar 5.
        </p>
        <div className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-dark-border overflow-hidden">
          <table className="w-full font-body text-sm">
            <caption className="sr-only">Intervalul fiecărei ore de curs</caption>
            <thead>
              <tr className="bg-gray-50 dark:bg-dark-border/40 text-left">
                <th scope="col" className="px-5 py-3 font-semibold text-gray-900 dark:text-dark-text">Ora</th>
                <th scope="col" className="px-5 py-3 font-semibold text-gray-900 dark:text-dark-text">Interval</th>
              </tr>
            </thead>
            <tbody>
              {ore.map((o) => (
                <tr key={o.nr} className="border-t border-gray-100 dark:border-dark-border">
                  <th scope="row" className="px-5 py-2.5 text-left font-semibold text-gray-900 dark:text-dark-text">{o.nr}</th>
                  <td className="px-5 py-2.5 text-gray-600 dark:text-dark-muted tabular-nums">{o.de} – {o.pana}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-sm text-gray-600 dark:text-dark-muted mt-4">
          Ultima oră se încheie la {ore[4].pana} (5 ore), {ore[5].pana} (6 ore) sau {ore[6].pana} (7 ore).
        </p>
      </div>
    </section>
  );
}
