// actions/changePasswordActions.js
export const CHANGE_PASSWORD_UPDATE_FIELD = 'CHANGE_PASSWORD_UPDATE_FIELD';
export const SUBMIT_CHANGE_PASSWORD_FORM = 'SUBMIT_CHANGE_PASSWORD_FORM';

export const updateChangePasswordField = (field, value) => ({
  type: CHANGE_PASSWORD_UPDATE_FIELD,
  payload: { field, value },
});

export const submitChangePasswordForm = () => ({
  type: SUBMIT_CHANGE_PASSWORD_FORM,
});
