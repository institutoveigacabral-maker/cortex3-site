import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 tracking-tight">
              GRUPO +351³
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Holding FIGITAL luso-brasileira de criação de ativos
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>Estoril, Portugal</span>
              <span className="w-1 h-1 bg-slate-700 rounded-full" />
              <span>Europa • América Latina</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/grupo"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Grupo +351³
                </Link>
              </li>
              <li>
                <Link
                  to="/figital"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Plataforma FIGITAL
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/governanca"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Governança
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <Link
              to="/contato"
              className="inline-block text-sm bg-gradient-to-r from-orange-500 to-amber-600 text-white px-5 py-2 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-medium"
            >
              Falar com o grupo
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Grupo +351³. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
