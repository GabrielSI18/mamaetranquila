import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-purple-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-10 text-center">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Esse produto serve para recém-nascidos?
            </h3>
            <p className="text-gray-700">
              Absolutamente! O "Mamãe Tranquila" foi especialmente desenvolvido pensando nos primeiros meses de vida do bebê, 
              quando os desafios para novas mães são mais intensos. O guia aborda desde os cuidados com o recém-nascido até 
              o desenvolvimento do bebê durante o primeiro ano, acompanhando você em cada etapa desta jornada.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Em quanto tempo verei resultados?
            </h3>
            <p className="text-gray-700">
              Muitas mães relatam sentir-se mais confiantes já nos primeiros dias de uso do guia. A redução da ansiedade e 
              a melhoria na qualidade do sono geralmente são percebidas nas primeiras semanas, enquanto benefícios mais profundos, 
              como o fortalecimento do vínculo mãe-bebê e o estabelecimento de rotinas eficazes, desenvolvem-se ao longo dos 
              primeiros meses de aplicação das técnicas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              O produto é seguro?
            </h3>
            <p className="text-gray-700">
              Com certeza! Todas as orientações contidas no "Mamãe Tranquila" são baseadas em evidências científicas e foram 
              revisadas por profissionais de saúde especializados em cuidados materno-infantis. Não recomendamos nenhuma prática 
              que possa colocar em risco a saúde da mãe ou do bebê, e sempre enfatizamos a importância do acompanhamento médico regular.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Como funciona o suporte ao cliente?
            </h3>
            <p className="text-gray-700">
              Entendemos que dúvidas podem surgir durante a aplicação das técnicas, por isso oferecemos suporte completo por e-mail, 
              com resposta em até 24 horas. Além disso, ao adquirir o "Mamãe Tranquila", você ganha acesso ao nosso grupo exclusivo 
              de mães, onde pode trocar experiências e receber apoio adicional da nossa comunidade acolhedora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
