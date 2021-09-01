import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span className="friendlist__status--online"></span>
      ) : (
        <span className="friendlist__status--ofline"></span>
      )}
      <img className="friendlist__avatar" src={avatar} alt={name} width="48" />
      <p className="friendlist__name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
