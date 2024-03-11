// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Create reducers file

const store = createStore(rootReducer);

export default store;
