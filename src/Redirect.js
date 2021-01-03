import {
  Route,
  Redirect
} from 'react-router-dom';
import { router_param_base } from './constants';

const ToHome = () => <Redirect to={router_param_base} />;

const Redirector = () => <>
  <Route exact path="**">
    <ToHome />
  </Route>
</>

export default Redirector;
