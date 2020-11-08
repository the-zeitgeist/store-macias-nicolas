import { useEffect, useState } from 'react';
import { getUser, getProducts } from './actions/index';
import { connect } from 'react-redux';
import Bar from './components/Bar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import store from './store';
import './App.css';


function App({ getUser, getProducts }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getUser();
    getProducts();
  }, [getProducts, getUser]);

  useEffect(() => {
    return store.subscribe(() => {
      const _user = store.getState().user;
      const _products = store.getState().products;
      setUser(_user);
      console.log(_products);
      setProducts(_products);
    })
  }, [])

  console.log(user)

  return (
    <div>
      <Bar user={user}/>
      <Banner />
      <ProductList products={products}/>
    </div>
  )
}

export default connect(null, { getUser, getProducts })(App);
