import { useState } from 'react';
import { calculateResult } from '../Reusable/NumberFormat';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/index';
import NavigateToHome from '../Reusable/NavitageToHome';
import CircularProgress from '../Reusable/CircularProgress';
import Bar from '../Bar/Bar';
import './Coins.css';

const Coins = ({ getCoins }) => {
  const [value, setValue] = useState('1000');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState(null);

  const onSelectChange = (event) => {
    event.preventDefault();
    event.persist();
    const { target } = event;
    setValue(target.value)
  }

  const onFormSubmit = async () => {
    setProcessing(true);
    const result = await getCoins(Number(value));
    setProcessing(false);
    setMessage(result);
  }

  return (
    <div className="column">
      <Bar />
      <div className="coins-container column">
        <h1>Get more coins!</h1>
        <div className="coins-form" onSubmit={onFormSubmit}>
          <label className="column">
            How many coins do you want?
              <div>
              <select className="coins-select" value={value} onChange={onSelectChange}>
                <option value="1000">{calculateResult({ number: 1000 })} coins</option>
                <option value="5000">{calculateResult({ number: 5000 })} coins</option>
                <option value="7500">{calculateResult({ number: 7500 })} coins</option>
              </select>
            </div>
          </label>
          <div>
            <p>{message}</p>
          </div>
          {processing ? <CircularProgress /> :
            <div className="row">
              <button className="coins-form-button" onClick={onFormSubmit}>Get coins</button>
              <NavigateToHome Render={() =>
                <button className="coins-form-button">Home</button>
              } />
            </div>
          }
        </div>
      </div>
    </div>
  )
};

export default connect(null, { getCoins })(Coins);
