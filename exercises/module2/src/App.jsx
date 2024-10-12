import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter/ClickCounter';
import ColorChanger from './components/ColorChanger/ColorChanger';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClickCounter 
      title="Click Counter" 
      message="You are a master in the art of clicking!" />
      <div>
      <h1>Color Changing Boxes</h1>
      <ColorChanger />
      <ColorChanger />
      <ColorChanger />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App