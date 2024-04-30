
import Candidates from './components/Candidates'
import Form from './components/Form'
import { VotingProvider } from './store/VotingContext'

import './App.css'

function App() {

  return (
    <VotingProvider>
      <Form />
      <Candidates />
    </VotingProvider>
  )
}

export default App
