// /src/store/actions/authActions.js

// Define action types
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';

// Action creators
export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signinSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});

export const changePasswordSuccess = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
});




