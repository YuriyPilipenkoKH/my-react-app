import user from '../data/user.json'
import statistics from '../data/statistics.json';
import { Profile } from '../components/profile/Profile'
import { Statistics } from '../components/statistics/statistics'



export const App = () => {

  return (
    <div>
      <Profile user={user}></Profile>
      <Statistics statistics={statistics} title=""></Statistics>
    </div>
  );
  };