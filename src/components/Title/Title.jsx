import PropTypes from 'prop-types'
import s from './Title.module.css'

export const Title = ({text} ) => {

return ( <h1 className={s.mainTitle}>{text} </h1>)
}

Title.propTypes = {
    text:PropTypes.string.isRequired,
}