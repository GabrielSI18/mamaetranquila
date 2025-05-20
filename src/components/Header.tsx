import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-100 to-pink-100 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-800">Mamãe Tranquila</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#beneficios" className="text-purple-700 hover:text-purple-900">Benefícios</a></li>
            <li><a href="#depoimentos" className="text-purple-700 hover:text-purple-900">Depoimentos</a></li>
            <li><a href="#faq" className="text-purple-700 hover:text-purple-900">FAQ</a></li>
            <li><a href="#comprar" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">Comprar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
