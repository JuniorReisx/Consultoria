export default function ThankyouPage() {
  const handleAccessGift = () => {
    console.log("Accessing gift...");
    window.location.href = '/VideoTrainingPage';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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

      <main className="flex-1 flex justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-blue-600 mb-8">
              OBRIGADO POR RESPONDER!!
            </h1>

            <div className="text-left space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Estamos selecionando <strong>A DEDO</strong> pessoas para uma consultoria individual gratuita, onde mostraremos um conteúdo que ninguém do mercado está falando como deveria.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Se você tiver cada mínimo detalhe que precisamos para você ser o nosso próximo case de sucesso, os fundadores da empresa (Kauan Vecker ou Arthur Ramos) vão te chamar por DM do Instagram ou WhatsApp.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Enquanto isso, clique no botão abaixo para acessar nossa comunidade totalmente gratuita, que vai te ajudar a começar ou escalar o seu negócio.
              </p>
            </div>
          </div>

          <section className="pb-12 bg-white">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <button
                onClick={handleAccessGift}
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                ACESSAR PRESENTE
              </button>
            </div>
          </section>
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