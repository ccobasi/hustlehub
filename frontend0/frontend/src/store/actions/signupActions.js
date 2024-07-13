// actions/signupActions.js
export const SIGNUP_UPDATE_FIELD = 'SIGNUP_UPDATE_FIELD';
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';

export const updateField = (field, value) => ({
  type: SIGNUP_UPDATE_FIELD,
  payload: { field, value },
});

export const submitSignupForm = () => ({
  type: SUBMIT_SIGNUP_FORM,
});
