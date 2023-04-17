
import { format, formatDistanceStrict } from 'date-fns';
import { PageTitle } from 'components/page_title/pageTitle';
import { EventBoard } from 'components/event_board/eventBoard';
import ev from '../../upcoming-events.json';

export const App = () => {
    return (
      <div><PageTitle text="24th Core worrld coalition conference" />
        <EventBoard events={ev} />
      
      </div>
    );
  };