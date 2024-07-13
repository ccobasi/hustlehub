// store/index.js
import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import signupReducer from '../store/reducers/signupReducer';
import signinReducer from '../store/reducers/signinReducer';
import changePasswordReducer from '../store/reducers/changePasswordReducer';
import forgotPasswordReducer from '../store/reducers/forgotPasswordReducer'
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
  changePassword: changePasswordReducer,
  forgotPassword: forgotPasswordReducer, 
  auth: authReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;

