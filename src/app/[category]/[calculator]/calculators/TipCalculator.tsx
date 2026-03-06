"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatCurrency } from "@/lib/calculations";

export default function TipCalculator() {
  const [bill, setBill] = useState(85);
  const [tipPercent, setTipPercent] = useState(18);
  const [people, setPeople] = useState(2);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    tip: 0,
    total: 0,
    perPerson: 0,
    tipPerPerson: 0,
  });

  const calculate = () => {
    const tip = (bill * tipPercent) / 100;
    const total = bill + tip;
    setResult({
      tip,
      total,
      perPerson: total / people,
      tipPerPerson: tip / people,
    });
    setCalculated(true);
  };

  const presets = [15, 18, 20, 25];

  return (
    <CalculatorLayout
      title="Tip Calculator"
      description="Quickly calculate tips and split bills between friends at restaurants. Choose a tip percentage or enter a custom amount."
      breadcrumbs={[
        { name: "Everyday Calculators", href: "/everyday-calculators" },
        { name: "Tip Calculator" },
      ]}
      howItWorks={`Tip = Bill Amount × Tip Percentage / 100
Total = Bill + Tip
Per Person = Total / Number of People

For example, an 18% tip on a $100 bill = $18, making the total $118. Split between 2 people = $59 each.`}
      faq={[
        {
          question: "How much should I tip at a restaurant?",
          answer:
            "In the United States, 15-20% is standard for sit-down restaurants. 18-20% is considered good service, while 15% is acceptable. For exceptional service, consider 25% or more.",
        },
        {
          question: "Should I tip on the pre-tax or post-tax amount?",
          answer:
            "Etiquette experts generally agree that tipping on the pre-tax amount is acceptable, though tipping on the post-tax total is also common and more generous.",
        },
        {
          question: "When should I NOT tip?",
          answer:
            "Tipping norms vary by country. In the US, tips are expected at restaurants, bars, salons, and for delivery services. Fast food, counter service, and takeout typically don't require tips, though it's increasingly common.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Percentage Calculator",
          href: "/everyday-calculators/percentage-calculator",
          description: "General percentage calculations",
        },
        {
          name: "Salary Calculator",
          href: "/everyday-calculators/salary-calculator",
          description: "Convert salary to hourly",
        },
        {
          name: "Income Tax Calculator",
          href: "/tax-calculators/income-tax-calculator",
          description: "Estimate your taxes",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Bill Amount ($)
            </label>
            <input
              type="number"
              step="0.01"
              className="calc-input"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Tip Percentage
            </label>
            <input
              type="number"
              className="calc-input"
              value={tipPercent}
              onChange={(e) => setTipPercent(Number(e.target.value))}
            />
            <div className="flex gap-2 mt-2">
              {presets.map((p) => (
                <button
                  key={p}
                  onClick={() => setTipPercent(p)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${tipPercent === p ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "border-gray-300 hover:border-[var(--color-primary)]"}`}
                >
                  {p}%
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Split Between
            </label>
            <input
              type="number"
              min="1"
              className="calc-input"
              value={people}
              onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Tip
        </button>
        {calculated && (
          <div className="calc-result">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm opacity-80 mb-1">Tip Amount</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(result.tip)}
                </p>
              </div>
              <div>
                <p className="text-sm opacity-80 mb-1">Total</p>
                <p className="text-2xl font-bold">
                  {formatCurrency(result.total)}
                </p>
              </div>
            </div>
            {people > 1 && (
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm border-t border-white/20 pt-4">
                <div>
                  <p className="opacity-70">Per Person (Total)</p>
                  <p className="font-bold">
                    {formatCurrency(result.perPerson)}
                  </p>
                </div>
                <div>
                  <p className="opacity-70">Per Person (Tip)</p>
                  <p className="font-bold">
                    {formatCurrency(result.tipPerPerson)}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
