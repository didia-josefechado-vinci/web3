import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [vote, setVote] = useState({ good: 0, ok: 0, bad: 0 });

  const increaseGood = () => {
    setVote((prevVote) => ({ ...prevVote, good: prevVote.good + 1 }));
  };

  const increaseOK = () => {
    setVote((prevVote) => ({ ...prevVote, ok: prevVote.ok + 1 }));
  };

  const increaseBad = () => {
    setVote((prevVote) => ({ ...prevVote, bad: prevVote.bad + 1 }));
  };

  const reset = () => {
    setVote({ good: 0, ok: 0, bad: 0 });
  };

  const exposedValue = {
    vote,
    increaseGood,
    increaseOK,
    increaseBad,
    reset,
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