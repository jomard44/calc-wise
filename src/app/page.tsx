import Link from "next/link";
import { categories, calculators } from "@/lib/calculators";
import AdUnit from "@/components/AdUnit";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Free Online Finance
            <br />
            <span className="text-[var(--color-accent-light)]">
              Calculators & Tools
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Make smarter financial decisions with our accurate, easy-to-use
            calculators. Mortgage, loans, investments, taxes, and more — all
            free, no sign-up required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/mortgage-calculators/mortgage-calculator"
              className="bg-white text-[var(--color-primary)] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/investment-calculators/compound-interest-calculator"
              className="bg-white/10 border border-white/30 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Compound Interest
            </Link>
            <Link
              href="/tax-calculators/paycheck-calculator"
              className="bg-white/10 border border-white/30 font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
            >
              Paycheck Calculator
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ad unit */}
        <AdUnit slot="home-top" format="horizontal" />

        {/* Categories grid */}
        <section className="py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mt-1">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* All calculators */}
        <section
          id="calculators"
          className="py-12 border-t border-[var(--color-border)]"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">
            All Calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/${calc.categorySlug}/${calc.slug}`}
                className="bg-white rounded-lg border border-[var(--color-border)] p-4 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{calc.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-light)] mt-1 line-clamp-2">
                      {calc.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom ad */}
        <AdUnit slot="home-bottom" format="horizontal" />

        {/* Trust section - important for AdSense approval */}
        <section className="py-12 border-t border-[var(--color-border)]">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8 text-center">
            Why Trust CalcWise?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[var(--color-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Accurate Results</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                Our calculators use industry-standard financial formulas
                verified by finance professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[var(--color-secondary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">100% Free & Private</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                No sign-up required. Your data stays in your browser — we never
                store your financial information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[var(--color-accent)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Instant Calculations</h3>
              <p className="text-sm text-[var(--color-text-light)]">
                Get results in real-time. No waiting, no page reloads — just
                fast, reliable answers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
