import PropTypes from 'prop-types';
import css from './event.module.css';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaUserTie,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import { formatEventStart, formatEventDuration } from 'utils';

export const Event = event => {
    const { name, location, speaker, type, start, end } = event;
    
      const fomatedStart = formatEventStart(start);
      const duration = formatEventDuration(start, end);

  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserTie className={css.icon} />
        {speaker}
      </p>
      <p className={css.info}>
        <FcCalendar className={css.icon} />
        {fomatedStart}
      </p>
      <p className={css.info}>
        <FcClock className={css.icon} />
        {duration}
      </p>
      <span className={css.chip}> {type}</span>
    </div>
  );
};

Event.propType = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
