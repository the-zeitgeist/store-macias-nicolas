import PurchaseImage from '../../../../assets/icons/buy-white.svg';
import './ActionButton.css';

const ActionButton = () => {
  return <div className="action-button-container">
    <div className="img-block">
      <img src={PurchaseImage} alt="buy-white" width="48" height="48" />
    </div>
    <div className="action-block">
    </div>
  </div>
}

export default ActionButton;