import PropTypes from 'prop-types';


export const StatList = ({id, label, percentage}) => {
    return (
      <li className="item" >
        <span className="label" >{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
    );
}

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};