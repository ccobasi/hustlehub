// reducers/signinReducer.js
const initialSignInState = {
  email: '',
  password: '',
};

const signInReducer = (state = initialSignInState, action) => {
  switch (action.type) {
    case 'SIGNIN_UPDATE_FIELD':
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case 'SIGNIN_RESET':
      return initialSignInState;
    default:
      return state;
  }
};

export default signInReducer;
