import { Link } from 'react-router-dom'
import { router_param_base } from '../../constants';

const NavitageToHome = ({ Render }) => (
  <Link to={`${router_param_base}`}>
    <Render />
  </Link>
);

export default NavitageToHome;