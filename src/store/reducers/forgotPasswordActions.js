// reducers/forgotPasswordReducer.js
const initialForgotPasswordState = {
  email: '',
};

const forgotPasswordReducer = (state = initialForgotPasswordState, action) => {
  switch (action.type) {
    case 'FORGOTPASSWORD_UPDATE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'FORGOTPASSWORD_RESET':
      return initialForgotPasswordState;
    default:
      return state;
  }
};

export default forgotPasswordReducer;
