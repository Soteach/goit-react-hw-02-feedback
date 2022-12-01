import React from 'react';
import './Controls.css';

export const Controls = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <>
    <h2 className="Header">Please leave feedback</h2>
    <div className="Controls">
      <button type="submit" onClick={onIncrementGood}>
        Good
      </button>
      <button type="submit" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="submit" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  </>
);
