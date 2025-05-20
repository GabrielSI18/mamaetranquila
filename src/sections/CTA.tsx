import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-6">
          Garanta agora o seu "Mamãe Tranquila"
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Comece hoje mesmo a viver uma maternidade mais leve e segura. Cada dia que passa é uma oportunidade 
          preciosa para fortalecer o vínculo com seu bebê e criar memórias que durarão para sempre. 
          Não deixe que a insegurança e a ansiedade roubem esses momentos especiais.
        </p>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Seu bebê merece uma mãe presente e confiante, e você merece viver a maternidade com toda a alegria 
          e serenidade que este momento único pode proporcionar. Faça essa escolha por você e por seu filho – 
          uma escolha de amor, cuidado e bem-estar para toda a família.
        </p>
        <a 
          href="#comprar" 
          className="bg-purple-600 hover:bg-purple-700 text-white text-xl font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
        >
          Quero viver uma maternidade mais tranquila
        </a>
      </div>
    </section>
  );
};

export default CTA;
