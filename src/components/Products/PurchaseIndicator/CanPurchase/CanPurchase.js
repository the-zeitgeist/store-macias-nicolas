import CircularProgress from '@material-ui/core/CircularProgress';
import PurchaseImage from '../../../../assets/icons/buy-blue.svg';
import CoinImage from '../../../../assets/icons/coin.svg';
import './CanPurchase.css'

const CanPurchase = ({ difference, hasEnough, hasUser }) => {
  if (!hasUser) {
    return <CircularProgress />
  }

  if (hasEnough) {
    return <img src={PurchaseImage} alt="buy-blue" width="42" height="42" />
  }

  return (
    <div>
      <div className="remaining-container">
        <p className="amount-missing">You need {Math.abs(difference).toLocaleString()}</p>
        <img src={CoinImage} alt="coin" width="20" height="20" />
      </div>
    </div>
  )
}

export default CanPurchase;