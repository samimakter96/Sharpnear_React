import { configureStore, createSlice } from '@reduxjs/toolkit';

const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy5(state, action) {
      state.counter += action.payload;
    },
    decrementBy5(state, action) {
      state.counter -= action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,

}

const authSlice = createSlice({
  name: 'authentication',
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})


const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
