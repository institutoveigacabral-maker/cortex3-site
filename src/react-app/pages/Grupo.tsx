import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function GrupoPage() {
  const founders = [
    {
      name: "Henrique",
      track: "Casarão Lustres, experiência em varejo premium",
    },
    {
      name: "Fernando",
      track: "Império dos Freios, construção de franquias",
    },
    {
      name: "Herson",
      track: "Grupo Rão, operação multicanal",
    },
  ];

  const principles = [
    {
      title: "Disciplina operacional",
      description: "Processos claros, métricas consistentes, decisões baseadas em dados.",
    },
    {
      title: "Governança rigorosa",
      description: "Alçadas definidas, vesting por entrega, controle centralizado.",
    },
    {
      title: "Visão de longo prazo",
      description: "Crescimento sustentável, não otimização de curto prazo.",
    },
    {
      title: "Aprendizado cumulativo",
      description: "Cada operação alimenta o sistema com dados e inteligência.",
    },
    {
      title: "Integração FIGITAL",
      description: "Físico e digital como partes de um mesmo organismo.",
    },
    {
      title: "Execução descentralizada",
      description: "Autonomia operacional dentro de regras claras.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Grupo 351
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Uma holding empresarial fundada por três empreendedores com track
            record em varejo, franquias e operações multicanal. Sediada em
            Estoril, Portugal, com foco em mercados luso-brasileiros.
          </p>
        </div>
      </section>

      {/* Fundadores */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Fundadores
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="text-3xl font-bold text-white">
                    {founder.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {founder.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {founder.track}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Missão</h3>
              <p className="text-slate-300 leading-relaxed">
                Criar e escalar marcas próprias que conectam físico e digital,
                gerando valor real e sustentável no longo prazo.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Visão</h3>
              <p className="text-slate-300 leading-relaxed">
                Construir um grupo empresarial que cresce sem perder controle,
                escala sem improviso, e aprende com cada operação.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Valores</h3>
              <p className="text-slate-300 leading-relaxed">
                Disciplina, governança, dados, longo prazo, integração e
                aprendizado contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Código Cultural */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Código cultural
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
