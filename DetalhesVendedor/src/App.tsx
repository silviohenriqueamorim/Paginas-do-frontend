import profileImage from './assets/vendedora-em-showroom-de-carros-vendendo-carros.jpg';
import appIcon from './assets/medalhas.png';
import carIcon from './assets/carro.png';
import clockIcon from './assets/tempo-rapido.png';
import './App.css'
import Header from './components/header/Header';

function App() {

  return (

    <div>
      <Header/>
      <nav className="nav-bar">
        <div className="nav-containerXa">
          <a href="#" className="nav-item active">Perfil</a>
          <a href="#" className="nav-item">Anúncios</a>
          <a href="#" className="nav-item">Avaliações</a>
        </div>
      </nav>
      <div className="content">
        <div className="profile">
          <img src={profileImage} alt="Emily Cristina Ferreira da Cruz" className="profile-image" />
          <div className="profile-info">
            <h2>Emily Cristina Ferreira da Cruz</h2>
            <p>Localização da(o) vendedor(a)</p>
          </div>
        </div>
        <div className="achievements">
          <h3>Conquistas</h3>
          <div className="achievement-list">
            <div className="achievement-item">
              <img src={appIcon} alt="App Icon" />
              <p>desde 01/2089<br />no nosso App</p>
            </div>
            <div className="achievement-item">
              <img src={carIcon} alt="Car Icon" />
              <p>anunciou mais<br />de 400 carros</p>
            </div>
            <div className="achievement-item">
              <img src={clockIcon} alt="Clock Icon" />
              <p>Responde em<br />até 10 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
