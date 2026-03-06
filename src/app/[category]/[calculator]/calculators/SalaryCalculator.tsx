"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatCurrency } from "@/lib/calculations";

export default function SalaryCalculator() {
  const [amount, setAmount] = useState(65000);
  const [type, setType] = useState<
    "annual" | "monthly" | "biweekly" | "weekly" | "hourly"
  >("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    annual: 0,
    monthly: 0,
    biweekly: 0,
    weekly: 0,
    daily: 0,
    hourly: 0,
  });

  const calculate = () => {
    let annual: number;
    switch (type) {
      case "annual":
        annual = amount;
        break;
      case "monthly":
        annual = amount * 12;
        break;
      case "biweekly":
        annual = amount * 26;
        break;
      case "weekly":
        annual = amount * 52;
        break;
      case "hourly":
        annual = amount * hoursPerWeek * 52;
        break;
      default:
        annual = amount;
    }
    setResult({
      annual,
      monthly: annual / 12,
      biweekly: annual / 26,
      weekly: annual / 52,
      daily: annual / 260,
      hourly: annual / (hoursPerWeek * 52),
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Salary Calculator"
      description="Convert between annual salary, monthly, bi-weekly, weekly, daily, and hourly pay rates. Compare compensation packages easily."
      breadcrumbs={[
        { name: "Everyday Calculators", href: "/everyday-calculators" },
        { name: "Salary Calculator" },
      ]}
      howItWorks={`Salary conversions are based on standard work year assumptions:

• Annual = Hourly × Hours/Week × 52 weeks
• Monthly = Annual / 12 months
• Bi-weekly = Annual / 26 pay periods
• Weekly = Annual / 52 weeks
• Daily = Annual / 260 working days (52 weeks × 5 days)
• Hourly = Annual / (Hours/Week × 52)`}
      faq={[
        {
          question: "How many work hours are in a year?",
          answer:
            "A standard work year is 2,080 hours (40 hours/week × 52 weeks). After accounting for holidays and PTO (typically 10-15 days), actual work hours are closer to 1,950-2,000.",
        },
        {
          question: "Is salary or hourly pay better?",
          answer:
            "Salaried positions often include benefits like health insurance, retirement contributions, and paid time off. Hourly positions may pay overtime. Compare total compensation, not just the base rate.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Paycheck Calculator",
          href: "/tax-calculators/paycheck-calculator",
          description: "Calculate take-home pay",
        },
        {
          name: "Income Tax Calculator",
          href: "/tax-calculators/income-tax-calculator",
          description: "Estimate your taxes",
        },
        {
          name: "Tip Calculator",
          href: "/everyday-calculators/tip-calculator",
          description: "Calculate restaurant tips",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Amount ($)</label>
            <input
              type="number"
              className="calc-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pay Type</label>
            <select
              className="calc-input"
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
            >
              <option value="annual">Annual Salary</option>
              <option value="monthly">Monthly</option>
              <option value="biweekly">Bi-Weekly</option>
              <option value="weekly">Weekly</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Hours per Week
            </label>
            <input
              type="number"
              className="calc-input"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Convert Salary
        </button>
        {calculated && (
          <div className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "Annual", value: result.annual },
                  { label: "Monthly", value: result.monthly },
                  { label: "Bi-Weekly", value: result.biweekly },
                  { label: "Weekly", value: result.weekly },
                  { label: "Daily", value: result.daily },
                  { label: "Hourly", value: result.hourly },
                ].map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <td className="p-3 font-medium">{row.label}</td>
                    <td className="p-3 text-right font-bold text-[var(--color-primary)]">
                      {formatCurrency(row.value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
