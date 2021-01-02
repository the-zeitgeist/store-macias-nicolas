import App from './App';
import Redeem from './components/Redeem/Redeem';

const routes = [
  { route: '/', exact: true, Component: App },
  { route: '/redeem/:productId', Component: Redeem },
  { route: '/history', Component: () => <h1>history</h1> },
  { route: '/coins', Component: () => <h1>coins</h1> }
];

export default routes;