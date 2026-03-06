/**
 * Financial calculation utility functions.
 * All formulas are well-tested standard financial formulas.
 */

/** Calculate monthly mortgage/loan payment using the standard amortization formula */
export function monthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  if (monthlyRate === 0) return principal / numPayments;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)
  );
}

/** Generate full amortization schedule */
export function amortizationSchedule(
  principal: number,
  annualRate: number,
  years: number
) {
  const payment = monthlyPayment(principal, annualRate, years);
  const monthlyRate = annualRate / 100 / 12;
  const schedule = [];
  let balance = principal;

  for (let month = 1; month <= years * 12; month++) {
    const interest = balance * monthlyRate;
    const principalPaid = payment - interest;
    balance = Math.max(0, balance - principalPaid);
    schedule.push({
      month,
      payment: Math.round(payment * 100) / 100,
      principal: Math.round(principalPaid * 100) / 100,
      interest: Math.round(interest * 100) / 100,
      balance: Math.round(balance * 100) / 100,
    });
  }
  return schedule;
}

/** Compound interest calculation */
export function compoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  monthlyContribution: number = 0,
  compoundingFrequency: number = 12
): {
  total: number;
  totalContributions: number;
  totalInterest: number;
  yearlyBreakdown: {
    year: number;
    balance: number;
    contributions: number;
    interest: number;
  }[];
} {
  const rate = annualRate / 100;
  const n = compoundingFrequency;
  const yearlyBreakdown = [];
  let balance = principal;
  let totalContributions = principal;

  for (let year = 1; year <= years; year++) {
    for (let period = 0; period < n; period++) {
      balance = balance * (1 + rate / n) + monthlyContribution * (12 / n);
      totalContributions += monthlyContribution * (12 / n);
    }
    yearlyBreakdown.push({
      year,
      balance: Math.round(balance * 100) / 100,
      contributions: Math.round(totalContributions * 100) / 100,
      interest: Math.round((balance - totalContributions) * 100) / 100,
    });
  }

  return {
    total: Math.round(balance * 100) / 100,
    totalContributions: Math.round(totalContributions * 100) / 100,
    totalInterest: Math.round((balance - totalContributions) * 100) / 100,
    yearlyBreakdown,
  };
}

/** Credit card payoff calculation */
export function creditCardPayoff(
  balance: number,
  annualRate: number,
  monthlyPayment: number
) {
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyPayment <= balance * monthlyRate) {
    return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity };
  }
  let remaining = balance;
  let totalInterest = 0;
  let months = 0;

  while (remaining > 0.01 && months < 1200) {
    const interest = remaining * monthlyRate;
    totalInterest += interest;
    remaining = remaining + interest - monthlyPayment;
    months++;
  }

  return {
    months,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPaid: Math.round((balance + totalInterest) * 100) / 100,
  };
}

/** Simple retirement calculation */
export function retirementSavings(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualReturn: number
) {
  const years = retirementAge - currentAge;
  return compoundInterest(
    currentSavings,
    annualReturn,
    years,
    monthlyContribution
  );
}

/** 2025/2026 Federal income tax brackets (single filer) */
export function federalIncomeTax(
  taxableIncome: number,
  filingStatus: "single" | "married" | "head"
): number {
  const brackets =
    filingStatus === "single"
      ? [
          { min: 0, max: 11925, rate: 0.1 },
          { min: 11925, max: 48475, rate: 0.12 },
          { min: 48475, max: 103350, rate: 0.22 },
          { min: 103350, max: 197300, rate: 0.24 },
          { min: 197300, max: 250525, rate: 0.32 },
          { min: 250525, max: 626350, rate: 0.35 },
          { min: 626350, max: Infinity, rate: 0.37 },
        ]
      : filingStatus === "married"
        ? [
            { min: 0, max: 23850, rate: 0.1 },
            { min: 23850, max: 96950, rate: 0.12 },
            { min: 96950, max: 206700, rate: 0.22 },
            { min: 206700, max: 394600, rate: 0.24 },
            { min: 394600, max: 501050, rate: 0.32 },
            { min: 501050, max: 751600, rate: 0.35 },
            { min: 751600, max: Infinity, rate: 0.37 },
          ]
        : [
            { min: 0, max: 17000, rate: 0.1 },
            { min: 17000, max: 64850, rate: 0.12 },
            { min: 64850, max: 103350, rate: 0.22 },
            { min: 103350, max: 197300, rate: 0.24 },
            { min: 197300, max: 250500, rate: 0.32 },
            { min: 250500, max: 626350, rate: 0.35 },
            { min: 626350, max: Infinity, rate: 0.37 },
          ];

  let tax = 0;
  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break;
    const taxable = Math.min(taxableIncome, bracket.max) - bracket.min;
    tax += taxable * bracket.rate;
  }
  return Math.round(tax * 100) / 100;
}

/** Format number as currency */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

/** Format number with commas */
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
