import React, { createContext, useState } from 'react';

export const VotingContext = createContext();

export function VotingProvider({ children }) {
  const [votes, setVotes] = useState([]);

  const handleFormSubmit = (studentName, monitor) => {
    const newVote = { voterName: studentName, monitorName: monitor };
    setVotes((prevVotes) => [...prevVotes, newVote]);
  };

  const handleDeleteVoter = (voterName, monitorName) => {
    setVotes((prevVotes) =>
      prevVotes.filter(
        (vote) =>
          !(vote.voterName === voterName && vote.monitorName === monitorName)
      )
    );
  };

  const samimVotes = votes.filter(
    (vote) => vote.monitorName === 'samim'
  ).length;
  const kartikVotes = votes.filter(
    (vote) => vote.monitorName === 'kartik'
  ).length;
  const amanVotes = votes.filter((vote) => vote.monitorName === 'aman').length;

  const contextValue = {
    totalVotes: votes.length,
    samimVotes,
    kartikVotes,
    amanVotes,
    voters: votes,
    handleFormSubmit,
    handleDeleteVoter,
  };

  return (
    <VotingContext.Provider value={contextValue}>
      {children}
    </VotingContext.Provider>
  );
}
