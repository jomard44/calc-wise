import Link from "next/link";
import {
  getCalculatorsByCategory,
  getCategoryBySlug,
  categories,
} from "@/lib/calculators";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdUnit";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = Promise<{ category: string }>;

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Free Online ${cat.name}`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const calcs = getCalculatorsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ name: cat.name }]} />

      <AdUnit slot="category-top" format="horizontal" />

      <div className="text-center mb-10">
        <div className="text-5xl mb-4">{cat.icon}</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-3">
          {cat.name}
        </h1>
        <p className="text-[var(--color-text-light)] text-lg max-w-2xl mx-auto">
          {cat.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {calcs.map((calc) => (
          <Link
            key={calc.slug}
            href={`/${category}/${calc.slug}`}
            className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] p-6 hover:shadow-md hover:border-[var(--color-primary)]/30 transition-all group"
          >
            <div className="text-3xl mb-3">{calc.icon}</div>
            <h2 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
              {calc.name}
            </h2>
            <p className="text-sm text-[var(--color-text-light)] mt-2">
              {calc.description}
            </p>
          </Link>
        ))}
      </div>

      <AdUnit slot="category-bottom" format="horizontal" />
    </div>
  );
}
