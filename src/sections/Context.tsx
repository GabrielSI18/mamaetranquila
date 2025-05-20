import React from 'react';

const Context: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
            Você sabia que 74% das mães de primeira viagem sentem-se inseguras nos cuidados com o bebê?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Esta estatística alarmante revela uma realidade silenciosa que afeta milhares de mulheres todos os dias. 
            Muitas mães relatam sentimentos de inadequação, medo de cometer erros e ansiedade constante sobre o bem-estar 
            de seus bebês. Essa insegurança pode transformar o que deveria ser um período de alegria em uma fase marcada 
            por estresse e preocupação excessiva.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            O impacto dessa insegurança vai além do bem-estar emocional da mãe, afetando também a qualidade do vínculo 
            com o bebê e até mesmo o desenvolvimento saudável da criança. Quando uma mãe está constantemente ansiosa, 
            seu bebê pode sentir essa tensão, criando um ciclo negativo difícil de quebrar.
          </p>
          <p className="text-lg text-gray-700 font-medium text-center">
            É precisamente para mudar essa realidade que o "Mamãe Tranquila" foi criado, oferecendo um caminho para 
            uma maternidade mais confiante e serena.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Context;
