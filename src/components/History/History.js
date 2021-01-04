import { useState, useEffect } from 'react';
// import { getUser } from '../../actions/index';
// import co
import { paginate } from '../Reusable/Paginator';
import NavigateToHome from '../Reusable/NavitageToHome';
import Register from './Register/Register';
import Bar from '../Bar/Bar';
import store from '../../store';
import './History.css';

const History = ({ getUser }) => {
  const [history, setHistory] = useState([]);
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(0);
  const [endMessage, setEndMessage] = useState(null);

  useEffect(() => {
    const loadContent = (user) => {
      const redeemHistory = user.redeemHistory ?? [];
      const reversed = [...redeemHistory].reverse();
      const firstContent = paginate({
        dataGroup: reversed,
        page
      });

      setHistory(reversed)
      setRecords(firstContent);
    }

    const { user } = store.getState();

    if (!user) {
      return store.subscribe(() => {
        const { user } = store.getState();
        if (user) {
          loadContent(user);
        }

      })
    } else {
      loadContent(user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (history.length) {
      const more = paginate({
        dataGroup: history,
        page
      });

      if (!more.length) {
        setEndMessage('You\'ve reached the end of the queue')
      }

      setRecords((records) => [...records, ...more]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getMore = () => {
    setPage(page + 1);
  }

  return (
    <div className="column">
      <Bar />
      <div className="register-container">
        {records.length && records.map((record, i) => (
          <Register key={i} {...record} />
        ))}
      </div>
      <div className="center">
        <p className="end-message">{endMessage}</p>
      </div>
      <div className="center history-action-container">
        <button onClick={getMore}>More</button>
      </div>
      <div className="center history-action-container">
        <NavigateToHome Render={() => <button onClick={getMore}>Home</button>} />
      </div>
    </div>
  );
};

export default History;
