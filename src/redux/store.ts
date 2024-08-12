import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    userState: userReducer,
    authState: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
