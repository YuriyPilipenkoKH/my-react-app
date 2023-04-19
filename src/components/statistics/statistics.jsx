import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'


export const Statistics = ({statistics, title, children}) => {
    const { id , label, percentage} = statistics
    return (
      <section className="statistics" key={id}>
        {title && <Title >{title}</Title>}
        <ul className="stat-list">
          {statistics.map(({ id, label, percentage }) => (
              <StatList
                  key={id}
                  label={label}
                  percentage={percentage} />
          ))}
        </ul>
      </section>
    );
    
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};