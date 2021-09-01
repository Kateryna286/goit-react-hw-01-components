import FriendListItem from './FriendListItem';
import './FriendList.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul class="friendlist">
      {friends.map(friend => (
        <li class="friendlist__item" key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
