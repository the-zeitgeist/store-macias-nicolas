import { useState, useEffect } from 'react';
import { getUser } from '../../actions/index';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Badge from './Badge';
import kite from '../../assets/aerolab-logo.svg'
import coin from '../../assets/icons/coin.svg';
import NavitageToHome from '../Reusable/NavitageToHome';
import store from '../../store';
import './Bar.css';

const Bar = ({ getUser }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const _user = store.getState().user;
    _user ? setUser(_user) : getUser();
    return store.subscribe(() => {
      const _user = store.getState().user;
      setUser(_user);
    });
  }, [getUser]);

  const setUsr = () => (user ? (
    <>
      <p className="bar-text center">{user.name}</p>
      <div className="center">
        <Badge>
          <p className="bar-text">{user.points.toLocaleString()}</p>
          <img src={coin} alt="coin" height="24" width="24" />
        </Badge>
      </div>
    </>
  ) : (
      <div className="center">
        <CircularProgress />
      </div>
    )
  )

  return (
    <div className="bar-container row">
      <NavitageToHome Render={() => <img src={kite} alt="kite" height="36" width="36" />} />
      <div className="row">
        {setUsr()}
      </div>
    </div>
  );
}
export default connect(null, { getUser })(Bar);
