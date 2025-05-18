import React from 'react';
import Header from './components/Header/Header';     // Novo componente para o topo
import Slider from './components/Slider/Slider';     // Novo componente para o destaque
import TextInfo from './components/Blocos/TextInfo'; // TextInfo já existente
import Contato from './components/Contato/Contato';
import ImageModal from './components/Gallery/ImageModal';// Modal já existente
import TopButton from './components/Topbutton/TopButton'; // ajuste o caminho conforme sua estrutura
import Footer from './components/Footer/Footer';     // Novo componente para o rodapé
import './App.css'; // Estilos gerais

function App() {
  return (
    <div className="App">
      <Header />

      <Slider />
     
      <main>
        <TextInfo />
        <Contato />
      </main>

      <ImageModal />
      <TopButton />

      <Footer />
    </div>
  );
}

export default App;
