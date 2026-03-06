"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { monthlyPayment, formatCurrency } from "@/lib/calculations";

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(250000);
  const [currentRate, setCurrentRate] = useState(7.0);
  const [currentTerm, setCurrentTerm] = useState(25);
  const [newRate, setNewRate] = useState(5.5);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5000);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    currentPayment: 0,
    newPayment: 0,
    monthlySavings: 0,
    breakEvenMonths: 0,
    totalSavings: 0,
  });

  const calculate = () => {
    const current = monthlyPayment(currentBalance, currentRate, currentTerm);
    const newP = monthlyPayment(currentBalance, newRate, newTerm);
    const savings = current - newP;
    const breakEven = savings > 0 ? Math.ceil(closingCosts / savings) : 0;
    const totalSavings = savings * newTerm * 12 - closingCosts;
    setResult({
      currentPayment: current,
      newPayment: newP,
      monthlySavings: savings,
      breakEvenMonths: breakEven,
      totalSavings,
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Mortgage Refinance Calculator"
      description="See if refinancing your mortgage could save you money. Compare your current payment to a new rate and find your break-even point."
      breadcrumbs={[
        { name: "Mortgage Calculators", href: "/mortgage-calculators" },
        { name: "Refinance Calculator" },
      ]}
      howItWorks={`This calculator compares your current mortgage payment with a new mortgage payment at a different rate and term. The break-even point is calculated by dividing your closing costs by the monthly savings. If you plan to stay in your home longer than the break-even period, refinancing is typically worthwhile.`}
      faq={[
        {
          question: "When should I refinance?",
          answer:
            "Generally, refinancing makes sense when you can lower your rate by at least 0.5-1%, plan to stay in the home past the break-even point, and have enough equity (typically 20%+).",
        },
        {
          question: "What are typical closing costs for refinancing?",
          answer:
            "Closing costs typically range from 2-5% of the loan amount, or $3,000-$10,000 for most homes. This includes appraisal fees, title insurance, origination fees, and more.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Mortgage Calculator",
          href: "/mortgage-calculators/mortgage-calculator",
          description: "Calculate mortgage payments",
        },
        {
          name: "Affordability Calculator",
          href: "/mortgage-calculators/affordability-calculator",
          description: "How much can you afford?",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Balance ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={currentBalance}
              onChange={(e) => setCurrentBalance(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              className="calc-input"
              value={currentRate}
              onChange={(e) => setCurrentRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Years Remaining
            </label>
            <input
              type="number"
              className="calc-input"
              value={currentTerm}
              onChange={(e) => setCurrentTerm(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              New Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              className="calc-input"
              value={newRate}
              onChange={(e) => setNewRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              New Term (years)
            </label>
            <select
              className="calc-input"
              value={newTerm}
              onChange={(e) => setNewTerm(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Closing Costs ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={closingCosts}
              onChange={(e) => setClosingCosts(Number(e.target.value))}
            />
          </div>
        </div>

        <button onClick={calculate} className="calc-btn">
          Compare Payments
        </button>

        {calculated && (
          <div className="calc-result">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm opacity-70">Current Payment</p>
                <p className="text-xl font-bold">
                  {formatCurrency(result.currentPayment)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-70">New Payment</p>
                <p className="text-xl font-bold">
                  {formatCurrency(result.newPayment)}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm border-t border-white/20 pt-4">
              <div>
                <p className="opacity-70">Monthly Savings</p>
                <p className="font-bold">
                  {formatCurrency(result.monthlySavings)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Break-Even</p>
                <p className="font-bold">{result.breakEvenMonths} months</p>
              </div>
              <div>
                <p className="opacity-70">Total Savings</p>
                <p className="font-bold">
                  {formatCurrency(result.totalSavings)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
