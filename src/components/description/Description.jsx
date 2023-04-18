import PropTypes from 'prop-types';
// import { Card, userName, userEmail, place } from './Description.styled';

export const Description = ({username, tag, location, avatar}) => {
   

   
    return (
      <div className="description">
        <img
                src={ avatar}
          alt={ username}
          className="avatar"
        />
            <p className="name">{ username}</p>
            <p className="tag">{ tag}</p>
            <p className="location">{ location}</p>
      </div>
    );
}

Description.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}