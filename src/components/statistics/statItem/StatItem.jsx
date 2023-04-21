import PropTypes from 'prop-types';
import { StItem, StLabel, StPercentage } from './StatItem.styled';
import { randomColor } from 'utils/randomColor';


export const StatItem = ({id , label, percentage} ) => {
    return (
    <StItem className="st-item"  style= {{backgroundColor: randomColor() }}>
      <StLabel className="st-label">{label}</StLabel>
      <StPercentage className="st-percentage">{percentage}%</StPercentage>
    </StItem>
    )
}
StatItem.propTypes = {
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
}

