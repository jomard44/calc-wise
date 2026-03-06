export interface Calculator {
  name: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  icon: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Mortgage Calculators",
    slug: "mortgage-calculators",
    description:
      "Calculate mortgage payments, affordability, refinancing, and amortization schedules.",
    icon: "🏠",
  },
  {
    name: "Loan Calculators",
    slug: "loan-calculators",
    description:
      "Calculate auto loans, personal loans, student loans, and debt payoff strategies.",
    icon: "💳",
  },
  {
    name: "Investment Calculators",
    slug: "investment-calculators",
    description:
      "Plan your investments, retirement, and calculate compound interest growth.",
    icon: "📈",
  },
  {
    name: "Tax Calculators",
    slug: "tax-calculators",
    description:
      "Estimate income tax, paycheck deductions, capital gains, and more.",
    icon: "🧾",
  },
  {
    name: "Business Calculators",
    slug: "business-calculators",
    description:
      "Calculate profit margins, ROI, break-even points, and business metrics.",
    icon: "💼",
  },
  {
    name: "Everyday Calculators",
    slug: "everyday-calculators",
    description:
      "Tip calculators, percentage calculators, salary converters, and more.",
    icon: "🔢",
  },
];

export const calculators: Calculator[] = [
  // Mortgage
  {
    name: "Mortgage Calculator",
    slug: "mortgage-calculator",
    description:
      "Calculate your monthly mortgage payment based on home price, down payment, interest rate, and loan term.",
    category: "Mortgage Calculators",
    categorySlug: "mortgage-calculators",
    icon: "🏠",
  },
  {
    name: "Affordability Calculator",
    slug: "affordability-calculator",
    description:
      "Find out how much house you can afford based on your income, debts, and down payment.",
    category: "Mortgage Calculators",
    categorySlug: "mortgage-calculators",
    icon: "💰",
  },
  {
    name: "Refinance Calculator",
    slug: "refinance-calculator",
    description:
      "See if refinancing your mortgage could save you money with a break-even analysis.",
    category: "Mortgage Calculators",
    categorySlug: "mortgage-calculators",
    icon: "🔄",
  },
  // Loan
  {
    name: "Auto Loan Calculator",
    slug: "auto-loan-calculator",
    description:
      "Calculate your monthly car payment and total cost of an auto loan.",
    category: "Loan Calculators",
    categorySlug: "loan-calculators",
    icon: "🚗",
  },
  {
    name: "Personal Loan Calculator",
    slug: "personal-loan-calculator",
    description:
      "Calculate monthly payments and total interest for a personal loan.",
    category: "Loan Calculators",
    categorySlug: "loan-calculators",
    icon: "💵",
  },
  {
    name: "Credit Card Payoff Calculator",
    slug: "credit-card-payoff-calculator",
    description:
      "Find out how long it will take to pay off your credit card balance and how much interest you'll pay.",
    category: "Loan Calculators",
    categorySlug: "loan-calculators",
    icon: "💳",
  },
  // Investment
  {
    name: "Compound Interest Calculator",
    slug: "compound-interest-calculator",
    description:
      "See how your money grows over time with the power of compound interest.",
    category: "Investment Calculators",
    categorySlug: "investment-calculators",
    icon: "📈",
  },
  {
    name: "Retirement Calculator",
    slug: "retirement-calculator",
    description:
      "Plan for retirement by estimating how much you need to save each month.",
    category: "Investment Calculators",
    categorySlug: "investment-calculators",
    icon: "🏖️",
  },
  {
    name: "Savings Calculator",
    slug: "savings-calculator",
    description:
      "Calculate how your savings will grow over time with regular deposits.",
    category: "Investment Calculators",
    categorySlug: "investment-calculators",
    icon: "🏦",
  },
  // Tax
  {
    name: "Income Tax Calculator",
    slug: "income-tax-calculator",
    description:
      "Estimate your federal income tax based on filing status, income, and deductions.",
    category: "Tax Calculators",
    categorySlug: "tax-calculators",
    icon: "🧾",
  },
  {
    name: "Paycheck Calculator",
    slug: "paycheck-calculator",
    description:
      "Calculate your take-home pay after federal and state taxes and deductions.",
    category: "Tax Calculators",
    categorySlug: "tax-calculators",
    icon: "💰",
  },
  // Business
  {
    name: "Profit Margin Calculator",
    slug: "profit-margin-calculator",
    description:
      "Calculate gross, operating, and net profit margins for your business.",
    category: "Business Calculators",
    categorySlug: "business-calculators",
    icon: "📊",
  },
  {
    name: "ROI Calculator",
    slug: "roi-calculator",
    description:
      "Calculate return on investment to evaluate the profitability of an investment.",
    category: "Business Calculators",
    categorySlug: "business-calculators",
    icon: "📉",
  },
  // Everyday
  {
    name: "Tip Calculator",
    slug: "tip-calculator",
    description:
      "Quickly calculate tips and split bills between friends at restaurants.",
    category: "Everyday Calculators",
    categorySlug: "everyday-calculators",
    icon: "🍽️",
  },
  {
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    description:
      "Calculate percentages, percentage change, and what percent one number is of another.",
    category: "Everyday Calculators",
    categorySlug: "everyday-calculators",
    icon: "🔢",
  },
  {
    name: "Salary Calculator",
    slug: "salary-calculator",
    description:
      "Convert between annual salary, monthly, bi-weekly, weekly, and hourly pay rates.",
    category: "Everyday Calculators",
    categorySlug: "everyday-calculators",
    icon: "💼",
  },
  {
    name: "BMI Calculator",
    slug: "bmi-calculator",
    description:
      "Calculate your Body Mass Index (BMI) and find out your weight category.",
    category: "Everyday Calculators",
    categorySlug: "everyday-calculators",
    icon: "⚖️",
  },
];

export function getCalculatorsByCategory(categorySlug: string): Calculator[] {
  return calculators.filter((c) => c.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
