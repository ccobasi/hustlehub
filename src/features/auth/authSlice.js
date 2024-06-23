// import { createSlice } from "@reduxjs/toolkit"

// const authSlice = createSlice({
//     name: "auth",
//     initialState: { user: null, token: null },
//     reducers: {
//         setCredentials: (state, action) => {
//             const { user, accessToken } = action.payload
//             state.user = user
//             state.token = accessToken
//         },
//         logOut: (state, action) =>{
//             state.user = null
//             state.token = null
//         }
//     },
// })

// export const { setCredentials, logOut } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentUser = (state) => state.auth.user
// export const selectCurrentToken = (state) => state.auth.token

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

//console.log(initialState);
//console.log(initialState.userInfo.role);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
