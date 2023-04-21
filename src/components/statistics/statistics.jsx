import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'
import {Statistic} from './statistics.styled.jsx'

export const Statistics = ({statistics, title, children}) => {
  // const { id , label, percentage} = statistics
// console.log(statistics);
  return (
   <Statistic>
    {title && <Title >{title}</Title>}
    <StatList data= {statistics}></StatList>
   </Statistic>
  )
}


// export const Statistics = ({statistics, title, children}) => {
//     const { id , label, percentage} = statistics
//     return (
//       <Statistic className="statistics" key={id}>
//         {title && <Title >{title}</Title>}
//         <ul className="stat-list">
//           {statistics.map(({ id, label, percentage }) => (
//               <StatList
//                   key={id}
//                   label={label}
//                   percentage={percentage} />
//           ))}
//         </ul>
//       </Statistic>
//     );
    
// };



// Statistics.propTypes = {
//   title: PropTypes.string,
//   statistics: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };