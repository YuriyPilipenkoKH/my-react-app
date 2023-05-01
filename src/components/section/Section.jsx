import PropTypes from 'prop-types'
import { Title } from '../Title/Title'
import { Sect } from './Section.styled'


export const Section = ({ title, children }) => {
   return (
   <Sect className='section'>
    <Title text={title}></Title>
    {children}  
    </Sect>)
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,

  };
  