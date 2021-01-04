import { useEffect, useState } from 'react';
import { getProducts, sortProducts } from './actions/index';
import { connect } from 'react-redux';
import Bar from './components/Bar/Bar';
import Banner from './components/Banner/Banner';
import ProductList from './components/Products/ProductList/ProductList';
import store from './store';
import './App.css';


function App({ getProducts, sortProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    return store.subscribe(() => {
      const _products = store.getState().products;
      setProducts(_products);
    })
  }, [])

  return (
    <div>
      <Bar />
      <Banner />
      <ProductList products={products} sortProducts={sortProducts} />
    </div>
  )
}

export default connect(null, { getProducts, sortProducts })(App);
