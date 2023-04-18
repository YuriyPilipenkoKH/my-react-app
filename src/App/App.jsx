import user from '../data/user.json'
import { Profile } from '../components/profile/Profile'



export const App = () => {

    return (
      <div>
        <Profile user={user}>
       
        </Profile>
      </div>
    );
  };