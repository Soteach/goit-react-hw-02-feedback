import './Statistics.css';

export const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2 className="StatHeader">Statistics</h2>
      <div className="Container">
        <span className="">Good: {good}</span>
        <span className="">Neutral: {neutral}</span>
        <span className="">Bad: {bad}</span>
      </div>
    </>
  );
};
