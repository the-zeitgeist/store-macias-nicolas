import { ReactReduxContext } from 'react-redux';

const withUser = (Component) => (props) => (
  <ReactReduxContext.Consumer>
    {({ store }) => {
      const { user } = store.getState();
      return <Component user={user} {...props} />
    }}
  </ReactReduxContext.Consumer>
);

export default withUser;
