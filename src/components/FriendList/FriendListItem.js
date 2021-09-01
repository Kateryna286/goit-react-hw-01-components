import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
