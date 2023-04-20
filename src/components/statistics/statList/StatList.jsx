import PropTypes from 'prop-types';
import { Item } from './StatList.syled.jsx';

export const StatList = ({id, label, percentage}) => {
    return (
        <>
        <Item className="item" >
        <span className="label" >{label}</span>
        <span className="percentage">{percentage}%</span>
        </Item>
        </>
     
    );
}

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};