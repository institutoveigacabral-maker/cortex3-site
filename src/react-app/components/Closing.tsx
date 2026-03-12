export default function Closing() {
  return (
    <section className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-12">
          <p className="text-2xl text-slate-200 leading-relaxed mb-6">
            O Grupo 351 não é um conjunto de projetos.
            <br />
            <span className="text-white font-bold text-3xl">
              É um sistema FIGITAL de criação de ativos.
            </span>
          </p>

          <div className="mt-12 pt-12 border-t border-slate-700/50 space-y-4">
            <p className="text-lg text-slate-300">Cada decisão deixa rastro.</p>
            <p className="text-lg text-slate-300">Cada erro vira aprendizado.</p>
            <p className="text-lg text-slate-300">
              Cada ciclo fortalece o próximo.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-3xl font-bold text-white mb-4 tracking-tight">
            GRUPO 351
          </div>
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <span>Estoril, Portugal</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <span>Europa • América Latina</span>
          </div>
        </div>
      </div>
    </section>
  );
}
