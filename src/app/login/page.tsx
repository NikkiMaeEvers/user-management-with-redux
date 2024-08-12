'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/authReducer'; 

const Login = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (userId !== null) {
      dispatch(login(userId));
      alert('Login successful');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="number"
        value={userId ?? ''}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Enter your User ID"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
