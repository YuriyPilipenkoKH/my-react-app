import React from 'react';
import { iconReactJSSpinner } from '../../../utils/svgIcons';

// const CustomSpinner = ({ color }) => (
//   <svg
//     width="40"
//     height="40"
//     viewBox="0 0 40 40"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle
//       cx="20"
//       cy="20"
//       r="18"
//       stroke={color}
//       strokeWidth="4"
//       fill="none"
//       strokeLinecap="round"
//     />
//   </svg>
// );

const LoadingSpinner = ({ size = 40, color = '#007bff' }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className='.loading-spinner'>
    {iconReactJSSpinner}
    </div>

  </div>
);

export default LoadingSpinner;