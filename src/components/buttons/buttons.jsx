
// import { Butt } from "./buttons.styled"; 

 const Button = ({type, id, className, ripple , onClick, style, children}) => {
	

		return (
			<button
			 type= 'button'
			 id ={id}
			 className ='btn ripple' 
			 data-ripple ={ripple}
			 onClick ={onClick}
			 style= {style}
			 >
			   {children}</button>
		)
	}


export default Button



