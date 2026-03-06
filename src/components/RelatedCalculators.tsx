import Link from "next/link";

interface RelatedCalc {
  name: string;
  href: string;
  description: string;
}

export default function RelatedCalculators({
  calculators,
}: {
  calculators: RelatedCalc[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-5">
      <h3 className="font-bold text-[var(--color-primary)] mb-3">
        Related Calculators
      </h3>
      <ul className="space-y-3">
        {calculators.map((calc) => (
          <li key={calc.href}>
            <Link
              href={calc.href}
              className="block group hover:bg-gray-50 rounded-lg p-2 -mx-2 transition-colors"
            >
              <span className="font-medium text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                {calc.name}
              </span>
              <span className="block text-xs text-[var(--color-text-light)] mt-0.5">
                {calc.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
