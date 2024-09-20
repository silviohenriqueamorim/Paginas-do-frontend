import { useState, FormEvent } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Quem Somos Nós?</h1>
      <p className="text">
      Somos uma empresa dedicada a tornar a compra do seu carro novo uma experiência simples, transparente e sem estresse. Nossa missão é conectar você diretamente com as melhores ofertas do mercado, facilitando a negociação e garantindo que você encontre o veículo perfeito para as suas necessidades
      </p>
      <h2 className="subtitle">Missão e Valores</h2>
      <ul className="list">
        <li>Transparência Total: Informações claras e detalhadas sobre cada veículo e oferta, para que você encontre o veículo perfeito para suas necessidades.</li>
        <li>Facilidade de Comunicação: interação direta e eficiente com nossos revendedores parceiros, sem intermediários desnecessários.</li>

      </ul>
    </div>
  );
}

export default App;
