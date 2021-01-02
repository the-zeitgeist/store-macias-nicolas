import {
  Route,
  Redirect
} from 'react-router-dom';

const Redirector = () => <>
  <Route exact path="/store-macias-nicolas">
    <Redirect to="/" />
  </Route>
  <Route exact path="/**">
    <Redirect to="/" />
  </Route>
</>

export default Redirector;
