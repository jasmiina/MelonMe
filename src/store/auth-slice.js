import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '', //unique user identifier
    isLoggedIn: false,
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      state.token = null;
      state.isLoggedIn = false;
    },
  }
});

export const {loginHandler, logoutHandler} = authSlice.actions;

export default authSlice;