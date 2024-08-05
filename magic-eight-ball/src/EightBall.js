// EightBall.js
import React, { useState } from 'react';
import './EightBall.css';

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [counts, setCounts] = useState({ green: 0, goldenrod: 0, red: 0 });

  function handleClick() {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setMsg(randomAnswer.msg);
    setColor(randomAnswer.color);
    setCounts(prevCounts => ({
      ...prevCounts,
      [randomAnswer.color]: prevCounts[randomAnswer.color] + 1
    }));
  }

  function handleReset() {
    setMsg("Think of a Question");
    setColor("black");
  }

  return (
    <div>
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
        <p>{msg}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
      <div>
        <p>Green: {counts.green}</p>
        <p>Goldenrod: {counts.goldenrod}</p>
        <p>Red: {counts.red}</p>
      </div>
    </div>
  );
}

export default EightBall;