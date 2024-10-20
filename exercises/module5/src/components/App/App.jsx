import { useState,useContext } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Context as VoteContext } from "../../contexts/voteContext.jsx";

function App() {
  const [count, setCount] = useState(0)
  const { vote, increaseGood, increaseOK, increaseBad, reset } = useContext(VoteContext)

  return (
    <div>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>
          Hello Vite + React!
        </p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <button onClick={increaseGood}>
            increase good
          </button>
          <button onClick={increaseOK}>
            increase ok
          </button>
          <button onClick={increaseBad}>
            increase bad
          </button>
          <button onClick={reset}>
            Reset scores
          </button>
          <br />
          <span>Good: {vote.good} </span>

          <span>OK: {vote.ok} </span>
          <span>Bad: {vote.bad} </span>
        </p>
      </header>
    </div>
  )
}

export default App
