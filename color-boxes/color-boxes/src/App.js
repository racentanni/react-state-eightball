// App.js
// App.js
import React, { useState } from 'react';
import BoxContainer from './BoxContainer';
import ChangeButton from './ChangeButton';

const App = () => {
  const initialColors = Array.from({ length: 16 }, () => getRandomColor());
  const [colors, setColors] = useState(initialColors);

  const changeRandomBoxColor = () => {
    const newColors = [...colors];
    const randomIndex = Math.floor(Math.random() * 16);
    newColors[randomIndex] = getRandomColor();
    setColors(newColors);
  };

  return (
    <div>
      <BoxContainer colors={colors} />
      <ChangeButton onClick={changeRandomBoxColor} />
    </div>
  );
};

const getRandomColor = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default App;






