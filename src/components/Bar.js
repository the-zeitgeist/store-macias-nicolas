import CircularProgress from '@material-ui/core/CircularProgress';
import Badge from './Badge';
import kite from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg';
import './Bar.css';

const Bar = ({ user }) => {

  const setUser = () => (user ? (
    <>
      <p className="center">{user.name}</p>
      <div className="center">
        <Badge>
          <p>{user.points}</p>
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
      <img src={kite} alt="kite" height="36" width="36" />
      <div className="row">
        {setUser()}
      </div>
    </div>
  );
}
export default Bar;
