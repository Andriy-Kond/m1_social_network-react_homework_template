import styled from '@emotion/styled';

const FriendsBoard = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
`;

const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
`;

const FriendStatus = styled.span`
  display: flex;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const FriendAvatar = styled.img`
  width: 100px;
  padding: 10px;

  border-radius: 10px;
  background-color: #5fc2e963;
`;

const FriendName = styled.p``;

export { FriendsBoard, Friend, FriendStatus, FriendAvatar, FriendName };
