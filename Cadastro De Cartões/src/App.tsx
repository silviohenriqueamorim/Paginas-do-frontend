import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    numeroCartao: '',
    validade: '',
    cvv: '',
    nomeTitular: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do Cartão:', formData);
  };

  return (
    <div className="container">
      <Header />
      <form onSubmit={handleSubmit} className="card-form">
        <h2>Informações do Cartão</h2>
        <div className="form-group">
          <input
            type="text"
            name="numeroCartao"
            placeholder="Número do Cartão"
            onChange={handleChange}
            required
          />
          <div className="form-row">
            <input
              type="text"
              name="validade"
              placeholder="Data de Validade (MM/AA)"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="nomeTitular"
            placeholder="Nome do Titular"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default App;
