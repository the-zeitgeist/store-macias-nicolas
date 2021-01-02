import routes from './routes';
import Redirect from './Redirect';
import {
  Route,
  Switch
} from 'react-router-dom';

const Router = () => (
  <Switch>
    {routes.map(({ route, exact, Component}, i) => (
      <Route exact={!!exact} path={route} key={i}>
        <Component />
      </Route>
    ))}
    <Redirect />
  </Switch>
)

export default Router;