import { useEffect, useState } from 'react';
import { getUser, getProducts } from './actions/index';
import { connect } from 'react-redux';
import Bar from './components/Bar';
import Banner from './components/Banner';
import store from './store';
import './App.css';


function App({ getUser, getProducts }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
    getProducts();
  }, [getProducts, getUser]);

  useEffect(() => {
    return store.subscribe(() => {
      const _user = store.getState().user;
      setUser(_user)
    })
  }, [])

  console.log(user)

  return (
    <div>
      <Bar user={user}/>
      <Banner />
    </div>
  )
}

export default connect(null, { getUser, getProducts })(App);
