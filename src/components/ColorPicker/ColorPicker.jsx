import { useState } from "react";
import { colorPickerOptions } from "./options";
import s from './ColorPicker.module.css'

export default function ColorPicker() {
const [activeOptionIdx, setActiveOptionIdx] = useState(0)
const {label}  = colorPickerOptions[activeOptionIdx]
    
const makeOptiomClassName = idx => {
    return idx === activeOptionIdx
    ?  s.activeOption
    :  s.option
}

  return (
    <div>
        <h2>Picker</h2>
        <p>chosen color {label}</p>
        <div>
            {colorPickerOptions.map(({label, color}, index) => (
                <button
                key = {label}
                className={makeOptiomClassName(index)}
                style = {{backgroundColor: color}}
                onClick={() => setActiveOptionIdx(index)}
                ></button>
            ))}
        </div>
      
    </div>
  )
}


