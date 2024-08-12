// src/redux/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/user';

interface UserState {
  users: IUser[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload);
    },
    updateUserStatus(state, action: PayloadAction<{ id: number; statusMessage: string }>) {
      const user = state.users.find(user => user.id === action.payload.id);
      if (user) {
        user.statusMessage = action.payload.statusMessage;
      }
    },
    addFriend(state, action: PayloadAction<{ userId: number; friendId: number }>) {
      const user = state.users.find(user => user.id === action.payload.userId);
      if (user) {
        user.friends.push(action.payload.friendId);
      }
    },
  },
});

export const { addUser, updateUserStatus, addFriend } = userSlice.actions;
export default userSlice.reducer;
