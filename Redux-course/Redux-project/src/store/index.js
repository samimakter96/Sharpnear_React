import {createStore} from 'redux'

const INITIAL_STATE = {counter: 0, showCounter: true}

const counterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'incrementBy5') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter

    }
  }
  if (action.type === 'decrementBy5') {
    return {
      counter: state.counter - action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state
}

const store = createStore(counterReducer)

export default store;