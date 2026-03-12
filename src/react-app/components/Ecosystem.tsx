export default function Ecosystem() {
  const infrastructure = [
    {
      name: "Venhaaa!!!",
      description: "Super app e marketplace regional",
    },
    {
      name: "Ruptify",
      description: "Plataforma EdTech e consórcio de cursos",
    },
    {
      name: "Forge and Flow 3D",
      description: "Manufatura distribuída via impressão 3D",
    },
  ];

  const brands = [
    {
      name: "Córtex FC",
      description: "Conteúdo estratégico e autoridade",
    },
    {
      name: "Long View",
      description: "Visão de longo prazo e ativos intelectuais",
    },
    {
      name: "Barbearia do Rão",
      description: "Marca física",
    },
    {
      name: "Purple Party",
      description: "Franqueadora e plataforma de atacado",
    },
  ];

  const distribution = [
    "Lojas físicas",
    "Franquias",
    "E-commerce próprio",
    "Super app Venhaaa!!!",
    "Comunidade e conteúdo",
  ];

  return (
    <section id="ecosystem" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-8 text-center">
          Arquitetura do Ecossistema
        </h2>
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Como Operamos
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Infrastructure */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Infraestrutura
            </h3>
            <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider">
              Sensores FIGITAIS
            </p>
            <div className="space-y-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products & Brands */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Produtos & Marcas
            </h3>
            <div className="space-y-6 mt-12">
              {brands.map((item, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Distribuição
            </h3>
            <div className="space-y-4 mt-12">
              {distribution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          <p className="text-xl text-slate-200 leading-relaxed">
            Nenhuma marca opera isolada.
            <br />
            <span className="text-white font-semibold">
              O valor está na integração entre operação, dado e decisão.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
