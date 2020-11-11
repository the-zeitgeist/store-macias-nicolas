import './WithAbsoluteContainer.css';

const WithAbsoluteContainer = (Component) => (
  <div className="indicator-container">
    {Component}
  </div>
);

export default WithAbsoluteContainer;
