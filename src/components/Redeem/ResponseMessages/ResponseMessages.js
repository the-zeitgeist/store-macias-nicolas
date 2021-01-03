import NavitageToHome from '../../Reusable/NavitageToHome';
import AnimatedFace from '../../Reusable/AnimatedFace/AnimatedFace';
import { router_param_base } from '../../../constants';
import { withRouter } from 'react-router-dom';
import './ResponseMessages.css'


const ResponseMessage = ({ success, onRetry, history }) => {

  const message = success ? 'The product was successfully redeemed'
    : 'There was an error trying to redeem this product';

  const actionText = success ? 'See redeem history' : 'Try again';
  const action = success ? () => history.push(`${router_param_base}/history`) : onRetry;


  return (
    <div className="center column">
      <div className="message-card success-color">
        <h1>{success ? 'Success' : 'Oops'}</h1>
        <AnimatedFace success={success} />
        <p className="redem-message">{message}</p>
        <button className="action-button" onClick={action}>
          {actionText}
        </button>
      </div>
      <NavitageToHome Render={() => (
        <button className="return-buttons">Go back</button>
      )} />
    </div>
  )
};

export default withRouter(ResponseMessage);