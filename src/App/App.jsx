import user from '../data/user.json'
import statistics from '../data/statistics.json';
import friends from '../data/friends.json'

import { Profile } from '../components/profile/Profile'
import { Statistics } from '../components/statistics/statistics'
import {FriendsList} from '../components/friendlist/FriendList'



export const App = () => {

  return (
    <div className='wrapper'>
      <Profile user={user}></Profile>
      <Statistics statistics={statistics} title="Upload stats"></Statistics>
      <FriendsList friends={friends}></FriendsList>
    </div>
  );
  };