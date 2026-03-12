import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function PortfolioPage() {
  const brands = [
    {
      name: "Venhaaa!!!",
      category: "Infraestrutura",
      nature: "Super app e marketplace regional",
      role: "Plataforma de distribuição e captura de dados de comportamento de consumo",
      stage: "Tracionando",
      stageColor: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Ruptify",
      category: "Infraestrutura",
      nature: "Plataforma EdTech e consórcio de cursos",
      role: "Infraestrutura educacional e geração de receita recorrente",
      stage: "Piloto",
      stageColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      name: "Forge and Flow 3D",
      category: "Infraestrutura",
      nature: "Manufatura distribuída via impressão 3D",
      role: "Produção sob demanda e rede de makers",
      stage: "Ideação",
      stageColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      name: "Purple Party",
      category: "Marca",
      nature: "Franqueadora e plataforma de atacado",
      role: "Escala via franquias e distribuição B2B",
      stage: "Escalando",
      stageColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      name: "Barbearia do Rão",
      category: "Marca",
      nature: "Marca física premium de barbearia",
      role: "Operação própria que gera dados de serviços e varejo",
      stage: "Tracionando",
      stageColor: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Córtex FC",
      category: "Marca",
      nature: "Conteúdo estratégico e autoridade",
      role: "Construção de audiência e posicionamento do grupo",
      stage: "Tracionando",
      stageColor: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      name: "Long View",
      category: "Marca",
      nature: "Visão de longo prazo e ativos intelectuais",
      role: "Produção de conteúdo premium e think tank",
      stage: "Piloto",
      stageColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
  ];

  const categoryColors: Record<string, string> = {
    Infraestrutura: "border-l-4 border-l-purple-500",
    Marca: "border-l-4 border-l-orange-500",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Portfólio de marcas
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Operações reais que geram dados, receita e aprendizado cumulativo.
            Cada marca opera dentro da arquitetura FIGITAL do grupo.
          </p>
        </div>
      </section>

      {/* Legenda de Estágios */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-slate-400">Ideação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-slate-400">Piloto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-slate-400">Tracionando</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-slate-400">Escalando</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className={`bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-slate-700 transition-all ${
                categoryColors[brand.category]
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {brand.name}
                    </h3>
                    <span className="text-xs px-3 py-1 bg-slate-800 text-slate-400 rounded-full">
                      {brand.category}
                    </span>
                  </div>
                  <p className="text-slate-400 italic">{brand.nature}</p>
                </div>
                <span
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${brand.stageColor}`}
                >
                  {brand.stage}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Papel estratégico
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{brand.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parcerias */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Parcerias estratégicas
          </h2>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Comex BCN</h3>
            <p className="text-slate-400 mb-4">
              Parceria de comércio exterior e logística
            </p>
            <p className="text-slate-300 leading-relaxed">
              Integração para operações internacionais e infraestrutura de
              importação/exportação entre Portugal e Brasil.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
