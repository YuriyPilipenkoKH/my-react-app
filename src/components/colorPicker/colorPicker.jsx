import PropTypes from 'prop-types'
import s from './colorPicker.module.css'

export const ColorPicker = ({options}) => {
   console.log(options);

return   (<div className="ColorPicker">
        <h2 className={s.ColorPicker__title}>COLOR PICKER</h2>
        <div >
            {options.map(({label, color}) => (
                <span
                key={label}
                className={s.ColorPicker__option}
                style={{backgroundColor: color}}
                ></span>
            ))}
        </div>
    </div>)
}