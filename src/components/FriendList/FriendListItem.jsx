import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ friend }) {
  return (
    <li className={s.item}>
      <span
        // className={friend.isOnline ? {s.isOnline} : {s.isOffline}}
        className={friend.isOnline ? s.statusOnline : s.statusOffline}
      ></span>
      <img
        className={s.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={s.name}>{friend.name}</p>
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
