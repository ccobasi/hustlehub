// reducers/signupReducer.js
import { SIGNUP_UPDATE_FIELD, SUBMIT_SIGNUP_FORM } from '../actions/signupActions';

const initialSignUpState = {
  fullName: '',
  email: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
};

const signUpReducer = (state = initialSignUpState, action) => {
  switch (action.type) {
    case SIGNUP_UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case SUBMIT_SIGNUP_FORM:
      console.log('Signup form submitted with data:', state);
      // You can add logic to reset the state or perform additional actions
      return state;
    default:
      return state;
  }
};

export default signUpReducer;

