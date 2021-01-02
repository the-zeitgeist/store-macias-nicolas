import PurchaseImage from '../../../../assets/icons/buy-white.svg';
import NumberFormat from '../../../Reusable/NumberFormat';
import coin from '../../../../assets/icons/coin.svg';
import { Link } from 'react-router-dom';
import './ActionButton.css';

const ActionButton = ({ cost, hasEnough, productId }) => {
  const actionCollection = {
    Redeem: {
      text: 'Redeem now',
      linkTo: `/redeem/${productId}`
    },
    Coins: {
      text: 'Get coins'
    }
  }

  const actionName = hasEnough ? 'Redeem' : 'Coins';
  const action = actionCollection[actionName]

  return <div className="action-button-container">
    <div className="img-block">
      <img src={PurchaseImage} alt="buy-white" width="48" height="48" />
    </div>
    <div className="action-block">
      <div className="value">
        <p><NumberFormat number={cost} /></p>
        <div className="coin-container">
          <img src={coin} alt="coin" height="30" width="30" />
        </div>
      </div>
    </div>
    <div className="button-container">
      <Link to={action.linkTo}>
        <button className="action-button" onClick={() => console.warn('click')}>
          {action.text}
        </button>
      </Link>
    </div>
  </div>
}

export default ActionButton;