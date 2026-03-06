"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { creditCardPayoff, formatCurrency } from "@/lib/calculations";

export default function CreditCardPayoffCalculator() {
  const [balance, setBalance] = useState(5000);
  const [rate, setRate] = useState(22.99);
  const [payment, setPayment] = useState(200);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    months: 0,
    totalInterest: 0,
    totalPaid: 0,
  });

  const calculate = () => {
    const res = creditCardPayoff(balance, rate, payment);
    setResult(res);
    setCalculated(true);
  };

  const years = Math.floor(result.months / 12);
  const months = result.months % 12;

  return (
    <CalculatorLayout
      title="Credit Card Payoff Calculator"
      description="Find out how long it will take to pay off your credit card balance and how much total interest you'll pay."
      breadcrumbs={[
        { name: "Loan Calculators", href: "/loan-calculators" },
        { name: "Credit Card Payoff Calculator" },
      ]}
      howItWorks={`This calculator computes how long it takes to pay off a credit card balance by simulating monthly payments. Each month, interest is charged on the remaining balance at the daily periodic rate. Your payment is applied first to interest, then to principal. The process repeats until the balance reaches zero.`}
      faq={[
        {
          question: "What is a good strategy to pay off credit card debt?",
          answer:
            "Two popular strategies are the avalanche method (pay highest-rate card first) and the snowball method (pay smallest balance first). The avalanche method saves more on interest, while the snowball method provides psychological wins.",
        },
        {
          question: "Why is my balance barely decreasing?",
          answer:
            "If your monthly payment is close to the minimum, most of it goes toward interest. Try increasing your monthly payment to make faster progress on the principal balance.",
        },
        {
          question: "Should I transfer my balance to a 0% APR card?",
          answer:
            "Balance transfer cards can save significant interest if you can pay off the balance during the promotional period. Watch for transfer fees (typically 3-5%) and make sure you have a plan to pay it off before the regular APR kicks in.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Personal Loan Calculator",
          href: "/loan-calculators/personal-loan-calculator",
          description: "Consider consolidating debt",
        },
        {
          name: "Savings Calculator",
          href: "/investment-calculators/savings-calculator",
          description: "Build an emergency fund",
        },
        {
          name: "Compound Interest",
          href: "/investment-calculators/compound-interest-calculator",
          description: "Grow your money",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Credit Card Balance ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">APR (%)</label>
            <input
              type="number"
              step="0.01"
              className="calc-input"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Payment ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={payment}
              onChange={(e) => setPayment(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Payoff
        </button>
        {calculated && (
          <div className="calc-result">
            {result.months === Infinity ? (
              <p className="text-lg font-bold">
                Your payment is too low to pay off this balance. Please increase
                your monthly payment above the monthly interest charge.
              </p>
            ) : (
              <>
                <p className="text-sm opacity-80 mb-1">Time to Pay Off</p>
                <p className="calc-result-value">
                  {years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : ""}
                  {months} month{months !== 1 ? "s" : ""}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                  <div>
                    <p className="opacity-70">Total Interest Paid</p>
                    <p className="font-bold">
                      {formatCurrency(result.totalInterest)}
                    </p>
                  </div>
                  <div>
                    <p className="opacity-70">Total Amount Paid</p>
                    <p className="font-bold">
                      {formatCurrency(result.totalPaid)}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
