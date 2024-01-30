import React, { useState,useEffect } from 'react';

import Option from './Option';

function Question({ question, options, onSelect }) {
  const [timer, setTimer] = useState(10); // Timer in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      onSelect(null); // Automatically select no option when time runs out
    }
  }, [timer, onSelect]);

  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="timer">{timer}s</div>
      {options.map((option, index) => (
        <Option key={index} optionText={option} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default Question;