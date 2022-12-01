import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <>
      <h2 className="StatHeader">Statistics</h2>
      <div className="Container">
        <span className="">Good: {good}</span>
        <span className="">Neutral: {neutral}</span>
        <span className="">Bad: {bad}</span>
        <span className="">Total:{total}</span>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
