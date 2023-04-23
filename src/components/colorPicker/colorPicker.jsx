import React , {Component} from 'react';
import PropTypes from 'prop-types'
import s from './colorPicker.module.css'

class ColorPicker extends Component {

    state = {
        activeOptionIdx: 1,  
    }

    makeOptionClassName =(idx) => {
        const optionClasses = ['ColorPicker__option'] 

        if(idx === this.state.activeOptionIdx ) {
            optionClasses.push('ColorPicker__option-active')
        }
        return optionClasses.join(' ')
     }

    render () {
        return   (<div className="ColorPicker">
        <h2 className={s.ColorPicker__title}>COLOR PICKER</h2>
        <div className={s.wrapper}>
            {this.props.options.map(({label, color}, idx) => {
                const optionClassName = this.makeOptionClassName(idx)

                return (
                <button
                key={label}
                className={optionClassName}
                style={{
                    backgroundColor: color,
                }}
                ></button>                    
                )
            })}
        </div>
    </div>)

    }
}

export default ColorPicker