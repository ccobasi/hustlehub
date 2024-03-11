export default signUpReducer;
// reducers/index.js
import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  // Add more reducers if needed
});

export default rootReducer;
