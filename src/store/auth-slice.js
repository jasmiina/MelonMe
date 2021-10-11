import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'), //if user has already logged in, get identifying token. If not, get undefined.
    isLoggedIn: !!localStorage.getItem('token'), //TODO: move login status away from localstorage
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
    },
    logoutHandler(state) {
      state.token = '';
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
  }
});

export const {loginHandler, logoutHandler} = authSlice.actions;

export default authSlice;