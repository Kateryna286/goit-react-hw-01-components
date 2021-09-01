import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      {isOnline ? (
        <span class="friendlist__status--online"></span>
      ) : (
        <span class="friendlist__status--ofline"></span>
      )}
      <img class="friendlist__avatar" src={avatar} alt={name} width="48" />
      <p class="friendlist__name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
