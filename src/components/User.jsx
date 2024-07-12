export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{stats.followers}</span>
          <span class="quantity">{stats.followers.length}</span>
        </li>
        <li>
          <span class="label">{stats.views}</span>
          <span class="quantity">{stats.views.length}</span>
        </li>
        <li>
          <span class="label">{stats.likes}</span>
          <span class="quantity">{stats.likes.length}</span>
        </li>
      </ul>
    </div>
  );
}
