import { Description } from './description/Description'
import PropTypes from 'prop-types';
import {Stats} from './stats/stats'

export const Profile = ({ user} ) => {
    const { username, tag, location, avatar, stats } = user;
  return (
    <div className="profile">
      <Description
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      ></Description>
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      ></Stats>
    </div>
  );
   
}

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};


// username: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       stats: PropTypes.exact({
//         followers: PropTypes.number.isRequired,
//         views: PropTypes.number.isRequired,
//         likes: PropTypes.number.isRequired,