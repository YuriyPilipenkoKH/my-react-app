import PropTypes from 'prop-types';

import { Avatar, UserName, UserEmail, Place } from './Description.styled';

export const Description = ({username, tag, location, avatar}) => {
   

   
    return (
      <div className="description">
        <Avatar
                src={ avatar}
          alt={ username}
          className="avatar"
        />
            <UserName >{ username}</UserName>
            <UserEmail className="tag">{ tag}</UserEmail>
            <Place className="location">{ location}</Place>
      </div>
    );
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}