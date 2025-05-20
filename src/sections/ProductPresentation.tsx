import React from 'react';

const ProductPresentation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
          Apresentamos o "Mamãe Tranquila"
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="/product-image.jpg" 
              alt="Guia Mamãe Tranquila" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              Um guia completo desenvolvido para ajudar mães de primeira viagem a enfrentarem os desafios iniciais 
              da maternidade com confiança e serenidade. Este não é apenas mais um manual sobre bebês – é um 
              companheiro diário que oferece suporte emocional e prático para cada momento da sua nova jornada como mãe.
            </p>
            <p className="text-lg text-gray-700">
              Criado por uma equipe de especialistas em desenvolvimento infantil, psicólogos perinatais e mães experientes, 
              o "Mamãe Tranquila" reúne conhecimento científico e sabedoria prática em um formato acessível e acolhedor. 
              Cada página foi pensada para oferecer não apenas informações, mas também o conforto de saber que você está 
              fazendo o melhor pelo seu bebê, mesmo quando tudo parece incerto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
