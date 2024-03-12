// store.js
import { createStore } from 'redux';
import rootReducer from './reducers/index'; // Create reducers file

const store = createStore(rootReducer);

export default store;
