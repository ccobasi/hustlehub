// actions/forgotPasswordActions.js
export const updateForgotPasswordField = (field, value) => ({
  type: 'FORGOTPASSWORD_UPDATE_FIELD',
  payload: { field, value },
});

export const resetForgotPassword = () => ({
  type: 'FORGOTPASSWORD_RESET',
});

export const submitForgotPassword = () => ({
  type: 'FORGOTPASSWORD_SUBMIT',
});
