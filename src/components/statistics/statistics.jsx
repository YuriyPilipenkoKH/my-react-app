import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'


export const Statistics = ({statistics, title}) => {
    const { id , label, percentage} = statistics
    return (
      <section className="statistics" key={id}>
        {title && <h2 className="title">{title}</h2>}
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