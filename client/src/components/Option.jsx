import React from 'react';

function Option({ optionText, onSelect }) {
  return (
    <div className="option" onClick={() => onSelect(optionText)}>
      {optionText}
    </div>
  );
}

export default Option;