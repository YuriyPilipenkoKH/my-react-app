import PropTypes from 'prop-types'  
import css from './Event.module.css'
import { FaMapMarkerAlt, FaUserAlt, FaUserTie, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FcCalendar, FcClock } from 'react-icons/fc';
// import {formatEventStart } from 'utils/formatEventStart' 
// import {formatEventDuration} from 'utils/formatEventDuration'

import {formatEventStart, formatEventDuration} from 'utils'
import { iconSize } from "constants";
import { Card, EventName, Info, Chip } from './Event.styled';


export const Event = ({name,location,speaker,type,start,end}) => {

    const fomatedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)

    // console.log(css);
    // console.log(css[type]);

    return (
    <Card >
        <EventName >{name}</EventName>
        <Info >
            <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
            {location}</Info>
        <Info > 
             <FaUserTie className={[css.icon, css.user ].join(' ')}  size={iconSize.sm}/>
            {speaker}</Info>
        <Info >
             <FcCalendar className={css.icon} size={iconSize.sm}/>
            {fomatedStart}</Info>
        <Info >
             <FcClock className={css.icon} size={iconSize.sm}/>
            {duration}</Info>
            <Chip type={type}>{type}</Chip>

    </Card>)
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}