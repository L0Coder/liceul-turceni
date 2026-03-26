import Link from "next/link";
import { QUICK_ACCESS } from "@/lib/constants";

export function QuickAccess() {
  return (
    <section className="bg-brand-primary-dark dark:bg-[#010409] relative z-10">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex justify-start lg:justify-center min-w-max">
          {QUICK_ACCESS.map((item, i) => (
            <Link key={item.label} href={item.href}
              className={`flex items-center gap-2.5 font-body text-[13px] font-medium text-white/70 px-5 py-4 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap ${i < QUICK_ACCESS.length - 1 ? "border-r border-white/10" : ""}`}>
              <span className="text-lg">{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
