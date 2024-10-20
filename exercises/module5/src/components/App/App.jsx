import { useContext } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Context as VoteContext } from "../../contexts/VoteContext.jsx";
import OpinionList from '../OpinionList/OpinionList.jsx';
import AddOpinionForm from '../OpinionForm/OpinionForm.jsx';

function App() {
  useContext(VoteContext);

  return (
    <div>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <OpinionList />
        <AddOpinionForm />
      </header>
    </div>
  );
}

export default App;