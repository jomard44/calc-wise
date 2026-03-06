"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { compoundInterest, formatCurrency } from "@/lib/calculations";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [contribution, setContribution] = useState(200);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof compoundInterest
  > | null>(null);

  const calculate = () => {
    const res = compoundInterest(principal, rate, years, contribution);
    setResult(res);
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="See how your money grows over time with the power of compound interest. Calculate the future value of your investment with regular contributions."
      breadcrumbs={[
        { name: "Investment Calculators", href: "/investment-calculators" },
        { name: "Compound Interest Calculator" },
      ]}
      howItWorks={`Compound interest is calculated using the formula:

A = P(1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) - 1) / (r/n)]

Where:
• A = Final amount
• P = Initial principal
• r = Annual interest rate (decimal)
• n = Number of times interest is compounded per year (12 for monthly)
• t = Number of years
• PMT = Monthly contribution

The key insight is that you earn interest on your interest — making your money grow exponentially over time. This is why starting early is so powerful.`}
      faq={[
        {
          question: "What is compound interest?",
          answer:
            "Compound interest is interest earned on both your initial investment (principal) and previously accumulated interest. Unlike simple interest, which only earns on the principal, compound interest accelerates growth over time.",
        },
        {
          question: "How often is interest compounded?",
          answer:
            "Interest can be compounded daily, monthly, quarterly, or annually. More frequent compounding results in slightly more growth. This calculator uses monthly compounding, which is the most common for savings and investment accounts.",
        },
        {
          question: "What is the Rule of 72?",
          answer:
            "The Rule of 72 is a quick way to estimate how long it takes to double your money. Divide 72 by your annual rate of return. For example, at 7% return, your money doubles in approximately 72 ÷ 7 = 10.3 years.",
        },
        {
          question: "Is 7% a realistic annual return?",
          answer:
            "The S&P 500 has historically returned about 10% per year before inflation, or about 7% after inflation. However, past performance doesn't guarantee future results, and actual returns vary significantly year to year.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Retirement Calculator",
          href: "/investment-calculators/retirement-calculator",
          description: "Plan for retirement",
        },
        {
          name: "Savings Calculator",
          href: "/investment-calculators/savings-calculator",
          description: "Track savings growth",
        },
        {
          name: "ROI Calculator",
          href: "/business-calculators/roi-calculator",
          description: "Calculate investment returns",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Initial Investment ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Contribution ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Annual Return (%)
            </label>
            <input
              type="number"
              step="0.1"
              className="calc-input"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Time Period (years)
            </label>
            <input
              type="number"
              className="calc-input"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Growth
        </button>
        {calculated && result && (
          <>
            <div className="calc-result">
              <p className="text-sm opacity-80 mb-1">Future Value</p>
              <p className="calc-result-value">
                {formatCurrency(result.total)}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                <div>
                  <p className="opacity-70">Total Contributions</p>
                  <p className="font-bold">
                    {formatCurrency(result.totalContributions)}
                  </p>
                </div>
                <div>
                  <p className="opacity-70">Total Interest</p>
                  <p className="font-bold">
                    {formatCurrency(result.totalInterest)}
                  </p>
                </div>
                <div>
                  <p className="opacity-70">Interest %</p>
                  <p className="font-bold">
                    {result.total > 0
                      ? ((result.totalInterest / result.total) * 100).toFixed(1)
                      : 0}
                    %
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold mb-2">Year-by-Year Growth</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 text-left">Year</th>
                      <th className="p-2 text-right">Contributions</th>
                      <th className="p-2 text-right">Interest Earned</th>
                      <th className="p-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.yearlyBreakdown.map((row) => (
                      <tr key={row.year} className="border-t border-gray-100">
                        <td className="p-2">{row.year}</td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.contributions)}
                        </td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.interest)}
                        </td>
                        <td className="p-2 text-right font-medium">
                          {formatCurrency(row.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
