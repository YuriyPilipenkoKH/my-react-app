import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'


export const Statistics = ({statistics}) => {
    const {text = '', id , label, percentage} = statistics
    return (
        <section className="statistics">
            <Title text={ text}></Title>
            <StatList></StatList>
        </section>
    )
    
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};