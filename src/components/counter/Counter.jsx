import React from "react";
import s from './Counter.module.css'

class Counter extends React.Component {
 state = {
    value: 5,
 }

 handleIncrement =() => {
    
 }
 
 render() {
    return (
        <div className="Counter">
            <span className="Counter__value">
                {this.state.value}
            </span>

            <div className="Counter__controls">
                <button type="button" onClick={this.handleIncrement}></button>
            </div>
        </div>
    )
 }

}