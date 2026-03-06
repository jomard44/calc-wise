"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import {
  monthlyPayment,
  amortizationSchedule,
  formatCurrency,
  formatNumber,
} from "@/lib/calculations";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(350000);
  const [downPayment, setDownPayment] = useState(70000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    payment: 0,
    totalInterest: 0,
    totalPaid: 0,
    schedule: [] as ReturnType<typeof amortizationSchedule>,
  });

  const calculate = () => {
    const principal = homePrice - downPayment;
    const payment = monthlyPayment(principal, rate, term);
    const schedule = amortizationSchedule(principal, rate, term);
    const totalPaid = payment * term * 12;
    setResult({
      payment,
      totalInterest: totalPaid - principal,
      totalPaid,
      schedule,
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Mortgage Calculator"
      description="Calculate your monthly mortgage payment based on home price, down payment, interest rate, and loan term. See a full amortization schedule."
      breadcrumbs={[
        { name: "Mortgage Calculators", href: "/mortgage-calculators" },
        { name: "Mortgage Calculator" },
      ]}
      howItWorks={`The mortgage payment is calculated using the standard amortization formula:

M = P × [r(1+r)^n] / [(1+r)^n – 1]

Where:
• M = Monthly payment
• P = Principal loan amount (home price minus down payment)
• r = Monthly interest rate (annual rate ÷ 12)
• n = Total number of payments (years × 12)

This formula ensures each monthly payment covers both interest and principal, gradually paying off the loan over the full term.`}
      faq={[
        {
          question: "How much should I put down on a house?",
          answer:
            "Conventional wisdom suggests 20% to avoid private mortgage insurance (PMI). However, many loan programs accept 3-5% down. A larger down payment means lower monthly payments and less interest paid over the life of the loan.",
        },
        {
          question: "What is a good mortgage interest rate?",
          answer:
            "Mortgage rates vary based on economic conditions, your credit score, loan type, and down payment. Check current rates from multiple lenders. Even a 0.25% difference can save thousands over the life of a 30-year mortgage.",
        },
        {
          question: "Should I choose a 15-year or 30-year mortgage?",
          answer:
            "A 15-year mortgage has higher monthly payments but saves significantly on total interest. A 30-year mortgage has lower payments, giving you more monthly flexibility. Use this calculator to compare both options.",
        },
        {
          question: "What is included in a mortgage payment?",
          answer:
            "A mortgage payment typically includes principal, interest, property taxes, and homeowner's insurance (PITI). This calculator shows principal and interest. Your actual payment may be higher when taxes and insurance are included.",
        },
        {
          question: "How can I lower my mortgage payment?",
          answer:
            "You can lower payments by: making a larger down payment, choosing a longer loan term, shopping for a lower interest rate, improving your credit score before applying, or buying a less expensive home.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Affordability Calculator",
          href: "/mortgage-calculators/affordability-calculator",
          description: "How much house can you afford?",
        },
        {
          name: "Refinance Calculator",
          href: "/mortgage-calculators/refinance-calculator",
          description: "Should you refinance?",
        },
        {
          name: "Auto Loan Calculator",
          href: "/loan-calculators/auto-loan-calculator",
          description: "Calculate car payments",
        },
        {
          name: "Compound Interest Calculator",
          href: "/investment-calculators/compound-interest-calculator",
          description: "See how money grows",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Home Price ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
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
            <label className="block text-sm font-medium mb-1">
              Loan Term (years)
            </label>
            <select
              className="calc-input"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>
        </div>

        <button onClick={calculate} className="calc-btn">
          Calculate Payment
        </button>

        {calculated && (
          <>
            <div className="calc-result">
              <p className="text-sm opacity-80 mb-1">Monthly Payment</p>
              <p className="calc-result-value">
                {formatCurrency(result.payment)}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                <div>
                  <p className="opacity-70">Loan Amount</p>
                  <p className="font-bold">
                    {formatCurrency(homePrice - downPayment)}
                  </p>
                </div>
                <div>
                  <p className="opacity-70">Total Interest</p>
                  <p className="font-bold">
                    {formatCurrency(result.totalInterest)}
                  </p>
                </div>
                <div>
                  <p className="opacity-70">Total Paid</p>
                  <p className="font-bold">
                    {formatCurrency(result.totalPaid)}
                  </p>
                </div>
              </div>
            </div>

            {/* Amortization preview */}
            <div className="mt-4">
              <h3 className="font-bold mb-2">
                Amortization Schedule (First 12 Months)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-2 text-left">Month</th>
                      <th className="p-2 text-right">Payment</th>
                      <th className="p-2 text-right">Principal</th>
                      <th className="p-2 text-right">Interest</th>
                      <th className="p-2 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.slice(0, 12).map((row) => (
                      <tr key={row.month} className="border-t border-gray-100">
                        <td className="p-2">{row.month}</td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.payment)}
                        </td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.principal)}
                        </td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.interest)}
                        </td>
                        <td className="p-2 text-right">
                          {formatCurrency(row.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[var(--color-text-light)] mt-2">
                Showing first 12 of {formatNumber(result.schedule.length)}{" "}
                monthly payments.
              </p>
            </div>
          </>
        )}
      </div>
    </CalculatorLayout>
  );
}
