import React from 'react';

function ActionBar({ onTransform }) {
  return (
    <div className="action-bar">
      <button onClick={onTransform} className="transform-button">
        Transform
      </button>
    </div>
  );
}

export default ActionBar;
