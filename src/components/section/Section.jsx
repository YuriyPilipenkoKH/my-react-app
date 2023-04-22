import PropTypes from 'prop-types'
import { Title } from '../Title/Title'


export const Section = ({title}) => {

   return (
   <section className='section'>
    <Title text={title}></Title>

    </section>)
}