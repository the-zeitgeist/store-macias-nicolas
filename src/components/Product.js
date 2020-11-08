import './Product.css';

const Product = ({ img, name, category, cost }) => (
  <div className="product-container column center">
    <img className="product-image" src={img.hdUrl} alt={`product-${name}`} width="210"/>
    <div className="text-block column">
      <p className="category">{category}</p>
      <p className="name">{name}</p>
    </div>
  </div>
)

export default Product;
