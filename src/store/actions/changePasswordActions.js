// actions/changePasswordActions.js
export const updateChangePasswordField = (field, value) => ({
  type: 'CHANGEPASSWORD_UPDATE_FIELD',
  payload: { field, value },
});

export const resetChangePassword = () => ({
  type: 'CHANGEPASSWORD_RESET',
});
