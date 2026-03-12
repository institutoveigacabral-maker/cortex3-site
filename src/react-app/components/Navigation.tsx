import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors"
          >
            GRUPO +351³
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/grupo"
              className={`text-sm transition-colors ${
                isActive("/grupo")
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Grupo +351³
            </Link>
            <Link
              to="/figital"
              className={`text-sm transition-colors ${
                isActive("/figital")
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Plataforma FIGITAL
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm transition-colors ${
                isActive("/portfolio")
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Portfólio
            </Link>
            <Link
              to="/governanca"
              className={`text-sm transition-colors ${
                isActive("/governanca")
                  ? "text-white font-medium"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Governança
            </Link>
            <Link
              to="/contato"
              className="text-sm bg-gradient-to-r from-orange-500 to-amber-600 text-white px-5 py-2 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
