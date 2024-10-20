import { useContext } from 'react';
import { Context as VoteContext } from "../../contexts/VoteContext.jsx";

const OpinionList = () => {
  const { opinions, voteOpinion } = useContext(VoteContext);

  return (
    <div>
      {opinions.map(opinion => (
        <div key={opinion.id}>
          <span>{opinion.text} - Votes: {opinion.votes}</span>
          <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default OpinionList;