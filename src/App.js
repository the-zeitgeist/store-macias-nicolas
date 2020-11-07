import { useEffect, useState } from 'react';
import { getUser } from './actions/index';
import { connect } from 'react-redux';
import Bar from './components/Bar';
import Banner from './components/Banner';
import store from './store';
import './App.css';

function App({ getUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    return store.subscribe(() => {
      const { user } = store.getState();
      setUser(user)
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

export default connect(null, { getUser})(App);
