import { useState } from "react";
import { colorPickerOptions } from "./options";
import s from './ColorPicker.module.css'

export default function ColorPicker({setColor}) {

const [activeOptionIdx, setActiveOptionIdx] = useState(0)
// const [activeColor, setActiveColor] = useState(0)
const {label}  = colorPickerOptions[activeOptionIdx]

const clickHandler = (color) => {
    // console.log('clickHandler', color);
    setColor(color)
}
    
const makeOptiomClassName = (idx) => {

    return idx === activeOptionIdx
    ?  s.activeOption
    :  s.option
}

  return (
    <div>
        <h2>Picker</h2>
        <p>chosen color {label }</p>
        <div>
            {colorPickerOptions.map(({label, color}, index) => (
                <button
                key = {label}
                className={makeOptiomClassName(index)}
                style = {{backgroundColor: color}}
                onClick={() => {
                    setActiveOptionIdx(index)
                    clickHandler(color)
                }}
                ></button>
            ))}
       
        </div>
      
    </div>
  )
}


