import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function FormularioNegocioPage(){
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Função para calcular o progresso do scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // Simular redirecionamento após seleção
    setTimeout(() => {
      alert(`Você selecionou: ${option}`);
    }, 500);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header com barra de progresso */}
      <header className="bg-white shadow-sm">
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ease-out"
          />
        </div>
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-700">
            Victor Souza
          </div>
          <div className="text-xs text-gray-500">
            100% concluído
          </div>
        </div>
      </header>

      {/* Conteúdo principal centralizado */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Você quer começar ou escalar o seu negócio?
            </h1>
            <p className="text-gray-600 text-lg">
              Selecione uma das opções abaixo.
            </p>
          </div>

          {/* Botões de opção */}
          <div className="space-y-4">
            {/* Opção 1: QUERO COMEÇAR */}
            <button
              onClick={() => handleOptionSelect('QUERO COMEÇAR')}
              className={`w-full p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedOption === 'QUERO COMEÇAR'
                  ? 'bg-gray-900 text-white shadow-2xl'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">QUERO COMEÇAR</h3>
                  <p className="text-gray-300 text-sm">
                    Para quem está começando do zero e quer uma base sólida
                  </p>
                </div>
                <div className="flex items-center">
                  {selectedOption === 'QUERO COMEÇAR' ? (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  ) : (
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>
            </button>

            {/* Opção 2: QUERO ESCALAR */}
            <button
              onClick={() => handleOptionSelect('QUERO ESCALAR')}
              className={`w-full p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 shadow-lg ${
                selectedOption === 'QUERO ESCALAR'
                  ? 'bg-white text-gray-900 shadow-2xl border-2 border-gray-900'
                  : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">QUERO ESCALAR</h3>
                  <p className="text-gray-600 text-sm">
                    Para quem já tem um negócio e quer crescer ainda mais
                  </p>
                </div>
                <div className="flex items-center">
                  {selectedOption === 'QUERO ESCALAR' ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </div>
            </button>
          </div>

          {/* Botão de continuação (aparece após seleção) */}
          {selectedOption && (
            <div className="mt-8 text-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
                Continuar com "{selectedOption}"
              </button>
            </div>
          )}

          {/* Informações adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Sua escolha nos ajudará a personalizar melhor sua consultoria gratuita
            </p>
          </div>
        </div>
      </div>

      {/* Footer fixo na parte inferior */}
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