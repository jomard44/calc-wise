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
  longDescription?: string;
}

export const categories: Category[] = [
  {
    name: "Mortgage Calculators",
    slug: "mortgage-calculators",
    description:
      "Calculate mortgage payments, affordability, refinancing, and amortization schedules.",
    icon: "🏠",
    longDescription:
      "Buying a home is one of the biggest financial decisions you'll ever make. Our mortgage calculators help you understand exactly what you can afford, how much your monthly payments will be, and whether refinancing makes sense. Whether you're a first-time homebuyer comparing 15-year vs. 30-year terms, or a homeowner considering a refinance to lock in a lower rate, these tools give you the numbers you need. Enter your home price, down payment, interest rate, and loan term to see a detailed breakdown of principal, interest, taxes, and insurance — plus a full amortization schedule showing how your balance decreases over time.",
  },
  {
    name: "Loan Calculators",
    slug: "loan-calculators",
    description:
      "Calculate auto loans, personal loans, student loans, and debt payoff strategies.",
    icon: "💳",
    longDescription:
      "From financing a car to consolidating credit card debt, loans are a common part of personal finance. Our loan calculators help you compare interest rates, estimate monthly payments, and figure out the true cost of borrowing. Use the auto loan calculator to see how different down payments and terms affect your monthly bill, or try the credit card payoff calculator to find out how long it will take to become debt-free. Understanding the total interest you'll pay over the life of a loan empowers you to negotiate better terms and save thousands of dollars.",
  },
  {
    name: "Investment Calculators",
    slug: "investment-calculators",
    description:
      "Plan your investments, retirement, and calculate compound interest growth.",
    icon: "📈",
    longDescription:
      "Building wealth takes time, and compound interest is your most powerful ally. Our investment calculators show you how regular contributions grow over the years, how different rates of return impact your portfolio, and how much you need to save each month to reach your retirement goals. Whether you're just starting to invest in your 20s or fine-tuning your retirement plan in your 50s, these tools model real-world scenarios including inflation, contribution increases, and varying compounding frequencies. See the dramatic difference that starting early or increasing your savings rate by just 1% can make over decades.",
  },
  {
    name: "Tax Calculators",
    slug: "tax-calculators",
    description:
      "Estimate income tax, paycheck deductions, capital gains, and more.",
    icon: "🧾",
    longDescription:
      "Understanding your tax burden is essential for financial planning. Our tax calculators use the latest federal tax brackets to estimate your income tax liability, help you understand how deductions and filing status affect what you owe, and break down your paycheck so you can see exactly where your money goes. Use the income tax calculator to compare different scenarios — like the impact of a raise, a side hustle, or contributing more to your 401(k). The paycheck calculator shows your net take-home pay after federal tax, state tax, Social Security, Medicare, and retirement contributions.",
  },
  {
    name: "Business Calculators",
    slug: "business-calculators",
    description:
      "Calculate profit margins, ROI, break-even points, and business metrics.",
    icon: "💼",
    longDescription:
      "Running a successful business means knowing your numbers. Our business calculators help entrepreneurs, small business owners, and managers make data-driven decisions. Calculate your gross and net profit margins to understand pricing strategy, use the ROI calculator to evaluate potential investments or marketing campaigns, and model different scenarios to find your break-even point. These tools are designed to give you quick, accurate answers so you can focus on growing your business rather than crunching numbers in a spreadsheet.",
  },
  {
    name: "Everyday Calculators",
    slug: "everyday-calculators",
    description:
      "Tip calculators, percentage calculators, salary converters, and more.",
    icon: "🔢",
    longDescription:
      "Not every calculation involves major financial decisions, but accuracy still matters. Our everyday calculators handle the math you encounter in daily life — from splitting a restaurant bill and calculating the right tip, to converting an hourly wage into an annual salary, to quickly finding percentages for discounts or markups. The BMI calculator helps you understand your body mass index category, while the percentage calculator handles three common scenarios: finding a percentage of a number, figuring out what percentage one number is of another, and calculating percent change between two values.",
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
