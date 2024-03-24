// /src/store/reducers/authReducer.js

import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, SIGNOUT_SUCCESS, FORGOT_PASSWORD_SUCCESS, CHANGE_PASSWORD_SUCCESS } from '../actions/authActions';

const initialState = {
  user: null,
  isAuthenticated: false,
  forgotPasswordSuccess: false,
  changePasswordSuccess: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case SIGNOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordSuccess: true,
      };
    
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordSuccess: true,
      };

    default:
      return state;
  }
};

export default authReducer;