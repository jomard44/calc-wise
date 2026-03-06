"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { monthlyPayment, formatCurrency } from "@/lib/calculations";

export default function AutoLoanCalculator() {
  const [price, setPrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(0);
  const [rate, setRate] = useState(5.9);
  const [term, setTerm] = useState(5);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    payment: 0,
    totalInterest: 0,
    totalPaid: 0,
  });

  const calculate = () => {
    const principal = price - downPayment - tradeIn;
    const payment = monthlyPayment(principal, rate, term);
    const totalPaid = payment * term * 12;
    setResult({ payment, totalInterest: totalPaid - principal, totalPaid });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Auto Loan Calculator"
      description="Calculate your monthly car payment and total cost of an auto loan. Factor in your down payment, trade-in value, interest rate, and loan term."
      breadcrumbs={[
        { name: "Loan Calculators", href: "/loan-calculators" },
        { name: "Auto Loan Calculator" },
      ]}
      howItWorks={`Auto loan payments are calculated using the same amortization formula as mortgages. The loan amount equals the vehicle price minus your down payment and trade-in value. The monthly payment depends on the loan amount, interest rate, and term length.`}
      faq={[
        {
          question: "What is a good auto loan interest rate?",
          answer:
            "Auto loan rates depend on your credit score, loan term, and whether the car is new or used. Excellent credit (750+) typically qualifies for 3-5% on new cars. Used car rates are usually 1-2% higher.",
        },
        {
          question: "Should I choose a longer or shorter loan term?",
          answer:
            "Shorter terms (36-48 months) have higher payments but save on interest. Longer terms (60-72 months) lower monthly payments but cost more overall. Avoid terms longer than 60 months if possible.",
        },
        {
          question: "How much should I put down on a car?",
          answer:
            "Aim for at least 20% down on a new car and 10% on a used car. A larger down payment reduces your monthly payment and helps avoid being 'upside down' on the loan.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Personal Loan Calculator",
          href: "/loan-calculators/personal-loan-calculator",
          description: "Personal loan payments",
        },
        {
          name: "Mortgage Calculator",
          href: "/mortgage-calculators/mortgage-calculator",
          description: "Home loan payments",
        },
        {
          name: "Credit Card Payoff",
          href: "/loan-calculators/credit-card-payoff-calculator",
          description: "Pay off credit cards",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Price ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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
              Trade-In Value ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={tradeIn}
              onChange={(e) => setTradeIn(Number(e.target.value))}
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
              <option value={3}>36 months (3 years)</option>
              <option value={4}>48 months (4 years)</option>
              <option value={5}>60 months (5 years)</option>
              <option value={6}>72 months (6 years)</option>
            </select>
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Payment
        </button>
        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Monthly Payment</p>
            <p className="calc-result-value">
              {formatCurrency(result.payment)}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Loan Amount</p>
                <p className="font-bold">
                  {formatCurrency(price - downPayment - tradeIn)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Total Interest</p>
                <p className="font-bold">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Total Cost</p>
                <p className="font-bold">{formatCurrency(result.totalPaid)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
