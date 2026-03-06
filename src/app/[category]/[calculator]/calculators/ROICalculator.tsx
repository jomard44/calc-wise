"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatCurrency, formatNumber } from "@/lib/calculations";

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [finalValue, setFinalValue] = useState(15000);
  const [years, setYears] = useState(3);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ roi: 0, gain: 0, annualizedROI: 0 });

  const calculate = () => {
    const gain = finalValue - initialInvestment;
    const roi = initialInvestment > 0 ? (gain / initialInvestment) * 100 : 0;
    const annualized =
      initialInvestment > 0 && years > 0
        ? (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100
        : 0;
    setResult({ roi, gain, annualizedROI: annualized });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="ROI Calculator"
      description="Calculate return on investment (ROI) to evaluate the profitability and efficiency of an investment or compare multiple investments."
      breadcrumbs={[
        { name: "Business Calculators", href: "/business-calculators" },
        { name: "ROI Calculator" },
      ]}
      howItWorks={`ROI measures the profitability of an investment as a percentage:

ROI = (Final Value - Initial Investment) / Initial Investment × 100

Annualized ROI accounts for the time period:
Annualized ROI = ((Final Value / Initial Investment) ^ (1/years) - 1) × 100

A positive ROI means the investment gained value; a negative ROI means it lost value.`}
      faq={[
        {
          question: "What is a good ROI?",
          answer:
            "A 'good' ROI depends on the type of investment and the risk involved. The S&P 500 has averaged about 10% annually. Real estate typically returns 8-12%. Higher-risk investments should have higher expected returns.",
        },
        {
          question: "Why use annualized ROI?",
          answer:
            "Annualized ROI allows you to compare investments of different durations on an equal basis. A 50% return over 5 years is different from a 50% return over 1 year.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Profit Margin",
          href: "/business-calculators/profit-margin-calculator",
          description: "Calculate profit margins",
        },
        {
          name: "Compound Interest",
          href: "/investment-calculators/compound-interest-calculator",
          description: "Project investment growth",
        },
        {
          name: "Retirement Calculator",
          href: "/investment-calculators/retirement-calculator",
          description: "Plan for retirement",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Initial Investment ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Final Value ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={finalValue}
              onChange={(e) => setFinalValue(Number(e.target.value))}
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
          Calculate ROI
        </button>
        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Return on Investment</p>
            <p className="calc-result-value">{formatNumber(result.roi, 1)}%</p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Total Gain/Loss</p>
                <p className="font-bold">{formatCurrency(result.gain)}</p>
              </div>
              <div>
                <p className="opacity-70">Annualized ROI</p>
                <p className="font-bold">
                  {formatNumber(result.annualizedROI, 1)}%
                </p>
              </div>
              <div>
                <p className="opacity-70">Time Period</p>
                <p className="font-bold">
                  {years} year{years !== 1 ? "s" : ""}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
