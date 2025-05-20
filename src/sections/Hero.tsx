import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
          Ser mãe é mágico… mas ninguém fala o quanto pode ser desafiador no começo.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          A jornada da maternidade traz consigo momentos de pura alegria, mas também noites sem dormir, 
          dúvidas constantes e uma sensação ocasional de estar perdida em meio a tantas responsabilidades novas. 
          É normal sentir-se assim, e você não está sozinha nessa experiência.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-6">
          Descubra como tornar a maternidade mais leve e segura desde o primeiro dia.
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Imagine poder desfrutar plenamente dos primeiros momentos com seu bebê, sem a ansiedade paralisante 
          que tantas mães enfrentam. Com as ferramentas certas e o conhecimento adequado, você pode transformar 
          essa fase desafiadora em uma jornada de descobertas e conexão profunda com seu filho.
        </p>
        <a 
          href="#comprar" 
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Quero mais tranquilidade na maternidade
        </a>
      </div>
    </section>
  );
};

export default Hero;
