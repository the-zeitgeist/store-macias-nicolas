import PurchaseIndicator from './PurchaseIndicator';
import './Product.css';

const Product = ({ img, name, category, cost }) => (

  <div className="product-container column center">
    <PurchaseIndicator cost={cost} />
    <img className="product-image" src={img.hdUrl} alt={`product-${name}`} width="230" />
    <div className="text-block column">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
    </div>
  </div>
)

export default Product;
