import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 px-4 bg-purple-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">
          O que dizem as mamães que já usam nosso guia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800">Ana S., mãe do Pedro, 6 meses</h3>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Antes de conhecer o 'Mamãe Tranquila', eu passava noites em claro, preocupada com cada detalhe do cuidado com meu filho. 
              Questionava constantemente minhas decisões e me sentia sobrecarregada com tantas informações contraditórias que recebia. 
              O guia foi essencial para me sentir mais segura nos primeiros dias com meu bebê. Hoje, seis meses depois, posso dizer que 
              desfruto verdadeiramente da maternidade, com muito mais confiança e alegria."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800">Mariana L., mãe da Sophia, 9 meses</h3>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Quando minha filha nasceu, eu me sentia completamente perdida, apesar de ter lido dezenas de artigos durante a gravidez. 
              Nada me preparou para a realidade de ter um bebê em casa. O 'Mamãe Tranquila' chegou como um presente do céu, oferecendo 
              orientações práticas e, principalmente, me ajudando a confiar na minha intuição como mãe. A diferença na minha qualidade 
              de vida e no meu relacionamento com minha bebê foi impressionante."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-800">Roberto C., pai do Miguel, 4 meses</h3>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Como pai de primeira viagem, também me sentia inseguro em como apoiar minha esposa e cuidar do nosso filho. 
              O 'Mamãe Tranquila' nos ajudou como família a estabelecer uma rotina que funciona para todos nós. Recomendo 
              não apenas para mães, mas para qualquer pessoa envolvida nos cuidados com um recém-nascido."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
