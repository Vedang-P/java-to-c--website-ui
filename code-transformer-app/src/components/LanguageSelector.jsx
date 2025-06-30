import React from 'react';

function LanguageSelector({ sourceLang, targetLang, onSwap }) {
  return (
    <div className="language-selector">
      <div className="dropdown-container">
        <label htmlFor="from-lang">From:</label>
        <select id="from-lang" defaultValue={sourceLang}>
          <option value="Java">Java</option>
          {/* Add other source languages here */}
        </select>
      </div>
      
      <button onClick={onSwap} className="swap-button" title="Swap Languages">
        &#x21C4; {/* Unicode for arrows */}
      </button>

      <div className="dropdown-container">
        <label htmlFor="to-lang">To:</label>
        <select id="to-lang" defaultValue={targetLang}>
          <option value="C#">C#</option>
          {/* Add other target languages here */}
        </select>
      </div>
    </div>
  );
}

export default LanguageSelector;
