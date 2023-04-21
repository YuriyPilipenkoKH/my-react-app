import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem/FriendListItem'


export const FriendsList = ({friends}) => {

    return (
        <ul className="friend-list" >
            {friends.map(({id, name , avatar, isOnline}) => (
                <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  };