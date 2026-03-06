"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { compoundInterest, formatCurrency } from "@/lib/calculations";

export default function SavingsCalculator() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(200);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(10);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof compoundInterest
  > | null>(null);

  const calculate = () => {
    const res = compoundInterest(initial, rate, years, monthly);
    setResult(res);
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Savings Calculator"
      description="Calculate how your savings will grow over time with regular deposits and compound interest."
      breadcrumbs={[
        { name: "Investment Calculators", href: "/investment-calculators" },
        { name: "Savings Calculator" },
      ]}
      howItWorks={`This calculator uses monthly compounding to project how regular savings deposits grow over time. Your initial deposit and each monthly contribution earn interest, and that interest earns interest in subsequent months — the power of compound growth.`}
      faq={[
        {
          question: "How much should I save each month?",
          answer:
            "A common guideline is the 50/30/20 rule: 50% of income for needs, 30% for wants, and 20% for savings and debt repayment. Adjust based on your goals and circumstances.",
        },
        {
          question: "What savings account has the best interest rate?",
          answer:
            "High-yield savings accounts at online banks typically offer the best rates, often 4-5% APY. Compare current rates at multiple banks, and consider CDs for money you won't need for a fixed period.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Compound Interest",
          href: "/investment-calculators/compound-interest-calculator",
          description: "Advanced interest growth",
        },
        {
          name: "Retirement Calculator",
          href: "/investment-calculators/retirement-calculator",
          description: "Plan for retirement",
        },
        {
          name: "Affordability Calculator",
          href: "/mortgage-calculators/affordability-calculator",
          description: "Save for a home",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Initial Deposit ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={initial}
              onChange={(e) => setInitial(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Deposit ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Annual Interest Rate (%)
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
          Calculate Savings
        </button>
        {calculated && result && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Total Savings</p>
            <p className="calc-result-value">{formatCurrency(result.total)}</p>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Total Deposited</p>
                <p className="font-bold">
                  {formatCurrency(result.totalContributions)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Interest Earned</p>
                <p className="font-bold">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
