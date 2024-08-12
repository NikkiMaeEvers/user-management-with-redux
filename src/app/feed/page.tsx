'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import UserCard from '../../components/UserCard';

const Feed = () => {
  const users = useSelector((state: RootState) => state.userState.users);
  const currentUserId = useSelector((state: RootState) => state.authState.currentUserId);

  const currentUser = users.find(user => user.id === currentUserId);

  const friendsStatuses = currentUser
    ? users.filter(user => currentUser.friends.includes(user.id))
    : [];

  return (
    <div>
      <h1>Feed</h1>
      {currentUser && <UserCard user={currentUser} />}
      {friendsStatuses.map(friend => (
        <UserCard key={friend.id} user={friend} />
      ))}
    </div>
  );
};

export default Feed;
