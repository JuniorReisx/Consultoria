import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgeForm() {
  const [idade, setIdade] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idade.trim()) {
      console.log("Idade enviada:", idade);
      navigate("/IncomeForm");
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
      </header>

      <main className="flex-1 bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Qual é a sua idade?
            </h1>

            <div className="space-y-6">
              <div>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  placeholder="25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!idade.trim()}
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
