import React from 'react';
import perfilImage from "../../assets/perfil1.png";
import './perfil.css'; // Certifique-se de que este caminho está correto
import 'bootstrap/dist/css/bootstrap.min.css';

const Perfil: React.FC = () => {
  return (
    <div className="containerr">
      <div className="perfil1">
        <img
          src={perfilImage}
          alt="Perfil1"
          className="perfilImage"
        />
      </div>
      <div className="texto">
        <div>Usuário</div>
        <div>Ver perfil</div>
      </div>
    </div>
  );
};

export default Perfil;
