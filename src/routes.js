import App from './App';
import Redeem from './components/Redeem/Redeem';
import History from './components/History/History';
import Coins from './components/Coins/Coins';
import { router_param_base } from './constants';

const routes = [
  { route: `${router_param_base}/`, exact: true, Component: App },
  { route: `${router_param_base}/redeem/:productId`, Component: Redeem },
  { route: `${router_param_base}/history`, Component: History },
  { route: `${router_param_base}/coins`, Component: Coins }
];

export default routes;