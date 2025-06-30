import React from 'react';

function CodePanel({ language, code, setCode, isReadOnly }) {
  const handleClear = () => {
    if (setCode) {
      setCode('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="code-panel">
      <div className="panel-header">
        <h2>{language}</h2>
        {!isReadOnly ? (
          <button onClick={handleClear} className="panel-button">Clear</button>
        ) : (
          <button onClick={handleCopy} className="panel-button">Copy</button>
        )}
      </div>
      <textarea
        className="code-textarea"
        value={code}
        onChange={(e) => !isReadOnly && setCode(e.target.value)}
        readOnly={isReadOnly}
        spellCheck="false"
      />
    </div>
  );
}

export default CodePanel;
