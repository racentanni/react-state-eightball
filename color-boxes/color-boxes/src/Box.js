// Box.js
import React from 'react';

const Box = ({ color }) => {
  return (
    <div style={{ width: '50px', height: '50px', backgroundColor: color, margin: '2px' }}></div>
  );
};

export default Box;