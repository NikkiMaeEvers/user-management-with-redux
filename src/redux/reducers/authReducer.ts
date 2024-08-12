// src/redux/reducers/authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAuthState } from '../../interfaces/user';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginUser: (state, action: PayloadAction<number>) => {
      state.isLoggedIn = true;
      state.currentUserId = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.currentUserId = null;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
