// /src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../store/reducers/index';

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  
});

export default store;


