interface FigitalCard {
  title: string;
  body: string;
}

interface FigitalSectionProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  cards: FigitalCard[];
  linkText: string;
  linkHref: string;
}

export default function FigitalSection({
  title,
  paragraph1,
  paragraph2,
  cards,
  linkText,
  linkHref,
}: FigitalSectionProps) {
  return (
    <section id="figital" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {paragraph1}
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              {paragraph2}
            </p>
          </div>

          {/* Coluna Direita - Cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
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
