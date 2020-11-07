import { api_base, api_key } from '../constants';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${api_key}`;

const SET_USER = "SET_USER";

const setUser = (user) => ({
  type: SET_USER,
  user
})

export const getUser = () => (dispatch) => {
  const url = `${api_base}/user/me`;

  axios.get(url)
    .then(({data}) => data)
    .then((user) => {
      dispatch(setUser(user));
    })
    .catch((err) => console.log(err))
}
