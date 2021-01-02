import PurchaseImage from '../../../../assets/icons/buy-white.svg';
import NumberFormat from '../../../Reusable/NumberFormat';
import coin from '../../../../assets/icons/coin.svg';
import './ActionButton.css';

const ActionButton = ({ cost, hasEnough }) => {
  const actionText = hasEnough ? 'Redeem now' : 'Get coins';
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
      <button className="action-button" onClick={() => console.log('click')}>{actionText}</button>
    </div>
  </div>
}

export default ActionButton;