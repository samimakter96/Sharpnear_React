import { useContext } from 'react';
import { VotingContext } from '../store/VotingContext';

function Candidate({ name, monitor, monitorTotalVotes }) {

  const { voters, handleDeleteVoter } = useContext(VotingContext);

  return (
    <div>
      <h1>{name}</h1>
      <p>Total: {monitorTotalVotes}</p>
      <ul>
        {/* Filtering the voters array based on the monitor and mapping over the filtered array */}
        {voters
          .filter((voter) => voter.monitorName === monitor)
          .map((voter) => (
            <li key={`${voter.voterName}-${voter.monitorName}`}>
              {voter.voterName}
              <button
                className="delete-button"
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
  );
}

export default Candidate;
