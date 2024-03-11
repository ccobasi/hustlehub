// reducers/signupReducer.js
const initialSignUpState = {
  fullName: '',
  email: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
};

const signUpReducer = (state = initialSignUpState, action) => {
  switch (action.type) {
    case 'SIGNUP_UPDATE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'SIGNUP_RESET':
      return initialSignUpState;
    default:
      return state;
  }
};

export default signUpReducer;
