import PropTypes from 'prop-types';

export const Title = ({title, children}) => {
    console.log(children);
    return (
        <h2 className="title">{children}</h2>
    );
    
   
}