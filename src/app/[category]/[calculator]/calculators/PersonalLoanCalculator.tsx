"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { monthlyPayment, formatCurrency } from "@/lib/calculations";

export default function PersonalLoanCalculator() {
  const [amount, setAmount] = useState(15000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    payment: 0,
    totalInterest: 0,
    totalPaid: 0,
  });

  const calculate = () => {
    const payment = monthlyPayment(amount, rate, term);
    const totalPaid = payment * term * 12;
    setResult({ payment, totalInterest: totalPaid - amount, totalPaid });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Personal Loan Calculator"
      description="Calculate monthly payments and total interest for a personal loan. Compare different loan amounts, rates, and terms."
      breadcrumbs={[
        { name: "Loan Calculators", href: "/loan-calculators" },
        { name: "Personal Loan Calculator" },
      ]}
      howItWorks={`Personal loan payments use the standard loan amortization formula. The monthly payment is calculated based on your loan amount, interest rate, and repayment term. Each payment covers both principal and interest.`}
      faq={[
        {
          question: "What is a personal loan?",
          answer:
            "A personal loan is an unsecured loan from a bank, credit union, or online lender that you repay in fixed monthly installments. It can be used for debt consolidation, home improvement, medical expenses, or other purposes.",
        },
        {
          question: "What credit score do I need for a personal loan?",
          answer:
            "Most lenders prefer a credit score of 670+ for competitive rates. Some lenders offer loans to borrowers with scores as low as 580, but at higher interest rates.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Auto Loan Calculator",
          href: "/loan-calculators/auto-loan-calculator",
          description: "Car loan payments",
        },
        {
          name: "Credit Card Payoff",
          href: "/loan-calculators/credit-card-payoff-calculator",
          description: "Pay off credit card debt",
        },
        {
          name: "Mortgage Calculator",
          href: "/mortgage-calculators/mortgage-calculator",
          description: "Home loan payments",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Loan Amount ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
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
              Term (years)
            </label>
            <select
              className="calc-input"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            >
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={5}>5 years</option>
              <option value={7}>7 years</option>
            </select>
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate
        </button>
        {calculated && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">Monthly Payment</p>
            <p className="calc-result-value">
              {formatCurrency(result.payment)}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Total Interest</p>
                <p className="font-bold">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Total Paid</p>
                <p className="font-bold">{formatCurrency(result.totalPaid)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
