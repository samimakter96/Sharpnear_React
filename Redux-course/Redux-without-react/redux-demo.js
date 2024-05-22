const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  } else if (action.type === 'INCREMENTBY2') {
    return {
      counter: state.counter + action.payload,
    };
  } else if (action.type === 'DECREMENTBY2') {
    return {
      counter: state.counter - action.payload,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENTBY2', payload: 2 });
store.dispatch({ type: 'DECREMENTBY2', payload: 2 });

