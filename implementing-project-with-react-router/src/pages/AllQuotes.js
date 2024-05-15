import {useEffect} from 'react'

import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from '../lib/api'
import LoadingSpinner from '../components/UI/LoadingSpinner';

// const DUMMY_QUOTES = [
//   {id: 'q1', author: 'Max', text: 'Learning React is fun!'},
//   {id: 'q1', author: 'Samim', text: 'Learning React is fun!'},
// ]

const AllQuotes = () => {

  const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className='centered focused'>
      {error}
    </p>
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <p>No Quotes Found</p>
  }

  return <QuoteList quotes={loadedQuotes}/>
}

export default AllQuotes;