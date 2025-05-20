import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">
          Benefícios que transformam sua experiência como mãe
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Reduz a ansiedade e aumenta a segurança</h3>
            </div>
            <p className="text-gray-700">
              O "Mamãe Tranquila" transforma a experiência da maternidade ao reduzir significativamente a ansiedade e aumentar sua segurança nos cuidados com o bebê. Através de técnicas comprovadas e orientações claras, você aprenderá a interpretar as necessidades do seu filho e a responder a elas com confiança.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Melhora a qualidade do sono</h3>
            </div>
            <p className="text-gray-700">
              Um dos maiores desafios para novas mães é a privação de sono. Nosso guia oferece estratégias eficazes para melhorar a qualidade do sono tanto da mãe quanto do bebê, estabelecendo rotinas saudáveis que respeitam o ritmo natural de ambos.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Cria uma rotina mais leve e organizada</h3>
            </div>
            <p className="text-gray-700">
              A maternidade frequentemente vem acompanhada de uma sensação de caos e sobrecarga. O "Mamãe Tranquila" ajuda você a criar uma rotina mais leve e organizada, adaptada às necessidades específicas da sua família, tornando o dia a dia mais previsível e tranquilo.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-purple-200 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-800">Oferece dicas práticas para o dia a dia</h3>
            </div>
            <p className="text-gray-700">
              O guia está repleto de dicas práticas para o dia a dia, abordando desde a amamentação até o banho do bebê, passando por cuidados com a saúde e desenvolvimento infantil. Cada conselho foi cuidadosamente selecionado para simplificar sua vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
