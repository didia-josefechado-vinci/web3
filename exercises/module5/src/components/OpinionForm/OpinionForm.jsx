import { useState, useContext } from 'react';
import { Context as VoteContext } from "../../contexts/VoteContext.jsx";

const OpinionForm = () => {
  const [text, setText] = useState('');
  const { addOpinion } = useContext(VoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addOpinion(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter your opinion" 
      />
      <button type="submit">Add Opinion</button>
    </form>
  );
};

export default OpinionForm;