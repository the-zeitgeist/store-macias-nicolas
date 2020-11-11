import './WithAbsoluteContainer.css';

const WithAbsoluteContainer = (Component) => (props) => (
  <div className="indicator-container">
    <Component {...props} />
  </div>
);

export default WithAbsoluteContainer;
