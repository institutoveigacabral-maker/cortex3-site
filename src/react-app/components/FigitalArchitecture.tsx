export default function FigitalArchitecture() {
  return (
    <section id="figital" className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Arquitetura FIGITAL
        </h2>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-10">
          <p className="text-xl text-slate-200 leading-relaxed mb-8">
            FIGITAL, para o Grupo 351, não é conceito de marketing.
            <br />
            <span className="text-white font-semibold">
              É arquitetura operacional.
            </span>
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Cada ponto físico, plataforma digital, franquia ou processo do
            grupo é instrumentado para:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded" />
              </div>
              <p className="text-slate-200">captar dados reais</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded" />
              </div>
              <p className="text-slate-200">estruturar big data operacional</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-indigo-500 rounded" />
              </div>
              <p className="text-slate-200">depurar e analisar informações</p>
            </div>

            <div className="bg-slate-900/60 border border-slate-700/30 rounded-xl p-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-cyan-500 rounded" />
              </div>
              <p className="text-slate-200">
                retroalimentar a tomada de decisão
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <p className="text-xl text-slate-200 leading-relaxed">
              O físico não opera separado do digital.
              <br />
              <span className="text-white font-semibold">
                Ambos fazem parte do mesmo sistema nervoso empresarial.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
