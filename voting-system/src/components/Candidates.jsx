import React, { useContext } from 'react';
import { VotingContext } from '../store/VotingContext';
import Candidate from './Candidate';

function Candidates() {
  const { samimVotes, kartikVotes, amanVotes } = useContext(VotingContext);

  return (

    <div>
      <Candidate name="Samim" monitor="samim" monitorTotalVotes={samimVotes}/>
      <Candidate name="Kartik" monitor="kartik" monitorTotalVotes={kartikVotes}/>
      <Candidate name="Aman" monitor="aman" monitorTotalVotes={amanVotes}/>
    </div>

  );
}

export default Candidates;
