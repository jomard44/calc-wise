"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { formatCurrency } from "@/lib/calculations";

export default function AffordabilityCalculator() {
  const [income, setIncome] = useState(75000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({ maxHome: 0, maxPayment: 0, dti: 0 });

  const calculate = () => {
    const monthlyIncome = income / 12;
    const maxDTI = 0.36;
    const maxPayment = monthlyIncome * maxDTI - monthlyDebts;
    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    const maxLoan =
      monthlyRate === 0
        ? maxPayment * n
        : (maxPayment * (Math.pow(1 + monthlyRate, n) - 1)) /
          (monthlyRate * Math.pow(1 + monthlyRate, n));
    setResult({
      maxHome: maxLoan + downPayment,
      maxPayment,
      dti: maxDTI * 100,
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="How Much House Can I Afford?"
      description="Calculate how much home you can afford based on your income, debts, down payment, and current interest rates."
      breadcrumbs={[
        { name: "Mortgage Calculators", href: "/mortgage-calculators" },
        { name: "Affordability Calculator" },
      ]}
      howItWorks={`This calculator uses the 36% debt-to-income (DTI) rule, which is a common guideline used by lenders. Your total monthly debt payments (including the new mortgage) should not exceed 36% of your gross monthly income.

Maximum monthly mortgage payment = (Monthly income × 36%) – Existing monthly debts

The maximum loan amount is then calculated using the mortgage payment formula, and the down payment is added to determine the maximum home price.`}
      faq={[
        {
          question: "What is the 28/36 rule?",
          answer:
            "The 28/36 rule suggests spending no more than 28% of gross income on housing costs and no more than 36% on total debts including housing. This calculator uses the 36% total debt ratio.",
        },
        {
          question: "What debts count toward DTI?",
          answer:
            "Monthly debts include car payments, student loans, credit card minimum payments, child support, and any other recurring debt obligations.",
        },
        {
          question: "Does this include property taxes and insurance?",
          answer:
            "This calculator estimates the principal and interest portion. Your actual affordable price may be lower when accounting for property taxes, homeowner's insurance, and PMI.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Mortgage Calculator",
          href: "/mortgage-calculators/mortgage-calculator",
          description: "Calculate monthly payments",
        },
        {
          name: "Refinance Calculator",
          href: "/mortgage-calculators/refinance-calculator",
          description: "Should you refinance?",
        },
        {
          name: "Savings Calculator",
          href: "/investment-calculators/savings-calculator",
          description: "Save for a down payment",
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
              Monthly Debts ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Down Payment ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Interest Rate (%)
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
            <label className="block text-sm font-medium mb-1">Loan Term</label>
            <select
              className="calc-input"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={15}>15 years</option>
            </select>
          </div>
        </div>

        <button onClick={calculate} className="calc-btn">
          Calculate Affordability
        </button>

        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Maximum Home Price</p>
            <p className="calc-result-value">
              {formatCurrency(result.maxHome)}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Max Monthly Payment</p>
                <p className="font-bold">{formatCurrency(result.maxPayment)}</p>
              </div>
              <div>
                <p className="opacity-70">DTI Ratio Used</p>
                <p className="font-bold">{result.dti}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
