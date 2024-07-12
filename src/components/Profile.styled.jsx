import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 600px;
  margin-bottom: 40px;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 32px;
  color: #868686;

  border-radius: 25px;
  overflow: hidden;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  padding: 40px;
`;

const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px black solid;
  background-size: contain;
`;

const UserName = styled.p`
  font-size: 56px;
  color: #252525;
`;

const UserTag = styled.p``;
const UserLocation = styled.p``;

const Stats = styled.ul`
  display: flex;
  align-items: center;
  height: 120px;
  width: 100%;
  font-size: 24px;
  background-color: #8badd175;
`;
const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;
const StatsLabel = styled.span``;

const StatsQuantity = styled.span`
  font-size: 36px;
  color: #252525;
`;

export {
  ProfileContainer,
  Description,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
};
