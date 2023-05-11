import React from 'react';
// import { iconReactJSSpinner } from '../../../utils/svgIcons';
import { ReactComponent as Spinner } from '../../../utils/ReactJS.svg';



const LoadingSpinner = ({ color }) => {

    return (
        <Spinner 
        className='spinner' 
        style={{fill: color}}
        ></Spinner>
     
    );
  };
  
export default LoadingSpinner;


    // const CustomSpinner =
    // <svg
    //   width="40"
    //   height="40"
     
    //   viewBox="0 0 40 40"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <circle
    //     cx="20"
    //     cy="20"
    //     r="18"
    //     fill={color}
    //     stroke='none'
    //     strokeWidth="4"
    //     strokeLinecap="round"
    //   />
    // </svg>
  