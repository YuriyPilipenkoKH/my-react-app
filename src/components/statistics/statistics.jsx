import PropTypes from 'prop-types';
import {Title} from './title/Title'
import { StatList } from './statList/StatList'
import {Statistic} from './statistics.styled.jsx'

export const Statistics = ({statistics, title, children}) => {

  return (
   <Statistic>
    {title && <Title >{title}</Title>}
    <StatList data= {statistics}></StatList>
   </Statistic>
  )
}

