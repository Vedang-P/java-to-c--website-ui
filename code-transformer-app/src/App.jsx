import React, { useState } from 'react';
import Header from './components/Header';
// import LanguageSelector from './components/LanguageSelector'; // Removed
import CodePanel from './components/CodePanel';
import ActionBar from './components/ActionBar';
import './App.css';

function App() {
  // State for input/output code and language selections
  const [javaCode, setJavaCode] = useState('// Your Java code here...');
  const [csharpCode, setCsharpCode] = useState('// Generated C# code will appear here.');
  const [sourceLang, setSourceLang] = useState('Java');
  const [targetLang, setTargetLang] = useState('C#');

  // Placeholder function for the transformation logic
  const handleTransform = () => {
    console.log("Transforming code...");
    // In a real application, you would make an API call to your backend here.
    // For now, we'll just set some dummy output.
    setCsharpCode(`// This is a transformed version of the Java code.\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, C#!");\n  }\n}`);
  };
  
  // Function to swap languages
  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setJavaCode(csharpCode);
    setCsharpCode(javaCode);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <CodePanel
          language={sourceLang}
          code={javaCode}
          setCode={setJavaCode}
          isReadOnly={false}
        />
        <button className="swap-button center-swap" onClick={handleSwapLanguages} title="Swap Languages">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14H21M21 14L17 10M21 14L17 18" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14H7M7 14L11 10M7 14L11 18" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <CodePanel
          language={targetLang}
          code={csharpCode}
          isReadOnly={true}
        />
      </main>
      <ActionBar onTransform={handleTransform} />
    </div>
  );
}

export default App;
