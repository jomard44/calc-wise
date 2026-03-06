"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { retirementSavings, formatCurrency } from "@/lib/calculations";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState<ReturnType<
    typeof retirementSavings
  > | null>(null);

  const calculate = () => {
    const res = retirementSavings(
      currentAge,
      retirementAge,
      currentSavings,
      monthlyContribution,
      annualReturn
    );
    setResult(res);
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Retirement Calculator"
      description="Estimate how much you'll have saved for retirement based on your current savings, monthly contributions, and expected return on investment."
      breadcrumbs={[
        { name: "Investment Calculators", href: "/investment-calculators" },
        { name: "Retirement Calculator" },
      ]}
      howItWorks={`This calculator projects your retirement savings by compounding your current savings and monthly contributions at your expected annual return rate. It uses monthly compounding to simulate realistic investment growth over the years until your target retirement age.`}
      faq={[
        {
          question: "How much do I need to retire?",
          answer:
            "A common rule of thumb is to have 25 times your annual expenses saved (the 4% rule). If you spend $50,000/year, aim for $1.25 million. However, this varies based on lifestyle, healthcare costs, Social Security, and other factors.",
        },
        {
          question: "What is a reasonable rate of return to expect?",
          answer:
            "A diversified stock portfolio has historically returned about 7-10% annually before inflation. A more conservative portfolio mixing stocks and bonds might return 5-7%. Use a conservative estimate for planning.",
        },
        {
          question: "When should I start saving for retirement?",
          answer:
            "The earlier the better. Starting at 25 vs. 35 can mean hundreds of thousands more at retirement due to compound interest. Even small amounts early on can grow significantly over decades.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Compound Interest",
          href: "/investment-calculators/compound-interest-calculator",
          description: "See how money grows over time",
        },
        {
          name: "Savings Calculator",
          href: "/investment-calculators/savings-calculator",
          description: "Calculate savings growth",
        },
        {
          name: "Income Tax Calculator",
          href: "/tax-calculators/income-tax-calculator",
          description: "Estimate your taxes",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Age
            </label>
            <input
              type="number"
              className="calc-input"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Retirement Age
            </label>
            <input
              type="number"
              className="calc-input"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Savings ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Monthly Contribution ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Expected Annual Return (%)
            </label>
            <input
              type="number"
              step="0.1"
              className="calc-input"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Retirement Savings
        </button>
        {calculated && result && (
          <div className="calc-result">
            <p className="text-sm opacity-80 mb-1">
              Estimated Retirement Savings at Age {retirementAge}
            </p>
            <p className="calc-result-value">{formatCurrency(result.total)}</p>
            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-70">Years to Retire</p>
                <p className="font-bold">{retirementAge - currentAge}</p>
              </div>
              <div>
                <p className="opacity-70">Total Contributions</p>
                <p className="font-bold">
                  {formatCurrency(result.totalContributions)}
                </p>
              </div>
              <div>
                <p className="opacity-70">Interest Earned</p>
                <p className="font-bold">
                  {formatCurrency(result.totalInterest)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
