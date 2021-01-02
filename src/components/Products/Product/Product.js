import { useState } from 'react';
import PurchaseIndicator from '../PurchaseIndicator/PurchaseIndicator';
import './Product.css';

const Product = (
  {
    img,
    name,
    category,
    cost,
    _id,
    avoidContainer,
    avoidTransition
  }
) => {
  const [isHover, setIsHover] = useState(false);

  const onHover = () => setIsHover(true)

  const onHoverOut = () => setIsHover(false)

  return (
    <div className={`product-container column center ${!avoidTransition && 'transition'}`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}>
      {!avoidContainer &&
        <PurchaseIndicator cost={cost} isHover={isHover} productId={_id} />}
      <img className="product-image" src={img.hdUrl} alt={`product-${name}`} width="230" />
      <div className="text-block column">
        <p className="category">{category}</p>
        <p className="name">{name}</p>
      </div>
    </div>
  )
}

export default Product;
