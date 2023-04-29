// import PropTypes from 'prop-types'
import { Component } from 'react';


export class FormOne extends Component {
    state = {
        value: '',
    };

    handleChange=(e)=> {

        if(e.target.value.length <= 5) {
            this.setState({value: e.target.value})
        }
    }

    render() {
        const {value} = this.state
        console.log('state',this.state);
      return  (
            <input
             type="text"
             value={value} 
             onChange={this.handleChange}
             ></input>
        )
    }

}