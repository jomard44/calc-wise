import Link from "next/link";

const footerLinks = {
  Calculators: [
    {
      name: "Mortgage Calculator",
      href: "/mortgage-calculators/mortgage-calculator",
    },
    {
      name: "Loan Calculator",
      href: "/loan-calculators/personal-loan-calculator",
    },
    {
      name: "Compound Interest",
      href: "/investment-calculators/compound-interest-calculator",
    },
    {
      name: "Paycheck Calculator",
      href: "/tax-calculators/paycheck-calculator",
    },
    { name: "Tip Calculator", href: "/everyday-calculators/tip-calculator" },
  ],
  Resources: [
    { name: "All Calculators", href: "/#calculators" },
    { name: "Mortgage Calculators", href: "/mortgage-calculators" },
    { name: "Loan Calculators", href: "/loan-calculators" },
    { name: "Investment Calculators", href: "/investment-calculators" },
    { name: "Tax Calculators", href: "/tax-calculators" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              CalcWise
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Free online calculators for mortgage, loans, investments, taxes,
              and more. Make smarter financial decisions with accurate, fast,
              and easy-to-use tools.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} CalcWise. All rights reserved.
          </p>
          <p className="text-white/50 text-xs max-w-xl text-center sm:text-right">
            Disclaimer: CalcWise provides calculators for informational purposes
            only. Results are estimates and should not be considered financial
            advice. Consult a qualified financial professional for advice
            specific to your situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
