// actions/signupActions.js
export const updateSignUpField = (field, value) => ({
  type: 'SIGNUP_UPDATE_FIELD',
  payload: { field, value },
});

export const resetSignUp = () => ({
  type: 'SIGNUP_RESET',
});
