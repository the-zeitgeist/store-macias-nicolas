import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { redeemProduct, getProducts } from '../../actions/index';
import { connect } from 'react-redux';
import { calculateResult } from '../Reusable/NumberFormat';
import NavitageToHome from '../Reusable/NavitageToHome';
import CircularProgress from '../Reusable/CircularProgress';
import ResponseMessage from './ResponseMessages/ResponseMessages';
import Product from '../Products/Product/Product';
import Bar from '../Bar/Bar';
import store from '../../store';
import './Redeem.css';


const Redeem = ({ redeemProduct, getProducts }) => {
  const [product, setProduct] = useState(null)
  const [redimming, setRedimming] = useState(false);
  const [redeemDirty, setRedeemDirty] = useState(false);
  const [redeemSuccess, setRedeemSuccess] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const assingProduct = (products) => {
      const _prod = products.find((prod) => prod._id === productId);
      setProduct(_prod);
    }

    const products = store.getState().products;
    if (!products.length) {
      getProducts();
      return store.subscribe(() => {
        const { products } = store.getState();
        if (products) {
          assingProduct(products)
        }
      })
    } else {
      assingProduct(products)
    }
  }, [getProducts, productId]);

  const redeem = async () => {
    setRedimming(true);
    const result = await redeemProduct(productId);
    setRedeemDirty(true);
    setRedimming(false);
    setRedeemSuccess(result === 'You\'ve redeem the product successfully');
  }

  if (!product) {
    return <CircularProgress />
  }

  const getContent = () => {
    if (redimming) { return <CircularProgress /> }

    if (redeemDirty) {
      return (
        <ResponseMessage
          success={redeemSuccess}
          onRetry={redeem}
        />
      )
    }

    return (
      <div className="redem-container">
        <div className="product-description">
          <div className="card-description">
            <Product {...product} avoidContainer avoidTransition />
            <div className="redeem-information">
              <div className="column">
                <h3 className="title">Redeem {product.name}</h3>
                <p>You're about to spend {calculateResult({ number: product.cost })} in this product</p>
              </div>
              <div className="button-container">
                <h5>Do you want to continue?</h5>
                <div className="center">
                  <button className="confirm-button" onClick={redeem}>Yes</button>
                </div>
                <div className="center">
                  <NavitageToHome Render={() => <button className="confirm-button">No</button>} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center">
          <NavitageToHome Render={() => <button className="return-button">Go back</button>} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Bar />
      {getContent()}
    </div>
  )
}

export default connect(null, { redeemProduct, getProducts })(Redeem);
