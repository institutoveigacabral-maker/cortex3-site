export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Grupo 351
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl text-slate-200 font-light mb-4">
            Plataforma FIGITAL de Criação de Ativos
          </h2>
        </div>

        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Uma holding empresarial sediada em Portugal, construída para integrar
          operações físicas e digitais sob uma arquitetura orientada por dados,
          governança centralizada e execução disciplinada.
        </p>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-slate-300 leading-relaxed">
            O Grupo 351 é uma holding fundada por Henrique, Fernando e Herson,
            com atuação entre Europa e América Latina. Nosso foco é criar,
            operar e escalar marcas próprias com fundamento econômico real,
            transformando operações físicas e digitais em aprendizado contínuo,
            eficiência operacional e valor de longo prazo.
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4 text-sm text-slate-400">
          <span>Estoril, Portugal</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full" />
          <span>Europa • América Latina</span>
        </div>
      </div>
    </section>
  );
}
