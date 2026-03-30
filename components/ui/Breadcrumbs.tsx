import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs = [{ label: "Acasă", href: "/" }, ...items];

  // Schema.org BreadcrumbList for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://liceul-turceni.vercel.app${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 pt-4 -mb-4">
        <ol className="flex flex-wrap items-center gap-1 font-body text-xs text-gray-400 dark:text-dark-subtle">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-300 dark:text-dark-border">›</span>}
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href} className="hover:text-brand-teal transition-colors">{c.label}</Link>
              ) : (
                <span className="text-gray-500 dark:text-dark-muted">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
