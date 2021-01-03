import { calculateResult } from '../../Reusable/NumberFormat';
import moment from 'moment';
import './Register.css';

const Register = ({ name, createDate, cost, category }) => (
  <div className="register">
    <div className="product-description column">
      <h4>You redeemed: {name} ({category})</h4>
      <p className="cost-description">You spent: {calculateResult({ number: cost })}</p>
    </div>
    <h5>{moment(createDate).fromNow()}</h5>
  </div>
);

export default Register;