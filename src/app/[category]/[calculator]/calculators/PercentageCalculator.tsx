"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatNumber } from "@/lib/calculations";

export default function PercentageCalculator() {
  // Mode 1: What is X% of Y?
  const [x, setX] = useState(15);
  const [y, setY] = useState(200);
  // Mode 2: X is what % of Y?
  const [a, setA] = useState(30);
  const [b, setB] = useState(200);
  // Mode 3: Percentage change
  const [from, setFrom] = useState(100);
  const [to, setTo] = useState(125);

  const result1 = (x / 100) * y;
  const result2 = b !== 0 ? (a / b) * 100 : 0;
  const result3 = from !== 0 ? ((to - from) / from) * 100 : 0;

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Calculate percentages quickly and easily. Find X% of a number, what percentage one number is of another, or the percentage change between two values."
      breadcrumbs={[
        { name: "Everyday Calculators", href: "/everyday-calculators" },
        { name: "Percentage Calculator" },
      ]}
      howItWorks={`Three common percentage calculations:

1. What is X% of Y? → (X / 100) × Y
2. X is what % of Y? → (X / Y) × 100
3. Percentage change from A to B? → ((B - A) / A) × 100

Positive percentage change indicates an increase; negative indicates a decrease.`}
      faq={[
        {
          question: "How do I calculate a percentage?",
          answer:
            "To find a percentage, divide the part by the whole and multiply by 100. For example, 25 out of 200 = (25/200) × 100 = 12.5%.",
        },
        {
          question: "How do I calculate percentage increase or decrease?",
          answer:
            "Percentage change = ((New Value - Old Value) / Old Value) × 100. A positive result is an increase, negative is a decrease.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Tip Calculator",
          href: "/everyday-calculators/tip-calculator",
          description: "Calculate restaurant tips",
        },
        {
          name: "Profit Margin",
          href: "/business-calculators/profit-margin-calculator",
          description: "Business profit margins",
        },
        {
          name: "ROI Calculator",
          href: "/business-calculators/roi-calculator",
          description: "Return on investment",
        },
      ]}
    >
      <div className="space-y-8">
        {/* Mode 1 */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-3">What is X% of Y?</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span>What is</span>
            <input
              type="number"
              className="calc-input w-24"
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
            />
            <span>% of</span>
            <input
              type="number"
              className="calc-input w-32"
              value={y}
              onChange={(e) => setY(Number(e.target.value))}
            />
            <span>=</span>
            <span className="font-bold text-lg text-[var(--color-primary)]">
              {formatNumber(result1, 2)}
            </span>
          </div>
        </div>

        {/* Mode 2 */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-3">X is what % of Y?</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <input
              type="number"
              className="calc-input w-24"
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
            />
            <span>is what % of</span>
            <input
              type="number"
              className="calc-input w-32"
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
            />
            <span>=</span>
            <span className="font-bold text-lg text-[var(--color-primary)]">
              {formatNumber(result2, 2)}%
            </span>
          </div>
        </div>

        {/* Mode 3 */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-3">Percentage Change</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span>From</span>
            <input
              type="number"
              className="calc-input w-32"
              value={from}
              onChange={(e) => setFrom(Number(e.target.value))}
            />
            <span>to</span>
            <input
              type="number"
              className="calc-input w-32"
              value={to}
              onChange={(e) => setTo(Number(e.target.value))}
            />
            <span>=</span>
            <span
              className={`font-bold text-lg ${result3 >= 0 ? "text-[var(--color-secondary)]" : "text-red-600"}`}
            >
              {result3 >= 0 ? "+" : ""}
              {formatNumber(result3, 2)}%
            </span>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
