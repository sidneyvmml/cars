import { ReactComponent as MainImage } from 'assets/images/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className=" base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
      <div className="home-button-container">
        <ButtonIcon />
      </div>
    </>
  );
};

export default Home;
