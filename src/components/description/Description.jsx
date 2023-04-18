import PropTypes from 'prop-types';
import { Card, userName, userEmail, place } from './Description.styled';

export const Description = (user) => {

    const { username, tag, location, avatar, stats } = user;
   
    return (
      <Description>
        <Card
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <userName className={userName}>{userName}</userName>
        <userEmail className={userEmail}>{userEmail}</userEmail>
            <place className={ location}>{location}</place>
      </Description>
    );
}