import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "CalcWise terms of service — rules and guidelines for using our website and calculators.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        Terms of Service
      </h1>
      <p className="text-sm text-[var(--color-text-light)] mb-6">
        Last updated: March 6, 2026
      </p>

      <div className="prose prose-sm max-w-none text-[var(--color-text)] space-y-6">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using CalcWise (&quot;the Site&quot;), you agree to
            be bound by these Terms of Service. If you do not agree to these
            terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            2. Description of Service
          </h2>
          <p>
            CalcWise provides free online financial calculators and tools for
            informational and educational purposes. Our calculators include
            mortgage calculators, loan calculators, investment calculators, tax
            estimators, and other financial planning tools.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            3. Disclaimer — Not Financial Advice
          </h2>
          <p>
            <strong>
              CalcWise is not a financial advisor, tax professional, or licensed
              financial planner.
            </strong>{" "}
            The calculators, tools, content, and information provided on this
            Site are for general informational and educational purposes only.
          </p>
          <p>
            Results from our calculators are <strong>estimates only</strong> and
            should not be relied upon for making financial decisions. Actual
            results may vary based on specific circumstances, current market
            conditions, lender requirements, tax law changes, and other factors.
          </p>
          <p>
            <strong>
              We strongly recommend consulting a qualified financial advisor,
              tax professional, or other appropriate professional before making
              any financial decisions.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            4. Accuracy of Information
          </h2>
          <p>
            While we strive to provide accurate calculations and up-to-date
            information, we make no warranties or representations about the
            accuracy, completeness, or reliability of any information on the
            Site. Tax brackets, interest rates, and other financial data are
            subject to change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            5. Use of the Site
          </h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that
            does not:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Infringe upon the rights of others</li>
            <li>
              Attempt to interfere with or disrupt the Site&apos;s operation
            </li>
            <li>
              Use automated systems to scrape or collect data from the Site
              without permission
            </li>
            <li>
              Attempt to gain unauthorized access to the Site&apos;s systems
            </li>
            <li>Use the Site to distribute malware or engage in phishing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            6. Intellectual Property
          </h2>
          <p>
            All content on the Site, including text, graphics, logos, icons,
            images, and software, is the property of CalcWise or its content
            suppliers and is protected by copyright and intellectual property
            laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            7. Advertisements
          </h2>
          <p>
            The Site displays advertisements provided by Google AdSense and
            potentially other advertising partners. We are not responsible for
            the content of third-party advertisements. The presence of an
            advertisement does not constitute an endorsement of the advertiser
            or their products/services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, CalcWise and its operators
            shall not be liable for any direct, indirect, incidental,
            consequential, or punitive damages arising from your use of the Site
            or reliance on any information provided. This includes, but is not
            limited to, any financial losses resulting from decisions made based
            on calculator results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            9. Third-Party Links
          </h2>
          <p>
            The Site may contain links to third-party websites. We are not
            responsible for the content, privacy policies, or practices of any
            third-party sites. Visiting linked sites is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            10. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Changes will be effective immediately upon posting. Your continued
            use of the Site constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            11. Governing Law
          </h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the United States, without regard to
            conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            12. Contact Us
          </h2>
          <p>
            If you have questions about these Terms of Service, please contact
            us at: legal@calcwise.com
          </p>
        </section>
      </div>
    </div>
  );
}
