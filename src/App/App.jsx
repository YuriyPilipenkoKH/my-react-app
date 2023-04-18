import user from '../data/user.json'
import { Profile } from '../components/profile/Profile'
import { Description } from '../components/description/Description';


export const App = () => {
  console.log(user);
    return (
      <div>
        <Profile >
          <Description user={user}></Description>
        </Profile>
      </div>
    );
  };