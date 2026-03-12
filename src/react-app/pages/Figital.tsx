import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function FigitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Plataforma FIGITAL
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            FIGITAL não é conceito de marketing. É arquitetura operacional que
            integra físico e digital em um sistema único orientado por dados.
          </p>
        </div>
      </section>

      {/* Conceito */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              O que é FIGITAL
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Cada ponto físico, plataforma digital, franquia ou processo do
              grupo é instrumentado para captar, estruturar, depurar e
              retroalimentar decisões com dados reais.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📊</div>
                </div>
                <h3 className="text-white font-semibold mb-2">Captar</h3>
                <p className="text-sm text-slate-400">Dados reais</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🗄️</div>
                </div>
                <h3 className="text-white font-semibold mb-2">Estruturar</h3>
                <p className="text-sm text-slate-400">Big data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🔍</div>
                </div>
                <h3 className="text-white font-semibold mb-2">Depurar</h3>
                <p className="text-sm text-slate-400">Análise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">⚡</div>
                </div>
                <h3 className="text-white font-semibold mb-2">Retroalimentar</h3>
                <p className="text-sm text-slate-400">Decisões</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Três Camadas */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            As três camadas
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-400">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Infraestrutura — Sensores FIGITAIS
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Plataformas que captam sinais reais de comportamento,
                    transação e engajamento.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Venhaaa!!!
                      </h4>
                      <p className="text-sm text-slate-400">
                        Super app e marketplace regional
                      </p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Ruptify
                      </h4>
                      <p className="text-sm text-slate-400">
                        EdTech e consórcio de cursos
                      </p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Forge and Flow 3D
                      </h4>
                      <p className="text-sm text-slate-400">
                        Manufatura distribuída
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Produtos & Marcas
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Operações físicas e digitais que geram receita e
                    aprendizado.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Purple Party
                      </h4>
                      <p className="text-sm text-slate-400">
                        Franqueadora e atacado
                      </p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Barbearia do Rão
                      </h4>
                      <p className="text-sm text-slate-400">Marca física premium</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Córtex FC
                      </h4>
                      <p className="text-sm text-slate-400">
                        Conteúdo estratégico
                      </p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">
                        Long View
                      </h4>
                      <p className="text-sm text-slate-400">
                        Visão de longo prazo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-2xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-indigo-400">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Distribuição
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Canais físicos e digitais que levam produtos aos clientes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>Lojas físicas próprias</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>Rede de franquias</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>E-commerce e marketplaces</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>Super app Venhaaa!!!</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span>Comunidade e conteúdo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrama Simplificado */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Como funciona
          </h2>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏪</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Evento Físico/Digital
                </h3>
                <p className="text-sm text-slate-400">
                  Transação, clique, visita
                </p>
              </div>

              <div className="text-slate-600 text-3xl">→</div>

              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Evento FIGITAL
                </h3>
                <p className="text-sm text-slate-400">Captura e registro</p>
              </div>

              <div className="text-slate-600 text-3xl">→</div>

              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🗄️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Data Lake</h3>
                <p className="text-sm text-slate-400">
                  Estruturação e análise
                </p>
              </div>

              <div className="text-slate-600 text-3xl">→</div>

              <div className="text-center flex-1">
                <div className="w-20 h-20 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Decisão / IA
                </h3>
                <p className="text-sm text-slate-400">Ação estratégica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
