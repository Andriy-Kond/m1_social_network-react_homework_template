import {
  FriendsBoard,
  Friend,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from 'components/FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendsBoard>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            <FriendStatus color={isOnline ? 'green' : 'red'}></FriendStatus>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </Friend>
        );
      })}
    </FriendsBoard>
  );
}
