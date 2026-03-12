export default function Thesis() {
  return (
    <section id="thesis" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Nossa Tese
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-10">
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              O Grupo 351 opera a partir de um princípio claro:{" "}
              <span className="text-white font-semibold">
                negócios que não aprendem com seus próprios dados escalam erro.
              </span>
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Por isso, todas as nossas marcas são desenhadas como nós de uma
              rede FIGITAL, onde:
            </p>

            <div className="space-y-4 ml-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300">
                  o físico gera sinais reais,
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300">
                  o digital organiza e processa esses sinais,
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300">
                  e a inteligência resultante orienta decisões operacionais,
                  estratégicas e de capital.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-lg text-slate-200 leading-relaxed">
                Não construímos empresas isoladas.
                <br />
                <span className="text-white font-semibold">
                  Construímos um sistema que aprende com cada interação do
                  ecossistema.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
