import { useState } from "react";
import Navigation from "@/react-app/components/Navigation";
import Footer from "@/react-app/components/Footer";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Falar com o grupo
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Sócios operacionais, investidores e parceiros estratégicos
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-10"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Tipo de oportunidade
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="marca">Marca</option>
                    <option value="operacao">Operação</option>
                    <option value="imovel">Imóvel</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="franquia">Franquia</option>
                    <option value="investimento">Investimento</option>
                    <option value="outra">Outra</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Descreva sua proposta ou interesse..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-semibold text-lg shadow-lg shadow-orange-500/20"
                >
                  Enviar proposta
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-10 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Mensagem enviada
              </h3>
              <p className="text-slate-300 mb-8">
                Recebemos sua proposta e entraremos em contato em breve.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Enviar outra mensagem
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Outras formas de contato
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">E-mail</h3>
              <a
                href="mailto:contato@grupo351.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                contato@grupo351.com
              </a>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Localização</h3>
              <p className="text-slate-400">Estoril, Portugal</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
