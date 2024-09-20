import React from 'react';
import logoImage from '../assets/logo.png'; // Verifique o caminho
import './logo.css'; // Verifique se o caminho está correto

const Logo: React.FC = () => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      className="logoImage"
    />
  );
};

export default Logo;
