interface AboutSectionProps {
  title: string;
  description: string;
  listItems: string[];
}

export default function AboutSection({
  title,
  description,
  listItems,
}: AboutSectionProps) {
  const colors = ["bg-purple-500", "bg-orange-500", "bg-indigo-500"];

  return (
    <section id="about" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-4">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 ${colors[index % colors.length]} rounded-full mt-2 flex-shrink-0`}
                />
                <p className="text-slate-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
