import { useContext } from "react";
import { VotingContext } from "../store/VotingContext";

function Candidate({ name, monitor, monitorTotalVotes }) {
  const { voters, handleDeleteVoter } = useContext(VotingContext);

  const getVotersByMonitor = (monitor) => {
    return voters.filter((voter) => voter.monitorName === monitor);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Total: {monitorTotalVotes}</p>
      <ul>
        {getVotersByMonitor(monitor).map((voter) => (
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
