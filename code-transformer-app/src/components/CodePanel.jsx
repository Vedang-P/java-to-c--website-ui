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

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (setCode) setCode(text);
    } catch (err) {
      alert('Failed to paste from clipboard!');
    }
  };

  return (
    <div className="code-panel">
      <div className="panel-header">
        <h2>{language}</h2>
        {setCode ? (
          <div className="panel-actions">
            <button onClick={handleClear} className="panel-button">Clear</button>
            <button onClick={handlePaste} className="panel-button">Paste</button>
            <button onClick={handleCopy} className="panel-button">Copy</button>
          </div>
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
