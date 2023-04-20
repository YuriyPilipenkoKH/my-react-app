import PropTypes from 'prop-types';
import { Item } from './StatList.syled.jsx';

function randomColor() {
   
  return  ('#'+ Math.floor(Math.random()*16777215).toString(16))
}   ;


export const StatList = ({id, label, percentage}) => {
    return (
        <>
        <Item className="item" style= {{backgroundColor: randomColor() }}>
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