import React, {Component} from "react";
import { MBackdrop, MContent } from "./Modal.styled";
import { createPortal } from "react-dom";


const modalRoot = document.querySelector('#modal-root')


export default class Modal extends Component {

    
    componentDidMount() {
        // console.log('componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown =(e) =>{
        if(e.code === 'Escape') {
            console.log('test');
            this.props.onClose()
           
        }
    }  

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }  

  render() {
    return createPortal(
        <MBackdrop className="Modal__backdrop">
        <MContent className="Modal__content">{this.props.children}</MContent>
        </MBackdrop> ,
         modalRoot ,  )
     
    
  }
}
