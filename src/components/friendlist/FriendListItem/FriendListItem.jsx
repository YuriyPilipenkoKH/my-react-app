import PropTypes from 'prop-types';

export const FriendListItem = ({id, name , avatar,isOnline}) => {
   return (
    <li className="friends-item" id={id} >
    <span className="1"></span>
    <img 
    className={avatar }
    src={avatar } alt={name}
     width="48" />
    <p className={name}>{name}</p>
  </li>     
   )
 
}

FriendListItem.propTypes = {
    
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  
  };