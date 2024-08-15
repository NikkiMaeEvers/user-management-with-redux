"use client";  // Ensure this is at the top

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../redux/reducers/userReducer';
import { RootState } from '../../../redux/store';
import { redirect, useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [userId, setUserId] = useState<number | null>(null); // To store and display the user's ID after registration
  const dispatch = useDispatch();
  const router = useRouter();

  // Access the current users from the Redux store
  const users = useSelector((state: RootState) => state.userState.users);

  const handleRegister = () => {
    // Check if a user with the same name already exists
    const existingUser = users.find((user) => user.name === name);

    if (existingUser) {
      alert('User with this name already exists! Please choose a different name.');
      return;
    }

    // Determine the next user ID based on the highest existing ID
    const newUserId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

    // Create a new user object
    const newUser = {
      id: newUserId,  // Assign the calculated ID
      name,
      profilePicture,
      statusMessage,
      friends: [],
    };

    // Dispatch the addUser action to update the Redux store
    dispatch(addUser(newUser));
    
    // Set the user's ID in state to display it
    setUserId(newUser.id);
  };

  const handleProceedToLogin = () => {
    // Redirect to the login page
    redirect('/auth/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
        placeholder="Enter your profile picture URL"
      />
      <input
        type="text"
        value={statusMessage}
        onChange={(e) => setStatusMessage(e.target.value)}
        placeholder="Enter your status message"
      />
      <button onClick={handleRegister}>Register</button>

      {userId && (
        <div>
          <p>Registration successful! Your User ID is: {userId}</p>
          <button onClick={handleProceedToLogin}>Proceed to Login</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
