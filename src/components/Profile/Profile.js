import PropTypes from 'prop-types';
import './Profile.css';
import defaultImage from './default.jpeg';

export default function Profile({
  name,
  tag,
  location,
  avatar = defaultImage,
  stats,
}) {
  return (
    <div className="Profile">
      <div className="Profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="Profile__avatar"
        />
        <p className="Profile__name">{name}</p>
        <p className="Profile__tag">@{tag}</p>
        <p className="Profile__location">{location}</p>
      </div>

      <ul className="Profile__stats">
        <li className="Profile__stats--item">
          <span className="Profile__label">Followers</span>
          <span className="Profile__quantity">{stats.followers}</span>
        </li>
        <li className="Profile__stats--item">
          <span className="Profile__label">Views</span>
          <span className="Profile__quantity">{stats.views}</span>
        </li>
        <li className="Profile__stats--item">
          <span className="Profile__label">Likes</span>
          <span className="Profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
