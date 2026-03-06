"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatCurrency, formatNumber } from "@/lib/calculations";

export default function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState(100000);
  const [cogs, setCogs] = useState(40000);
  const [expenses, setExpenses] = useState(30000);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    grossProfit: 0,
    grossMargin: 0,
    netProfit: 0,
    netMargin: 0,
    markup: 0,
  });

  const calculate = () => {
    const grossProfit = revenue - cogs;
    const netProfit = revenue - cogs - expenses;
    setResult({
      grossProfit,
      grossMargin: revenue > 0 ? (grossProfit / revenue) * 100 : 0,
      netProfit,
      netMargin: revenue > 0 ? (netProfit / revenue) * 100 : 0,
      markup: cogs > 0 ? (grossProfit / cogs) * 100 : 0,
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Profit Margin Calculator"
      description="Calculate your gross profit margin, net profit margin, and markup percentage. Essential for pricing and business decisions."
      breadcrumbs={[
        { name: "Business Calculators", href: "/business-calculators" },
        { name: "Profit Margin Calculator" },
      ]}
      howItWorks={`Profit margins measure how much of each dollar of revenue translates to profit.

• Gross Profit Margin = (Revenue - COGS) / Revenue × 100
• Net Profit Margin = (Revenue - COGS - Expenses) / Revenue × 100
• Markup = (Revenue - COGS) / COGS × 100

COGS (Cost of Goods Sold) is the direct cost of producing goods. Operating expenses include rent, salaries, marketing, etc.`}
      faq={[
        {
          question: "What is a good profit margin?",
          answer:
            "Profit margins vary by industry. Retail typically sees 2-5% net margins, while software companies may achieve 20-40%+. Compare your margins to industry benchmarks for a meaningful assessment.",
        },
        {
          question: "What's the difference between margin and markup?",
          answer:
            "Margin is profit as a percentage of revenue (selling price). Markup is profit as a percentage of cost. A 50% markup equals a 33.3% margin. Margin is always lower than markup for the same product.",
        },
      ]}
      relatedCalculators={[
        {
          name: "ROI Calculator",
          href: "/business-calculators/roi-calculator",
          description: "Return on investment",
        },
        {
          name: "Percentage Calculator",
          href: "/everyday-calculators/percentage-calculator",
          description: "Calculate percentages",
        },
        {
          name: "Compound Interest",
          href: "/investment-calculators/compound-interest-calculator",
          description: "Grow business profits",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Revenue ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Cost of Goods Sold ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={cogs}
              onChange={(e) => setCogs(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Operating Expenses ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Margins
        </button>
        {calculated && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="calc-result">
              <p className="text-sm opacity-80 mb-1">Gross Profit Margin</p>
              <p className="calc-result-value">
                {formatNumber(result.grossMargin, 1)}%
              </p>
              <p className="text-sm mt-2 opacity-80">
                Gross Profit: {formatCurrency(result.grossProfit)}
              </p>
            </div>
            <div className="calc-result">
              <p className="text-sm opacity-80 mb-1">Net Profit Margin</p>
              <p className="calc-result-value">
                {formatNumber(result.netMargin, 1)}%
              </p>
              <p className="text-sm mt-2 opacity-80">
                Net Profit: {formatCurrency(result.netProfit)}
              </p>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
