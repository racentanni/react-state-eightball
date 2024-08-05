// BoxContainer.js
import React from 'react';
import Box from './Box';

const BoxContainer = ({ colors }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '200px' }}>
      {colors.map((color, index) => (
        <Box key={index} color={color} />
      ))}
    </div>
  );
};

export default BoxContainer;