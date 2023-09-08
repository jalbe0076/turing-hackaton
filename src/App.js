import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const boxRef = useRef(null)
  
  const handleMouseMove = (e) => {    
    const boxes = Array.from(boxRef.current.querySelectorAll(".box"));
    for (const box of boxes) {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      box.style.setProperty("--mouse-x", `${x}px`);
      box.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  useEffect(() => {
    boxRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      boxRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])

  return (
    <div className="App" ref={boxRef}>
      <div className='box1 box'></div>
      <div className='box2 box'></div>
      <div className='box3 box'></div>
      <div className='box4 box'></div>
      <div className='box5 box'></div>
      <div className='box6 box'></div>
      <div className='box7 box'></div>
      <div className='box8 box'></div>
      <div className='circle circle1'></div>
      <div className='circle circle2'></div>
      <div className='circle circle3'></div>
    </div>
  );
}

export default App;
