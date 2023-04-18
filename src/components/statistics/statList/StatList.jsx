import PropTypes from 'prop-types';


export const StatList = ({id, label, percentage}) => {
    return (
      <li className="item" id={id}>
        <span className="label" label={label}>
          {label}
        </span>
        <span className="percentage" percentage={percentage}>
          {percentage}
        %</span>
      </li>
    );
}

StatList.propTypes ={
  
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};