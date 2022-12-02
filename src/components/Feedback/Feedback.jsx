import React from 'react';
import './Feedback.css';

export const Feedback = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <>
    <div className="Controls">
      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  </>
);
