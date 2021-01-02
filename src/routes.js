import App from './App';

const routes = [
  { route: '/', exact: true, Component: App },
  { route: '/redeem', Component: () => <h1>redeem</h1> },
  { route: '/history', Component: () => <h1>history</h1> },
  { route: '/coins', Component: () => <h1>coins</h1> }
];

export default routes;