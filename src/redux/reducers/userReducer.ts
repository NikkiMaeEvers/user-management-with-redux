// src/redux/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../../interfaces/user';

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    // Additional actions like setStatusMessage, addFriend can be added here
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
