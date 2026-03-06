import Breadcrumbs from "./Breadcrumbs";
import AdUnit from "./AdUnit";
import RelatedCalculators from "./RelatedCalculators";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  breadcrumbs: { name: string; href?: string }[];
  faq?: { question: string; answer: string }[];
  relatedCalculators?: { name: string; href: string; description: string }[];
  children: React.ReactNode;
  howItWorks?: string;
}

export default function CalculatorLayout({
  title,
  description,
  breadcrumbs,
  faq,
  relatedCalculators,
  children,
  howItWorks,
}: CalculatorLayoutProps) {
  const faqJsonLd = faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={breadcrumbs} />

      {/* Top ad - leaderboard */}
      <AdUnit slot="top-leaderboard" format="horizontal" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-3">
            {title}
          </h1>
          <p className="text-[var(--color-text-light)] text-lg mb-8">
            {description}
          </p>

          {/* Calculator widget */}
          <div className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 mb-8">
            {children}
          </div>

          {/* In-content ad */}
          <AdUnit slot="in-content" format="auto" />

          {/* How it works */}
          {howItWorks && (
            <section className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 mb-8">
              <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                How Is This Calculated?
              </h2>
              <div className="prose prose-sm max-w-none text-[var(--color-text)]">
                <p className="whitespace-pre-line">{howItWorks}</p>
              </div>
            </section>
          )}

          {/* FAQ section */}
          {faq && faq.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 mb-8">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
              />
              <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <details
                    key={i}
                    className="group border-b border-gray-100 pb-4 last:border-0"
                  >
                    <summary className="cursor-pointer font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                      {f.question}
                      <svg
                        className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <p className="mt-2 text-sm text-[var(--color-text-light)] leading-relaxed">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
            <strong>Disclaimer:</strong> This calculator provides estimates for
            informational purposes only and should not be considered financial
            advice. Results may vary based on your specific circumstances.
            Please consult a qualified financial professional for advice
            tailored to your situation.
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* Sidebar ad */}
            <AdUnit slot="sidebar-rect" format="rectangle" />

            {/* Related calculators */}
            {relatedCalculators && relatedCalculators.length > 0 && (
              <RelatedCalculators calculators={relatedCalculators} />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
