// /src/store/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../store/reducers/index';

// // Create the Redux store
// const store = configureStore({
//   reducer: rootReducer,
  
// });

// export default store;

// Import necessary dependencies
import { createStore } from 'redux';
import rootReducer from './reducers/index';

// Define a function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Define a function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('authState', serializedState);
  } catch {
    console.log("Error saving state");
  }
};

// Create the Redux store with persisted state
const store = createStore(rootReducer, loadState());

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;

