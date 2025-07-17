import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const [resposta, setResposta] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resposta.trim()) {
      console.log("Resposta enviada:", resposta);
      navigate("/InvestmentForm");
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
        
        <div className="p-4">
          <button className="text-gray-700 hover:text-gray-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6 leading-tight">
              O que, na sua opinião, ainda não está 100% para que você possa começar ou escalar o seu negócio digital?
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              Conhecimento? oferta? estratégia de <span className="text-blue-600">marketing</span>?
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <textarea
                value={resposta}
                onChange={(e) => setResposta(e.target.value)}
                placeholder="Digite aqui..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                rows={4}
                onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSubmit(e)}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
