import PropTypes from 'prop-types';


export const StatList = ({id, label, percentage}) => {
    return (
      <ul className="stat-list " key = {id}>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    );
}

StatList.propTypes.exact({
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
});