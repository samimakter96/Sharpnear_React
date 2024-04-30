import { useContext } from 'react';
import { VotingContext } from '../store/VotingContext';

// Custom hook to use the context
function useVoting() {
  return useContext(VotingContext);
}

export default useVoting;
