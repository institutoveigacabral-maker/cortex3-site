import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function GovernancaPage() {
  const scorecard = [
    { metric: "Caixa", description: "Liquidez e saúde financeira" },
    { metric: "Receita", description: "Faturamento total" },
    { metric: "Margem Bruta", description: "Eficiência operacional" },
    { metric: "EBITDA", description: "Resultado operacional" },
    { metric: "Retenção", description: "Fidelização de clientes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Governança e capital
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Governança centralizada, execução descentralizada. Controle claro,
            métricas comuns, disciplina operacional.
          </p>
        </div>
      </section>

      {/* Estrutura */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Estrutura de controle
          </h2>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 rounded-xl px-8 py-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Grupo 351 Holding
                </h3>
                <p className="text-slate-400">
                  100% Henrique, Fernando, Herson
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6 text-center">
                <h4 className="font-semibold text-white mb-3">
                  Marcas Operacionais
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Sócios operacionais por vesting
                </p>
                <div className="text-xs text-slate-500">
                  Purple Party, Venhaaa!!!, etc.
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6 text-center">
                <h4 className="font-semibold text-white mb-3">
                  Infraestrutura Tech
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Propriedade 100% holding
                </p>
                <div className="text-xs text-slate-500">
                  Ruptify, Forge and Flow 3D
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6 text-center">
                <h4 className="font-semibold text-white mb-3">
                  Conteúdo e IP
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Controle editorial central
                </p>
                <div className="text-xs text-slate-500">
                  Córtex FC, Long View
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Vesting */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Modelo de vesting
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Equity condicionado
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Sócios operacionais recebem equity progressivo condicionado à
                entrega de resultados, permanência na operação e contribuição ao
                ecossistema FIGITAL.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Período de cliff e vesting
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Cliff de 12 meses e vesting de 4 anos com marcos trimestrais.
                Equity não é garantido, mas conquistado por performance.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Reversão de equity
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Em caso de saída voluntária ou desligamento por desempenho, a
                holding mantém direito de recompra de equity a valor justo de
                mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alçadas e Decisão */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Matriz de alçadas
          </h2>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  Holding controla
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Capital e investimentos acima de €50k</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Arquitetura tecnológica e dados</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Marca, identidade visual e posicionamento</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Expansão para novos mercados ou produtos</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Encerramento ou pivot de iniciativas</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-4">
                  Marcas executam
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Operação do dia a dia</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Contratações operacionais</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Táticas de marketing e vendas</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Gestão de fornecedores e parceiros</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scorecard */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Scorecard oficial
          </h2>

          <p className="text-slate-400 mb-8 text-center">
            Métricas padrão acompanhadas mensalmente em todas as marcas
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {scorecard.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.metric}
                </h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-slate-800/50 rounded-xl p-8 text-center">
            <p className="text-slate-300 leading-relaxed">
              Todas as marcas reportam com a mesma estrutura, permitindo
              comparação, benchmarking e alocação racional de capital entre
              iniciativas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
