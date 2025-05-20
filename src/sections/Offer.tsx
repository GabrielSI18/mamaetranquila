import React from 'react';

const Offer: React.FC = () => {
  return (
    <section id="comprar" className="py-16 px-4 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border-2 border-purple-300 rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
            Adquira agora o "Mamãe Tranquila" com 50% de desconto
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <img 
                src="/product-mockup.jpg" 
                alt="Guia Mamãe Tranquila" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                Adquira agora o "Mamãe Tranquila" com 50% de desconto e transforme sua experiência como mãe a partir de hoje mesmo. 
                Por tempo limitado, estamos oferecendo este guia completo por apenas R$XX,XX (valor com desconto), uma oportunidade 
                única para investir na sua tranquilidade e no bem-estar do seu bebê.
              </p>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-2">Bônus exclusivos:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Diário da Mamãe</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Áudio de Relaxamento para Mamães</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-purple-700 font-medium mb-6">
                Esta oferta imperdível é válida apenas até às 23:59 de hoje!
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col items-center mb-8">
              <div className="text-3xl font-bold text-purple-900 mb-2">
                <span className="line-through text-gray-500 mr-3">R$199,90</span>
                <span>R$99,95</span>
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                50% de desconto por tempo limitado
              </div>
            </div>
            
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              Quero garantir meu guia agora
            </button>
            
            <p className="text-sm text-gray-600 mt-4">
              Pagamento 100% seguro • Entrega imediata • Garantia de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
