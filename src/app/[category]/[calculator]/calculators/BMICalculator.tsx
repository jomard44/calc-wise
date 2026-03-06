"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatNumber } from "@/lib/calculations";

export default function BMICalculator() {
  const [weight, setWeight] = useState(170);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(10);
  const [unit, setUnit] = useState<"imperial" | "metric">("imperial");
  const [weightKg, setWeightKg] = useState(77);
  const [heightCm, setHeightCm] = useState(178);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ bmi: 0, category: "", color: "" });

  const calculate = () => {
    let bmi: number;
    if (unit === "imperial") {
      const inches = heightFt * 12 + heightIn;
      bmi = (weight / (inches * inches)) * 703;
    } else {
      const heightM = heightCm / 100;
      bmi = weightKg / (heightM * heightM);
    }

    let category: string;
    let color: string;
    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-[var(--color-secondary)]";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-amber-600";
    } else {
      category = "Obese";
      color = "text-red-600";
    }

    setResult({ bmi, category, color });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI) to find out if you're in a healthy weight range. Supports both imperial and metric units."
      breadcrumbs={[
        { name: "Everyday Calculators", href: "/everyday-calculators" },
        { name: "BMI Calculator" },
      ]}
      howItWorks={`BMI (Body Mass Index) is calculated using your weight and height:

Imperial: BMI = (Weight in pounds / Height in inches²) × 703
Metric: BMI = Weight in kilograms / (Height in meters)²

BMI Categories:
• Underweight: BMI < 18.5
• Normal weight: 18.5 – 24.9
• Overweight: 25 – 29.9
• Obese: BMI ≥ 30

Note: BMI is a screening tool and doesn't directly measure body fat. It doesn't account for muscle mass, bone density, age, sex, or ethnicity.`}
      faq={[
        {
          question: "Is BMI accurate?",
          answer:
            "BMI is a useful screening tool for population-level health assessment, but it has limitations for individuals. It doesn't distinguish between muscle and fat, so very muscular people may have a high BMI despite being healthy. Waist circumference and body composition tests provide additional insights.",
        },
        {
          question: "What is a healthy BMI?",
          answer:
            "A BMI between 18.5 and 24.9 is generally considered healthy. However, optimal health depends on many factors beyond BMI, including fitness level, diet, genetics, and overall health markers.",
        },
        {
          question: "Is BMI different for children?",
          answer:
            "Yes. For children and teens (ages 2-20), BMI is interpreted differently using age- and sex-specific percentiles. This calculator is designed for adults (20+).",
        },
      ]}
      relatedCalculators={[
        {
          name: "Percentage Calculator",
          href: "/everyday-calculators/percentage-calculator",
          description: "Calculate percentages",
        },
        {
          name: "Tip Calculator",
          href: "/everyday-calculators/tip-calculator",
          description: "Calculate restaurant tips",
        },
        {
          name: "Salary Calculator",
          href: "/everyday-calculators/salary-calculator",
          description: "Convert salary rates",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="flex gap-3 mb-2">
          <button
            onClick={() => setUnit("imperial")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${unit === "imperial" ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-[var(--color-text)]"}`}
          >
            Imperial (lbs/ft)
          </button>
          <button
            onClick={() => setUnit("metric")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${unit === "metric" ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-[var(--color-text)]"}`}
          >
            Metric (kg/cm)
          </button>
        </div>

        {unit === "imperial" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Weight (lbs)
              </label>
              <input
                type="number"
                className="calc-input"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Height (feet)
              </label>
              <input
                type="number"
                className="calc-input"
                value={heightFt}
                onChange={(e) => setHeightFt(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Height (inches)
              </label>
              <input
                type="number"
                className="calc-input"
                value={heightIn}
                onChange={(e) => setHeightIn(Number(e.target.value))}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Weight (kg)
              </label>
              <input
                type="number"
                className="calc-input"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                className="calc-input"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
              />
            </div>
          </div>
        )}

        <button onClick={calculate} className="calc-btn">
          Calculate BMI
        </button>

        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Your BMI</p>
            <p className="calc-result-value">{formatNumber(result.bmi, 1)}</p>
            <p
              className={`text-lg font-semibold mt-2 ${result.color === "text-[var(--color-secondary)]" ? "" : ""}`}
            >
              <span
                className={result.color.startsWith("text-") ? result.color : ""}
              >
                {result.category}
              </span>
            </p>
            <div className="mt-4 bg-white/10 rounded-lg p-3 text-sm">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div
                  className={
                    result.bmi < 18.5 ? "font-bold underline" : "opacity-70"
                  }
                >
                  <p>&lt;18.5</p>
                  <p>Under</p>
                </div>
                <div
                  className={
                    result.bmi >= 18.5 && result.bmi < 25
                      ? "font-bold underline"
                      : "opacity-70"
                  }
                >
                  <p>18.5-24.9</p>
                  <p>Normal</p>
                </div>
                <div
                  className={
                    result.bmi >= 25 && result.bmi < 30
                      ? "font-bold underline"
                      : "opacity-70"
                  }
                >
                  <p>25-29.9</p>
                  <p>Over</p>
                </div>
                <div
                  className={
                    result.bmi >= 30 ? "font-bold underline" : "opacity-70"
                  }
                >
                  <p>&ge;30</p>
                  <p>Obese</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
