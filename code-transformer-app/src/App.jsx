import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
// import LanguageSelector from './components/LanguageSelector'; // Removed
import CodePanel from './components/CodePanel';
import ActionBar from './components/ActionBar';
import './App.css';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

function App() {
  // State for input/output code and language selections
  const [javaCode, setJavaCode] = useState('// Your Java code here...');
  const [csharpCode, setCsharpCode] = useState('// Generated C# code will appear here.');
  const [sourceLang, setSourceLang] = useState('Java');
  const [targetLang, setTargetLang] = useState('C#');

  // Vanta HALO background
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = HALO({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x23232b,
        backgroundColor: 0x18181b,
        amplitudeFactor: 2.0,
        xOffset: 0,
        yOffset: 0,
        size: 2.5,
        color: 0x50fa7b,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

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
    <>
      <div
        ref={vantaRef}
        className="vanta-bg vanta-blur"
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          left: 0,
          top: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      ></div>
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
            setCode={setCsharpCode}
            isReadOnly={false}
          />
        </main>
        <ActionBar onTransform={handleTransform} />
      </div>
    </>
  );
}

export default App;
