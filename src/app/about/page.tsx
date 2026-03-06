import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About CalcWise",
  description:
    "Learn about CalcWise — free online financial calculators built to help you make smarter financial decisions.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        About CalcWise
      </h1>

      <div className="prose prose-sm max-w-none text-[var(--color-text)] space-y-6">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            Our Mission
          </h2>
          <p>
            CalcWise was created with a simple mission: to provide free,
            accurate, and easy-to-use financial calculators that help everyone
            make better financial decisions.
          </p>
          <p>
            Whether you&apos;re buying your first home, planning for retirement,
            comparing loan offers, or simply trying to figure out how much to
            tip at a restaurant, CalcWise has the tools you need — no sign-up,
            no fees, no hidden agenda.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            Why CalcWise?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mt-4">
            <div className="bg-white p-5 rounded-lg border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                Accurate & Transparent
              </h3>
              <p className="text-sm text-[var(--color-text-light)]">
                Our calculators use industry-standard financial formulas. We
                explain how every calculation works so you understand the math
                behind the results.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                100% Free
              </h3>
              <p className="text-sm text-[var(--color-text-light)]">
                All of our calculators are completely free to use. We cover our
                costs through non-intrusive advertising, so you never have to
                pay a cent.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                Private & Secure
              </h3>
              <p className="text-sm text-[var(--color-text-light)]">
                All calculations happen in your browser. We never see, store, or
                transmit your financial data. Your numbers stay on your device.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-[var(--color-border)]">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                No Bias
              </h3>
              <p className="text-sm text-[var(--color-text-light)]">
                Unlike bank calculators that push you toward their products,
                CalcWise is independent. We provide unbiased results with no
                hidden agenda.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            Our Calculators
          </h2>
          <p>
            CalcWise offers a growing library of calculators across multiple
            categories:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Mortgage Calculators</strong> — Payment estimates,
              affordability, refinancing analysis
            </li>
            <li>
              <strong>Loan Calculators</strong> — Auto loans, personal loans,
              credit card payoff planning
            </li>
            <li>
              <strong>Investment Calculators</strong> — Compound interest,
              retirement planning, savings growth
            </li>
            <li>
              <strong>Tax Calculators</strong> — Income tax estimates, paycheck
              breakdown
            </li>
            <li>
              <strong>Business Calculators</strong> — Profit margins, ROI,
              break-even analysis
            </li>
            <li>
              <strong>Everyday Calculators</strong> — Tips, percentages, salary
              conversion, BMI
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            Important Disclaimer
          </h2>
          <p>
            CalcWise provides calculators for informational and educational
            purposes only. Our tools produce estimates and should not be
            considered professional financial, tax, or legal advice. Always
            consult with a qualified financial professional before making
            important financial decisions.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            Contact Us
          </h2>
          <p>
            Have a question, suggestion, or found an error? We&apos;d love to
            hear from you:
          </p>
          <p className="mt-2">
            <strong>General Inquiries:</strong> hello@calcwise.com
            <br />
            <strong>Privacy Questions:</strong> privacy@calcwise.com
            <br />
            <strong>Partnerships:</strong> partners@calcwise.com
          </p>
        </section>
      </div>
    </div>
  );
}
