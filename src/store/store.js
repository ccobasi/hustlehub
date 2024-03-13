// /src/store/store.js
import { configureStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;

