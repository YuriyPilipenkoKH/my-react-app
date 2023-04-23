import React from "react";
import s from './Counter.module.css'

class Counter extends React.Component {
 state = {
    value: 0,
 }

 handleIncrement =() => {
    this.setState(prevState => ({
        value: prevState.value + 1,
    }))
 }
 
 handleDecrement =() => {
    this.setState(prevState => ({
        value: prevState.value - 1,
    }))
 }

 clearAll= () => {
    this.setState(prevState => ({
        value: prevState.value = 0,
    }))
 }
 
 render() {
    return (
        <div className={s.Counter}>
            <span className={s.Counter__value}>
                {this.state.value}
            </span>

            <div className={s.Counter__controls}>
                <button type="button" onClick={this.handleIncrement}>+1</button>
                <button type="button" onClick={this.handleDecrement}>-1</button>
            </div>

            <button className={s.clear__btn} onClick={this.clearAll}>clear</button>
        </div>
    )
 }

}
export default Counter