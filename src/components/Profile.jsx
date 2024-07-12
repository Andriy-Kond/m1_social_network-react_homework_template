import {
  ProfileContainer,
  Description,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
} from 'components/Profile.styled';
export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileContainer>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers:</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views:</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes:</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileContainer>
  );
}
