import React, { useContext } from 'react';
import { VotingContext } from '../store/VotingContext';

function Candidates() {
  const { samimVotes, kartikVotes, amanVotes, voters, handleDeleteVoter } =
    useContext(VotingContext);

  const getVotersByMonitor = (monitor) => {
    return voters.filter((voter) => voter.monitorName === monitor);
  };

  return (
    <div>
      <h1>Candidates</h1>
      <div>
        <h2>Samim</h2>
        <p>Total Votes: {samimVotes}</p>
        <ul>
          {getVotersByMonitor('samim').map((voter) => (
            <li key={`${voter.voterName}-${voter.monitorName}`}>
              {voter.voterName}
              <button
                onClick={() =>
                  handleDeleteVoter(voter.voterName, voter.monitorName)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Kartik</h2>
        <p>Total Votes: {kartikVotes}</p>
        <ul>
          {getVotersByMonitor('kartik').map((voter) => (
            <li key={`${voter.voterName}-${voter.monitorName}`}>
              {voter.voterName}
              <button
                onClick={() =>
                  handleDeleteVoter(voter.voterName, voter.monitorName)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Aman</h2>
        <p>Total Votes: {amanVotes}</p>
        <ul>
          {getVotersByMonitor('aman').map((voter) => (
            <li key={`${voter.voterName}-${voter.monitorName}`}>
              {voter.voterName}
              <button
                onClick={() =>
                  handleDeleteVoter(voter.voterName, voter.monitorName)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Candidates;
