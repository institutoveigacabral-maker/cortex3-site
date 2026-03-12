import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import GrupoPage from "@/react-app/pages/Grupo";
import FigitalPage from "@/react-app/pages/Figital";
import PortfolioPage from "@/react-app/pages/Portfolio";
import GovernancaPage from "@/react-app/pages/Governanca";
import ContatoPage from "@/react-app/pages/Contato";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grupo" element={<GrupoPage />} />
        <Route path="/figital" element={<FigitalPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/governanca" element={<GovernancaPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </Router>
  );
}
