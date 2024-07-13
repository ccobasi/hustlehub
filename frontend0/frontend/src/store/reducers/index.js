
// reducers/index.js
import { combineReducers } from 'redux';
import signUpReducer from './signupReducer';
import signInReducer from './signinReducer';
import changePasswordReducer from './changePasswordReducer';
import forgotPasswordReducer from './forgotPasswordReducer';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  changePassword: changePasswordReducer,
  forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
