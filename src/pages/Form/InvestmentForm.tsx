import { useState } from "react";

export default function InvestmentForm() {
  const [resposta, setResposta] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resposta.trim()) {
      console.log("Investimento selecionado:", resposta);
      window.location.href = '/YesorNoForm';
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
  <header className=" flex-shrink-0">
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
              Qual valor você tem disponível hoje e está disposto(a) a investir para fazer isso dar certo?
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              desde começar no digital ou escalar seu negócio?
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="investimento"
                  value="sem-investimento"
                  checked={resposta === "sem-investimento"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">Não tenho nada!</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="investimento"
                  value="397-497"
                  checked={resposta === "397-497"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">R$397,00 a R$497,00</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="investimento"
                  value="497-797"
                  checked={resposta === "497-797"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">R$497,00 a R$797,00</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="investimento"
                  value="797-997"
                  checked={resposta === "797-997"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">R$797,00 a R$997,00</span>
              </label>

              <label className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="investimento"
                  value="acima-997"
                  checked={resposta === "acima-997"}
                  onChange={(e) => setResposta(e.target.value)}
                  className="mr-3 text-gray-600"
                />
                <span className="text-gray-700">Acima de R$997,00.</span>
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