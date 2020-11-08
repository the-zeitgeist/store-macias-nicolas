import Product from './Product';

const ProductList = ({products}) => (
  <div className="product-list">
    {products.map((product, i) => (
      <Product key={`product-${i}`} {...product}/>
    ))}
  </div>
)

export default ProductList;
