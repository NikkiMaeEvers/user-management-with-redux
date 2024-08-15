// src/app/(auth)/login/page.tsx
"use client";  // Add this line at the top

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/reducers/authReducer';
import { RootState } from '../../../redux/store';
import { redirect, useRouter } from 'next/navigation';

const LoginPage = () => {
  const [userId, setUserId] = useState<number | string>('');
  const dispatch = useDispatch();
  const router = useRouter();

  // Access users from the Redux store
  const users = useSelector((state: RootState) => state.userState.users);

  const handleLogin = () => {
    const existingUser = users.find((user) => user.id === parseInt(userId as string));

    if (existingUser) {
      // Dispatch the loginUser action to set the auth state
      dispatch(loginUser(existingUser.id));
      alert('Login successful!');

      // In Milestone 2, you will redirect to the feed page
    } else {
      alert('User not found!');
    }
  };

  const handleProceedToRegister = () => {
    // Redirect to the Register page
    redirect('/auth/register');
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter your user ID"
      />
      <button onClick={handleLogin}>Login</button>
    
      
      <div>
        <button onClick={handleProceedToRegister}>Don't have an account yet? Proceed to register</button>
      </div>
      
    </div>
  );
};

export default LoginPage;
