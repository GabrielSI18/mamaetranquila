import Header from './components/Header';
import Hero from './sections/Hero';
import Context from './sections/Context';
import ProductPresentation from './sections/ProductPresentation';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import Offer from './sections/Offer';
import Guarantee from './sections/Guarantee';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Context />
      <ProductPresentation />
      <Benefits />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <CTA />
      <footer className="bg-purple-900 text-white py-6 px-4 text-center">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Mamãe Tranquila - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
