import PropTypes from 'prop-types'

export const FeedbackOptions = ({state} ) => {
   console.log(state);
   return  (
   <div className='feedback_options'>
    <button className='btn' type='button'>Goog</button>
    <button className='btn' type='button'>Neutral</button>
    <button className='btn' type='button'>Bad</button>
   </div>
   )
}

//  FeedbackOptions.propTypes = {
 
// }
