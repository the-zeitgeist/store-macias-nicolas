import CircularProgress from '@material-ui/core/CircularProgress';
import WithUser from './HOC/WithUser';
import WithAbsoluteContainer from './HOC/WithAbsoluteContainer';
import PurchaseImage from '../assets/icons/buy-blue.svg';
import CoinImage from '../assets/icons/coin.svg';
import './PurchaseIndicator.css';

const PurchsaseBalance = ({ cost, user }) => {
  const difference = (user?.points ?? 0) - cost;
  const hasEnough = difference >= 0;

  if (!user) {
    return WithAbsoluteContainer(<CircularProgress />)
  }

  if (hasEnough) {
    return WithAbsoluteContainer(<img src={PurchaseImage} alt="buy-blue" width="42" height="42"/>)
  }

  return WithAbsoluteContainer(
    <div>
      <div className="remaining-container">
        <p className="amount-missing">You need {Math.abs(difference).toLocaleString()}</p>
        <img src={CoinImage} alt="coin" width="20" height="20" />
      </div>
    </div>
  )

};

export default WithUser(PurchsaseBalance);
