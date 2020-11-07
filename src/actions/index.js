import { api_base, api_key } from '../constants';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${api_key}`;

const SET_USER = "SET_USER";
const SET_PRODUCTS = "SET_PRODUCTS";
const CLEAR_USER = "CLEAR_USER";

const setUser = (user) => ({
  type: SET_USER,
  user
});

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
});

const clearUserAction = () => ({
  type: CLEAR_USER
});

export const getUser = () => (dispatch) => {
  const url = `${api_base}/user/me`;

  axios.get(url)
    .then(({data}) => data)
    .then((user) => {
      dispatch(setUser(user));
    })
    .catch((err) => console.log(err))
}

export const getProducts = () => (dispatch) => {
  const url = `${api_base}/products`;

  axios.get(url)
    .then(({data}) => data)
    .then((products) => {
      console.log(products);
      dispatch(setProducts(products));
    })
    .catch((err) => console.log(err))
}

export const clearUser = () => (dispatch) => {
  dispatch(clearUserAction());
}
