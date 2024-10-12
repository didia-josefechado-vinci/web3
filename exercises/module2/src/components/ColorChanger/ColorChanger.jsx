import { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: currentColor, padding: '10px', margin: '10px' }}>
      <button onClick={changeColor}>Next color: {nextColor}</button>
      <p>Current color: {currentColor}</p>
    </div>
  );
};

export default ColorBox;