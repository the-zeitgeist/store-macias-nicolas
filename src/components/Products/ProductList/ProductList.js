import { Link } from 'react-router-dom';
import { router_param_base } from '../../../constants';
import Product from '../Product/Product';

import './ProductList.css';

const ProductList = ({ products = [], sortProducts }) => {
  const sort = (sorterFunction) => () => {
    sortProducts(products, sorterFunction)
  }

  const sortButtonMap = [
    {
      name: 'Name',
      sortFn: (prodList) => prodList.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    },
    {
      name: 'Lowest price',
      sortFn: (prodList) => prodList.sort((a, b) => a.cost - b.cost)
    },
    {
      name: 'Highest price',
      sortFn: (prodList) => prodList.sort((a, b) => b.cost - a.cost)
    }
  ]

  return (
    <div className="center column">
      <div className="product-list-options row">
        <div className="product-list-filter row">
          <p>Sort by:</p>
          {sortButtonMap.map(({ name, sortFn }, i) => (
            <button key={i} onClick={sort(sortFn)}>{name}</button>
          ))}
        </div>
        <div className="navigation-options row">
          <div className="center">
            <Link to={`${router_param_base}/coins`}>
              <button>Get coins</button>
            </Link>
          </div>
          <div className="center">
            <Link to={`${router_param_base}/history`}>
              <button>Redeem history</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="product-list">
        {products.map((product, i) => (
          <Product key={`product-${i}`} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;
