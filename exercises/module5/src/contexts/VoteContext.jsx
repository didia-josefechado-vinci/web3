import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([]);

  const addOpinion = (text) => {
    const newOpinion = { id: uuidv4(), text, votes: 1 };
    setOpinions((prevOpinions) => sortOpinions([...prevOpinions, newOpinion]));
  };

  const voteOpinion = (id) => {
    setOpinions((prevOpinions) => 
      sortOpinions(prevOpinions.map(opinion => 
        opinion.id === id ? { ...opinion, votes: opinion.votes + 1 } : opinion
      ))
    );
  };

  const sortOpinions = (opinions) => {
    return opinions.sort((a, b) => b.votes - a.votes);
  };

  const exposedValue = {
    opinions,
    addOpinion,
    voteOpinion,
  };

  return (
    <Context.Provider value={exposedValue}>
      {props.children}
    </Context.Provider>
  );
};

export {    
  Context,
  ProviderWrapper,    
};