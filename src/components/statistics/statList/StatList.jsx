import PropTypes from 'prop-types';
import { StatItem } from '../statItem/StatItem';
import { List } from './StatList.syled';



export const StatList = ({data}) => {

    return (
      <List className="stat-list">
      {data.map(({ id , label, percentage}) => (
       <StatItem
       key={id}
       label= {label}
       percentage= {percentage}
       ></StatItem>
      ))}
       </List>
    )
}




StatList.propTypes = {
  data:arrayOf(
    PropTypes.exact({
      // label: PropTypes.string.isRequired,
        // percentage: PropTypes.number.isRequired,
    })
  )
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
};