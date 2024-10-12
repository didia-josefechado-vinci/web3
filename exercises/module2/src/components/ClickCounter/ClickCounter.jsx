import { useState } from 'react';

const ClickCounter = ({title,message}) => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")) || 0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  }

  const handleMouseOut = () => {
    setIsMouseOver(false);
  }

  const handleClick = () => {
    localStorage.setItem('count', count);
    setCount((count) => count + 1)
  }


  return (
    <div className="card">
        <h2>{title}</h2>
      <button onClick={(handleClick)} onMouseEnter={(handleMouseOver)} onMouseLeave={(handleMouseOut)}>
        count is {count}
      </button>
      {count >= 10 && <p>{message}</p>}
      {!isMouseOver && <p>Please click me now!</p>}
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default ClickCounter;