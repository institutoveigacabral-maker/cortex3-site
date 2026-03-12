interface Brand {
  overline: string;
  title: string;
  body: string;
}

interface PortfolioSectionProps {
  title: string;
  brands: Brand[];
  linkText: string;
  linkHref: string;
}

export default function PortfolioSection({
  title,
  brands,
  linkText,
  linkHref,
}: PortfolioSectionProps) {
  return (
    <section id="portfolio-section" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700 transition-all"
            >
              <p className="text-purple-400 text-sm font-medium mb-2">
                {brand.overline}
              </p>
              <h3 className="text-2xl font-bold text-white mb-4">
                {brand.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{brand.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={linkHref}
            className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            {linkText} →
          </a>
        </div>
      </div>
    </section>
  );
}
