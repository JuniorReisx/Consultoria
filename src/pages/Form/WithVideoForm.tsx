import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WithVideoForm() {
  const [whatsappContact, setWhatsappContact] = useState("");
  const [countdown, setCountdown] = useState(600);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsappContact.trim()) {
      console.log("WhatsApp Contact:", whatsappContact);
      navigate("/ThankyouPage"); // Navegação com react-router
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm flex-shrink-0">
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-700">
            Victor Souza
          </div>
          <div className="text-xs text-gray-500">
            {Math.round(scrollProgress)}% concluído
          </div>
        </div>
      </header>

      <main className="flex-1 flex justify-center p-6 pt-32">
        <div className="w-full max-w-2xl">
          <div className="bg-green-100 text-green-800 text-center py-2 px-4 rounded-lg mb-6">
            <span className="text-sm font-medium">
              Tempo limitado para preencher: {formatTime(countdown)}
            </span>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
              Entenda em <span className="text-red-600">30 segundos</span> o
              porquê você deve participar da nossa consultoria.
            </h1>

            <p className="text-gray-600 text-sm mb-6">
              Essa é uma reunião 100% personalizada e individual.
              <br />
              Vamos estudar seu caso, te orientar e te entregar um plano direto
              e personalizado.
            </p>
          </div>

          <div className="mb-8">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/GN4Yn4wGqKY?si=62xyUP3_DIcDyMCY"
                title="Vídeo da Consultoria"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              Preencha o formulário depois de assistir o vídeo acima.
            </p>
          </div>

          <div>
            <input
              type="text"
              value={whatsappContact}
              onChange={(e) => setWhatsappContact(e.target.value)}
              placeholder="Seu WhatsApp"
              className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
            />
            <button
              onClick={handleSubmit}
              disabled={!whatsappContact.trim()}
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
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
