// actions/signinActions.js
export const updateSignInField = (field, value) => ({
  type: 'SIGNIN_UPDATE_FIELD',
  payload: { field, value },
});

export const resetSignIn = () => ({
  type: 'SIGNIN_RESET',
});
