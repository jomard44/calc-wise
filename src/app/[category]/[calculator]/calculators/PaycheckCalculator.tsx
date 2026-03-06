"use client";

import { useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import { federalIncomeTax, formatCurrency } from "@/lib/calculations";

export default function PaycheckCalculator() {
  const [salary, setSalary] = useState(65000);
  const [payFrequency, setPayFrequency] = useState<
    "biweekly" | "weekly" | "semimonthly" | "monthly"
  >("biweekly");
  const [filingStatus, setFilingStatus] = useState<
    "single" | "married" | "head"
  >("single");
  const [stateRate, setStateRate] = useState(5);
  const [retirement, setRetirement] = useState(6);
  const [calculated, setCalculated] = useState(false);
  const [result, setResult] = useState({
    gross: 0,
    federal: 0,
    state: 0,
    fica: 0,
    retirementAmt: 0,
    net: 0,
  });

  const calculate = () => {
    const periodsPerYear =
      payFrequency === "biweekly"
        ? 26
        : payFrequency === "weekly"
          ? 52
          : payFrequency === "semimonthly"
            ? 24
            : 12;
    const grossPerPeriod = salary / periodsPerYear;
    const annualFederal = federalIncomeTax(
      Math.max(0, salary - 14600),
      filingStatus
    );
    const federalPerPeriod = annualFederal / periodsPerYear;
    const statePerPeriod = (salary * stateRate) / 100 / periodsPerYear;
    const ficaPerPeriod = (salary * 0.0765) / periodsPerYear;
    const retirementPerPeriod = (grossPerPeriod * retirement) / 100;
    const net =
      grossPerPeriod -
      federalPerPeriod -
      statePerPeriod -
      ficaPerPeriod -
      retirementPerPeriod;

    setResult({
      gross: grossPerPeriod,
      federal: federalPerPeriod,
      state: statePerPeriod,
      fica: ficaPerPeriod,
      retirementAmt: retirementPerPeriod,
      net,
    });
    setCalculated(true);
  };

  return (
    <CalculatorLayout
      title="Paycheck Calculator"
      description="Calculate your take-home pay after federal and state taxes, FICA, and retirement contributions. See your net paycheck amount."
      breadcrumbs={[
        { name: "Tax Calculators", href: "/tax-calculators" },
        { name: "Paycheck Calculator" },
      ]}
      howItWorks={`Your paycheck is calculated by subtracting deductions from your gross pay:

Net Pay = Gross Pay – Federal Tax – State Tax – FICA (Social Security + Medicare) – Retirement Contributions

• Federal tax is based on IRS tax brackets for your filing status
• FICA includes Social Security (6.2%) and Medicare (1.45%) = 7.65% total
• State tax varies by state (0% in states like TX, FL, WA; up to 13%+ in CA)
• Retirement contributions (401k/403b) are deducted pre-tax`}
      faq={[
        {
          question: "What is FICA tax?",
          answer:
            "FICA stands for Federal Insurance Contributions Act. It includes Social Security tax (6.2% on income up to $168,600 in 2025) and Medicare tax (1.45% on all income). Your employer matches these contributions.",
        },
        {
          question: "How can I increase my take-home pay?",
          answer:
            "You can increase take-home pay by: adjusting W-4 withholdings, contributing less to retirement (though this reduces savings), using pre-tax benefits like FSA/HSA, or moving to a state with no income tax.",
        },
      ]}
      relatedCalculators={[
        {
          name: "Income Tax Calculator",
          href: "/tax-calculators/income-tax-calculator",
          description: "Annual tax estimate",
        },
        {
          name: "Salary Calculator",
          href: "/everyday-calculators/salary-calculator",
          description: "Convert salary rates",
        },
        {
          name: "Retirement Calculator",
          href: "/investment-calculators/retirement-calculator",
          description: "Plan retirment savings",
        },
      ]}
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Annual Salary ($)
            </label>
            <input
              type="number"
              className="calc-input"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Pay Frequency
            </label>
            <select
              className="calc-input"
              value={payFrequency}
              onChange={(e) =>
                setPayFrequency(e.target.value as typeof payFrequency)
              }
            >
              <option value="biweekly">Bi-Weekly (26 paychecks)</option>
              <option value="weekly">Weekly (52 paychecks)</option>
              <option value="semimonthly">Semi-Monthly (24 paychecks)</option>
              <option value="monthly">Monthly (12 paychecks)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Filing Status
            </label>
            <select
              className="calc-input"
              value={filingStatus}
              onChange={(e) =>
                setFilingStatus(e.target.value as typeof filingStatus)
              }
            >
              <option value="single">Single</option>
              <option value="married">Married Filing Jointly</option>
              <option value="head">Head of Household</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              State Tax Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              className="calc-input"
              value={stateRate}
              onChange={(e) => setStateRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Retirement Contribution (%)
            </label>
            <input
              type="number"
              step="0.5"
              className="calc-input"
              value={retirement}
              onChange={(e) => setRetirement(Number(e.target.value))}
            />
          </div>
        </div>
        <button onClick={calculate} className="calc-btn">
          Calculate Paycheck
        </button>
        {calculated && (
          <div className="space-y-3">
            <div className="calc-result">
              <p className="text-sm opacity-80 mb-1">
                Take-Home Pay (Per Paycheck)
              </p>
              <p className="calc-result-value">{formatCurrency(result.net)}</p>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-4">
              <h3 className="font-bold mb-3">Paycheck Breakdown</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Gross Pay</span>
                  <span className="font-medium">
                    {formatCurrency(result.gross)}
                  </span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Federal Tax</span>
                  <span>-{formatCurrency(result.federal)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>State Tax</span>
                  <span>-{formatCurrency(result.state)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>FICA (SS + Medicare)</span>
                  <span>-{formatCurrency(result.fica)}</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span>Retirement ({retirement}%)</span>
                  <span>-{formatCurrency(result.retirementAmt)}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2">
                  <span>Net Pay</span>
                  <span className="text-[var(--color-secondary)]">
                    {formatCurrency(result.net)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
