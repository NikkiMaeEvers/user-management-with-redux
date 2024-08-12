import React from 'react';
import { IUser } from '../interfaces/user';

interface UserCardProps {
  user: IUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.profilePicture} alt={`${user.name}'s profile`} />
      <h2>{user.name}</h2>
      <p>{user.statusMessage}</p>
    </div>
  );
};

export default UserCard;
