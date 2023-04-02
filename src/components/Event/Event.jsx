import PropTypes from 'prop-types'  
import css from './Event.module.css'
import { FaMapMarkerAlt, FaUserAlt, FaUserTie, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FcCalendar, FcClock } from 'react-icons/fc';
// import {formatEventStart } from 'utils/formatEventStart'
// import {formatEventDuration} from 'utils/formatEventDuration'

import {formatEventStart, formatEventDuration} from 'utils'


export const Event = ({name,location,speaker,type,start,end}) => {

    const fomatedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)

    return (
    <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
            <FaMapMarkerAlt className={css.icon} size={16}/>
            {location}</p>
        <p className={css.info}> 
             <FaUserTie className={[css.icon, css.user ].join(' ')}  size={16}/>
            {speaker}</p>
        <p className={css.info}>
             <FcCalendar className={css.icon} size={16}/>
            {fomatedStart}</p>
        <p className={css.info}>
             <FcClock className={css.icon} size={16}/>
            {duration}</p>

    </div>)
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}