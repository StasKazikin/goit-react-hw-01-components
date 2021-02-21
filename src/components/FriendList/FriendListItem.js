import React from 'react';
import PropTypes from 'prop-types';

function FriendListItem({ friend }) {
  return (
    <li className="item">
      <span
        className={friend.isOnline ? 'status isOnline' : 'status isOffline'}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default FriendListItem;
