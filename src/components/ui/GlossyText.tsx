'use client';

import { useState, useEffect } from 'react';

export default function GlossyText({ className = '' }: { className?: string }) {
  const [text, setText] = useState('');
  const fullText = 'SANGANAK';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, []);

  const renderLetter = (letter: string, index: number, isRoyal: boolean) => {
    if (!letter) return null;
    
    const style = {
      opacity: 0,
      animation: `royal-appear 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards ${index * 0.12}s`
    };

    return (
      <span 
        key={index}
        style={style}
        className={`inline-block ${isRoyal ? 'royal-gold' : 'text-white'}`}
        data-text={letter}
      >
        {letter}
      </span>
    );
  };

  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="w-full max-w-[90%] mx-auto flex justify-center items-center">
        <div className="relative">
          {/* Shadow text */}
          <h1 className="absolute text-[15vw] font-sans font-black tracking-tighter leading-none text-[#1a1a1a] blur-[2px] opacity-50">
            {text}
          </h1>
          
          {/* Main text */}
          <h1 className="relative text-[15vw] font-sans font-black tracking-tighter leading-none flex">
            {/* SANG */}
            {text.slice(0, 4).split('').map((letter, i) => 
              renderLetter(letter, i, true)
            )}
            {/* AN */}
            {text.slice(4, 6).split('').map((letter, i) => 
              renderLetter(letter, i + 4, false)
            )}
            {/* AK */}
            {text.slice(6).split('').map((letter, i) => 
              renderLetter(letter, i + 6, true)
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}
