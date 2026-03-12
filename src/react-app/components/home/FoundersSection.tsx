interface Founder {
  title: string;
  subtitle: string;
  body: string;
}

interface FoundersSectionProps {
  title: string;
  founders: Founder[];
}

export default function FoundersSection({
  title,
  founders,
}: FoundersSectionProps) {
  return (
    <section id="founders" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-3xl font-bold text-white">
                  {founder.title.split(" ")[0].charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {founder.title}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-4 text-center">
                {founder.subtitle}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {founder.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
