// store/index.js
import { createStore, combineReducers } from 'redux';
import signUpReducer from '../store/reducers/signupReducer';
import signinReducer from '../store/reducers/signinReducer';
import changePasswordReducer from '../store/reducers/changePasswordReducer';
import forgotPasswordReducer from '../store/reducers/forgotPasswordActions'

const rootReducer = combineReducers({
  signUp: signUpReducer,
  signin: signinReducer,
  changePassword: changePasswordReducer,
  forgotPassword: forgotPasswordReducer, 
});

const store = createStore(rootReducer);

export default store;

