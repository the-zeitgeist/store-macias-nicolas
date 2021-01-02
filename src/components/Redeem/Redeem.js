import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { calculateResult } from '../Reusable/NumberFormat';
import Bar from '../Bar/Bar';
import Product from '../Products/Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
import store from '../../store';
import './Redeem.css';


const Redeem = () => {
  const [product, setProduct] = useState(null)
  const [user, setUser] = useState(null)
  const { productId } = useParams();

  useEffect(() => {
    const { products, ...usr } = store.getState();
    const _prod = products.find((prod) => prod._id = productId);
    setUser(usr.user);
    setProduct(_prod);
    // return () => delete productId;
  }, [productId]);

  if (!product) {
    return (
      <div className="center">
        <CircularProgress />
      </div>
    )
  }

  console.log(product);
  return (
    <div>
      <Bar user={user} />
      <div className="redem-container">
        <div className="product-description">
          <div className="card-description">
            <Product {...product} avoidContainer avoidTransition />
            <div className="redeem-information">
              <div>
                <h3>Redeem {product.name}</h3>
                <p>You're about to spend {calculateResult({ number: product.cost })} in this product</p>
              </div>
              <div className="button-container">
                <h5>Do you want to continue?</h5>
                <button>Yes</button>
                <button>No  </button>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <button className="return-button">Go back</button>
        </div>
      </div>
    </div>
  )
}

export default Redeem;
