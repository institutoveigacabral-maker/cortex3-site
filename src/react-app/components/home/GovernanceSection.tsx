interface GovernanceSectionProps {
  title: string;
  paragraph1: string;
  paragraph2: string;
  listTitle: string;
  listItems: string[];
  linkText: string;
  linkHref: string;
}

export default function GovernanceSection({
  title,
  paragraph1,
  paragraph2,
  listTitle,
  listItems,
  linkText,
  linkHref,
}: GovernanceSectionProps) {
  const colors = ["bg-purple-500", "bg-orange-500", "bg-indigo-500"];

  return (
    <section id="governance" className="py-24 px-6 bg-slate-950/50">
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

          {/* Coluna Direita - Lista */}
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">{listTitle}</h3>
            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 ${colors[index % colors.length]} rounded-full mt-2 flex-shrink-0`}
                  />
                  <p className="text-slate-300 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={linkHref}
                className="inline-block text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                {linkText} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
