import PropTypes from 'prop-types';
import css from './eventBoard.module.css'

export const EventBoard = ({ events }) => {
    console.log(events);
    return <div className={css.eventBoard}>eventCards</div>
}

EventBoard.propType = {
    
};