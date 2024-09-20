import perfilImage from '../assets/perfil1.png'; // Correct import path
import './perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Perfil = () => {
  console.log('Image path:', perfilImage); // Check image path

  return (
    <div className='containerr'>
      <div className='foto'>
        <img
          src={perfilImage}
          alt="perfil"
          className="perfil-image"
        />
      </div>
      <div className='texto'>
        <div>Usuário</div>
        <div>ver perfil</div>
      </div>
    </div>
  );
};

export default Perfil;