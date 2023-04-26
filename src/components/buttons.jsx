import React from "react";
import { Butt } from "./buttons.styled";

 const Button = ({type, id, className, ripple , onClick, style, children}) => {

    return (
        <Butt
         type={type ? type : 'button'}
         id ={id}
         className = {`btn  ${className ? className : ""}`}
         data-ripple ={ripple}
         onClick ={onClick}
         style= {style}
         >
           {children}</Butt>
    )
}
export default Button