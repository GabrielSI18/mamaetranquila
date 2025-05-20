import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Garantia de 7 dias
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Entendemos que a confiança é fundamental, especialmente quando se trata do bem-estar do seu bebê. 
                Por isso, oferecemos uma garantia incondicional de satisfação. Se por qualquer motivo você não estiver 
                completamente satisfeita com o "Mamãe Tranquila", basta nos enviar uma mensagem dentro de 7 dias após 
                a compra, e devolvemos 100% do seu dinheiro, sem questionamentos.
              </p>
              <p className="text-lg text-gray-700">
                Acreditamos profundamente no valor que nosso guia proporciona para novas mães, e queremos que você 
                tenha total tranquilidade ao fazer essa escolha importante. Não há riscos para você – apenas a 
                possibilidade de transformar positivamente sua experiência como mãe e criar memórias preciosas com seu bebê.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
