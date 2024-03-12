
// reducers/index.js
import { combineReducers } from 'redux';
import signUpReducer from './signupReducer';
import signInReducer from './signinReducer';
import changePasswordReducer from './changePasswordReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  changePassword: changePasswordReducer,
  // Add more reducers if needed
});

export default rootReducer;
