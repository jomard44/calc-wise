import { calculators } from "@/lib/calculators";
import type { Metadata } from "next";
import MortgageCalculator from "./calculators/MortgageCalculator";
import AffordabilityCalculator from "./calculators/AffordabilityCalculator";
import RefinanceCalculator from "./calculators/RefinanceCalculator";
import AutoLoanCalculator from "./calculators/AutoLoanCalculator";
import PersonalLoanCalculator from "./calculators/PersonalLoanCalculator";
import CreditCardPayoffCalculator from "./calculators/CreditCardPayoffCalculator";
import CompoundInterestCalculator from "./calculators/CompoundInterestCalculator";
import RetirementCalculator from "./calculators/RetirementCalculator";
import SavingsCalculator from "./calculators/SavingsCalculator";
import IncomeTaxCalculator from "./calculators/IncomeTaxCalculator";
import PaycheckCalculator from "./calculators/PaycheckCalculator";
import ProfitMarginCalculator from "./calculators/ProfitMarginCalculator";
import ROICalculator from "./calculators/ROICalculator";
import TipCalculator from "./calculators/TipCalculator";
import PercentageCalculator from "./calculators/PercentageCalculator";
import SalaryCalculator from "./calculators/SalaryCalculator";
import BMICalculator from "./calculators/BMICalculator";
import { notFound } from "next/navigation";

type Params = Promise<{ category: string; calculator: string }>;

const calculatorComponents: Record<string, React.ComponentType> = {
  "mortgage-calculator": MortgageCalculator,
  "affordability-calculator": AffordabilityCalculator,
  "refinance-calculator": RefinanceCalculator,
  "auto-loan-calculator": AutoLoanCalculator,
  "personal-loan-calculator": PersonalLoanCalculator,
  "credit-card-payoff-calculator": CreditCardPayoffCalculator,
  "compound-interest-calculator": CompoundInterestCalculator,
  "retirement-calculator": RetirementCalculator,
  "savings-calculator": SavingsCalculator,
  "income-tax-calculator": IncomeTaxCalculator,
  "paycheck-calculator": PaycheckCalculator,
  "profit-margin-calculator": ProfitMarginCalculator,
  "roi-calculator": ROICalculator,
  "tip-calculator": TipCalculator,
  "percentage-calculator": PercentageCalculator,
  "salary-calculator": SalaryCalculator,
  "bmi-calculator": BMICalculator,
};

export async function generateStaticParams() {
  return calculators.map((calc) => ({
    category: calc.categorySlug,
    calculator: calc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { calculator } = await params;
  const calc = calculators.find((c) => c.slug === calculator);
  if (!calc) return {};
  return {
    title: `${calc.name} — Free Online ${calc.name}`,
    description: calc.description,
    openGraph: {
      title: `${calc.name} | CalcWise`,
      description: calc.description,
    },
  };
}

export default async function CalculatorPage({ params }: { params: Params }) {
  const { calculator } = await params;
  const Component = calculatorComponents[calculator];
  if (!Component) notFound();
  return <Component />;
}
