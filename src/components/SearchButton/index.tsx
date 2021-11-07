import './styles.css';

const SearhButton = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control input-search-container"
        placeholder="Digite sua busca"        
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-search-container" type="button">
          BUSCAR
        </button>
      </div>
    </div>
  );
};

export default SearhButton;
