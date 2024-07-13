// actions/signinActions.js
export const SIGNIN_UPDATE_FIELD = 'SIGNIN_UPDATE_FIELD';
export const SUBMIT_SIGNIN_FORM = 'SUBMIT_SIGNIN_FORM';

export const updateSigninField = (field, value) => ({
  type: SIGNIN_UPDATE_FIELD,
  payload: { field, value },
});

export const submitSigninForm = () => ({
  type: SUBMIT_SIGNIN_FORM,
});
