"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { federalIncomeTax, formatCurrency } from "@/lib/calculations";

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<
    "single" | "married" | "head"
  >("single");
  const [deductions, setDeductions] = useState(14600);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    tax: 0,
    effectiveRate: 0,
    taxableIncome: 0,
    afterTax: 0,
  });

  const calculate = () => {
    const taxableIncome = Math.max(0, income - deductions);
    const tax = federalIncomeTax(taxableIncome, filingStatus);
    const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
    setResult({ tax, effectiveRate, taxableIncome, afterTax: income - tax });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Income Tax Calculator"
      description="Estimate your federal income tax based on your filing status, gross income, and deductions. Updated for tax year 2025/2026."
      breadcrumbs={[
        { name: "Tax Calculators", href: "/tax-calculators" },
        { name: "Income Tax Calculator" },
      ]}
      howItWorks={`Federal income tax is calculated using marginal tax brackets. Your taxable income (gross income minus deductions) is taxed at progressively higher rates for each bracket. For example, as a single filer in 2025:

• 10% on income up to $11,925
• 12% on income from $11,925 to $48,475
• 22% on income from $48,475 to $103,350
• 24% on income from $103,350 to $197,300
• 32% on income from $197,300 to $250,525
• 35% on income from $250,525 to $626,350
• 37% on income above $626,350

Your effective tax rate is typically lower than your marginal rate because only the income within each bracket is taxed at that bracket's rate.`}
      faq={[
        {
          question:
            "What's the difference between marginal and effective tax rate?",
          answer:
            "Your marginal tax rate is the rate applied to your last dollar of income. Your effective rate is your total tax divided by total income — it's always lower than your marginal rate because of progressive brackets.",
        },
        {
          question: "What is the standard deduction for 2025?",
          answer:
            "For 2025, the standard deduction is approximately $14,600 for single filers, $29,200 for married filing jointly, and $21,900 for head of household. These amounts are adjusted annually for inflation.",
        },
        {
          question: "Does this calculator include state taxes?",
          answer:
            "This calculator estimates federal income tax only. State income tax varies by state — some states have no income tax (e.g., Texas, Florida), while others have rates up to 13%+.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Paycheck Calculator",
          href: "/tax-calculators/paycheck-calculator",
          description: "Calculate take-home pay",
        },
        {
          name: "Salary Calculator",
          href: "/everyday-calculators/salary-calculator",
          description: "Convert salary to hourly",
        },
        {
          name: "Retirement Calculator",
          href: "/investment-calculators/retirement-calculator",
          description: "Plan for retirement",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Annual Gross Income ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Filing Status
            </label>
            <select
              className="calc-input"
              value={filingStatus}
              onChange={(e) =>
                setFilingStatus(e.target.value as "single" | "married" | "head")
              }
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
              <option value="head">Head of Household</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Total Deductions ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={deductions}
              onChange={(e) => setDeductions(Number(e.target.value))}
            />
            <p className="text-xs text-[var(--color-text-light)] mt-1">
              Standard deduction pre-filled. Adjust if itemizing.
            </p>
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Tax
        </button>
        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Estimated Federal Tax</p>
            <p className="calc-result-value">{formatCurrency(result.tax)}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Taxable Income</p>
                <p className="font-bold">
                  {formatCurrency(result.taxableIncome)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Effective Rate</p>
                <p className="font-bold">{result.effectiveRate.toFixed(1)}%</p>
              </div>
              <div>
                <p className="opacity-70">After-Tax Income</p>
                <p className="font-bold">{formatCurrency(result.afterTax)}</p>
              </div>
              <div>
                <p className="opacity-70">Monthly After Tax</p>
                <p className="font-bold">
                  {formatCurrency(result.afterTax / 12)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
