import React, { useEffect } from 'react';

export default function Range({ onChange }) {
  

  useEffect(() => {
    const handleInputChange = (event) => {
      if (event && event.target && event.target.value) {
        console.log(event.target.value);
        const value = event.target.value;
        onChange(value);
      }
    };

    const inputElement = document.getElementById('speed_control');
    inputElement.addEventListener('input', handleInputChange);

    return () => {
      inputElement.removeEventListener('input', handleInputChange);
    };
  }, [onChange]);

  return (
    <>
      <input id="speed_control" type="range" min="1" max="16" />
    </>
  );
}







// const fontSizeChanger = document.querySelector('#font-size-control');
// const font = document.querySelector("#text");

// fontSizeChanger.addEventListener("input", (event) => {
//     font.style.fontSize = `${event.currentTarget.value}px`;

// })