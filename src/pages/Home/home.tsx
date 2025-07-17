import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import consultoria from "../../assets/consultoriaUm.jpg";
import consultoria2 from "../../assets/consultoriaDois.jpg";
import { Link } from "react-router-dom";

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const faqData = [
    {
      question: "Preciso pagar algo?",
      answer: "Não. A consultoria é totalmente gratuita e sem compromisso.",
    },
    {
      question: "O que acontece na consultoria?",
      answer: "Análise do seu caso, diagnóstico personalizado e plano de ação.",
    },
    {
      question: "Para quem é a consultoria?",
      answer: "Empreendedores, experts e prestadores de serviço.",
    },
    {
      question: "Quais resultados eu posso esperar?",
      answer:
        "Clareza sobre o próximo passo do seu negócio e uma estratégia aplicável.",
    },
  ];

  return (
    <div className="min-h-screen bg-white-100 ">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
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

      <div className="pt-16"></div>

      <section className="max-w-2xl mx-auto px-4 bg-white flex justify-center items-center">
        <img
          className="shadow-2xl rounded-3xl w-[75%]"
          src={consultoria}
          alt=""
        />
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Mais de 100 pessoas...
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Já passaram pela nossa consultoria gratuita. Empresários, experts e
            prestadores de serviço estão escalando seus negócios com a nossa
            metodologia.
          </p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-4 bg-white flex justify-center items-center">
        <img
          className="shadow-2xl rounded-3xl w-[75%]"
          src={consultoria2}
          alt=""
        />
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Na nossa consultoria gratuita...
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Analisamos seu caso, entendemos suas dúvidas e dificuldades e te
            entregamos um direcionamento claro e aplicável para você começar do
            jeito certo ou escalar sua empresa, se já tem um negócio rodando.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Link
            to="/BusinessForm"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
          >
            Quero meu plano de ação personalizado!
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="text-white py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
