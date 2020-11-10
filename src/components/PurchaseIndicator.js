import CircularProgress from '@material-ui/core/CircularProgress';
import WithUser from './HOC/WithUser';
import './PurchaseIndicator.css';

const withAbsoluteContainer = (Component) => (
  <div className="indicator-container">
    {Component}
  </div>
)

const PurchsaseBalance = ({cost, user}) => {
  const difference = (user?.points ?? 0) - cost;
  const hasEnough = difference >= 0;

  if (!user) {
    return withAbsoluteContainer(<CircularProgress />)
  }

  if (hasEnough) {
    return withAbsoluteContainer(<img src="" alt=""/>)
  }

  return withAbsoluteContainer(
    <div>
      {Math.abs(difference)}
    </div>
  )

};

export default WithUser(PurchsaseBalance);
