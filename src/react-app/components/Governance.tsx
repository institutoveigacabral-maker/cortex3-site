export default function Governance() {
  const controls = [
    "Capital",
    "Arquitetura",
    "Marca",
    "Expansão",
    "Encerramento de iniciativas",
  ];

  return (
    <section id="governance" className="py-32 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12 text-center">
          Governança e Disciplina
        </h2>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-10">
          <p className="text-xl text-slate-200 leading-relaxed mb-8">
            O Grupo 351 opera com{" "}
            <span className="text-white font-semibold">
              governança centralizada
            </span>{" "}
            e{" "}
            <span className="text-white font-semibold">
              execução descentralizada.
            </span>
          </p>

          <div className="mb-8">
            <h3 className="text-lg text-slate-300 mb-6">
              A holding controla:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {controls.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/60 border border-slate-700/30 rounded-xl px-6 py-4 flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700/50">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              As marcas executam dentro de regras claras, métricas comuns e
              processos definidos.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Equity é condicionado à entrega, à permanência e à contribuição
              real para o sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
