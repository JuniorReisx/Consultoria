import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function YesorNoForm() {
  const [resposta, setResposta] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resposta.trim()) {
      console.log("Contato WhatsApp:", resposta);
      navigate("/WithVideoForm"); // navega para o formulário com vídeo
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <header className="flex-shrink-0">
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-700">
            Victor Souza
          </div>
          <div className="text-xs text-gray-500">100% concluído</div>
        </div>

        <div className="h-1 bg-gray-200">
          <div className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out" />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              Caso você seja aprovado(a), nossa equipe vai entrar em contato
              individual para falar com você no WhatsApp, aprova esse contato?
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              Fica atento(a) no seu WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="contato"
                  value="sim"
                  checked={resposta === "sim"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">Sim.</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="contato"
                  value="nao"
                  checked={resposta === "nao"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">Não.</span>
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              disabled={!resposta.trim()}
            >
              Continuar
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-4 flex-shrink-0">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 - Criado via inlead.digital | Central de anúncios
          </p>
        </div>
      </footer>
    </div>
  );
}
