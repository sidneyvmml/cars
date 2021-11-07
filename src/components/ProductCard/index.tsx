import './styles.css';
import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';
import ButtonBuy from 'components/ButtonBuy';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="Nome do Produto"></img>
        <div className="card-bottom-container">
          <h6>Audi Supra TT</h6>
          <ProductPrice />
          <div className="">
            <ButtonBuy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
