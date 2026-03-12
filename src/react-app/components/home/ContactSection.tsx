interface ContactSectionProps {
  title: string;
  paragraph: string;
  listItems: string[];
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}

export default function ContactSection({
  title,
  paragraph,
  listItems,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: ContactSectionProps) {
  const colors = ["bg-purple-500", "bg-orange-500", "bg-indigo-500"];

  return (
    <section id="contact-section" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-slate-800/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {title}
          </h2>

          <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">
            {paragraph}
          </p>

          <div className="bg-slate-900/50 rounded-xl p-8 mb-10">
            <ul className="space-y-3">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <div
                    className={`w-2 h-2 ${colors[index % colors.length]} rounded-full mt-2 flex-shrink-0`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={primaryButtonHref}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-semibold text-lg shadow-lg shadow-orange-500/20 text-center"
            >
              {primaryButtonLabel}
            </a>
            <a
              href={secondaryButtonHref}
              className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-slate-800 transition-all font-semibold text-lg border border-slate-700 text-center"
            >
              {secondaryButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
