// reducers/changePasswordReducer.js
const initialChangePasswordState = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const changePasswordReducer = (state = initialChangePasswordState, action) => {
  switch (action.type) {
    case 'CHANGEPASSWORD_UPDATE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'CHANGEPASSWORD_RESET':
      return initialChangePasswordState;
    default:
      return state;
  }
};

export default changePasswordReducer;
