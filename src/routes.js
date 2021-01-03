import App from './App';
import Redeem from './components/Redeem/Redeem';
import History from './components/History/History';
import { router_param_base } from './constants';

const routes = [
  { route: `${router_param_base}/`, exact: true, Component: App },
  { route: `${router_param_base}/redeem/:productId`, Component: Redeem },
  { route: `${router_param_base}/history`, Component: History },
  { route: `${router_param_base}/coins`, Component: () => <h1>coins</h1> }
];

export default routes;