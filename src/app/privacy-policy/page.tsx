import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CalcWise privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        Privacy Policy
      </h1>
      <p className="text-sm text-[var(--color-text-light)] mb-6">
        Last updated: March 6, 2026
      </p>

      <div className="prose prose-sm max-w-none text-[var(--color-text)] space-y-6">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            1. Introduction
          </h2>
          <p>
            Welcome to CalcWise (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We respect your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website calcwise.com (the &quot;Site&quot;).
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            2. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold mt-4 mb-2">
            Information Automatically Collected
          </h3>
          <p>
            When you visit our Site, we may automatically collect certain
            information about your device, including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address (anonymized)</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website or search terms</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Calculator Data</h3>
          <p>
            All calculator inputs and results are processed entirely in your web
            browser.{" "}
            <strong>
              We do not store, transmit, or have access to any financial data
              you enter into our calculators.
            </strong>{" "}
            Your calculations remain completely private.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            3. Use of Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Essential Cookies:</strong> Required for the Site to
              function properly (e.g., remembering your cookie consent
              preferences).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to
              understand how visitors interact with our Site. This helps us
              improve our content and user experience. Google Analytics uses
              cookies to collect anonymized data about page views, session
              duration, and user demographics.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> We use Google AdSense to
              display advertisements. Google and its partners may use cookies to
              serve ads based on your prior visits to our Site or other
              websites. You can opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-[var(--color-primary)] underline"
              >
                Google Ad Settings
              </a>
              .
            </li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Note that
            disabling cookies may affect the functionality of some features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            4. Third-Party Services
          </h2>
          <p>We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Google AdSense:</strong> For displaying advertisements.
              Google&apos;s privacy policy can be found at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[var(--color-primary)] underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </li>
            <li>
              <strong>Google Analytics:</strong> For website analytics. Learn
              more at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[var(--color-primary)] underline"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            5. Your Rights (GDPR & CCPA)
          </h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to access the personal data we hold about you</li>
            <li>The right to request correction of inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>
              The right to opt out of the sale of your personal information
              (CCPA)
            </li>
            <li>The right to withdraw consent for data processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please{" "}
            <a
              href="/contact"
              className="text-[var(--color-primary)] underline"
            >
              contact us
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            6. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your information. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
            While we strive to use commercially acceptable means to protect your
            personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our Site is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected personal data from a child under
            13, we will take steps to delete that information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date. You are advised to
            review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-3">
            9. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please reach out
            through our{" "}
            <a
              href="/contact"
              className="text-[var(--color-primary)] underline"
            >
              contact form
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
