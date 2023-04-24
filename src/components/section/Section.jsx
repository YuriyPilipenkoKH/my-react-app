import PropTypes from 'prop-types'
import { Title } from '../Title/Title'


export const Section = (props) => {
    console.log(props);
   return (
   <section className='section'>
    <Title text={props.title}></Title>

    </section>)
}