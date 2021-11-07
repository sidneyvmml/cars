import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-back-container">
      <div className="btn-container">
        <button className="btn">
          <h6>VER CATALOGO</h6>
        </button>
      </div>
      <div className="btn-text-container">
        <span>Comece agora a navegar</span>
      </div>
    </div>
  );
};

export default ButtonIcon;
