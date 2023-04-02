import PropTypes from 'prop-types'

export const Event = ({name,location,speaker,type,start,end}) => {
    return (
    <div className="event">
        <h2 className="title">rock</h2>

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