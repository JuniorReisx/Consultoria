import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IncomeForm() {
  const [renda, setRenda] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (renda.trim()) {
      console.log("Renda selecionada:", renda);
      navigate('/FeedbackForm');
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
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

      <main className="flex-1 bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Qual é a média da sua renda mensal?
            </h1>

            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="renda"
                    value="sem-renda"
                    checked={renda === "sem-renda"}
                    onChange={(e) => setRenda(e.target.value)}
                    className="mr-3 text-gray-600"
                  />
                  <span className="text-gray-700">Não tenho renda...</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="renda"
                    value="menos-1000"
                    checked={renda === "menos-1000"}
                    onChange={(e) => setRenda(e.target.value)}
                    className="mr-3 text-gray-600"
                  />
                  <span className="text-gray-700">Menos de R$1.000</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="renda"
                    value="1000-2000"
                    checked={renda === "1000-2000"}
                    onChange={(e) => setRenda(e.target.value)}
                    className="mr-3 text-gray-600"
                  />
                  <span className="text-gray-700">R$1.000 até R$2.000</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="renda"
                    value="2000-4000"
                    checked={renda === "2000-4000"}
                    onChange={(e) => setRenda(e.target.value)}
                    className="mr-3 text-gray-600"
                  />
                  <span className="text-gray-700">R$2.000 até R$4.000</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="renda"
                    value="acima-4000"
                    checked={renda === "acima-4000"}
                    onChange={(e) => setRenda(e.target.value)}
                    className="mr-3 text-gray-600"
                  />
                  <span className="text-gray-700">Acima de R$4.000</span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                disabled={!renda.trim()}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-4 flex-shrink-0">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
