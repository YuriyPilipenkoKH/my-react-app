
import { Butt } from "./buttons.styled"; 

 const Button = ({type, id, className, ripple , onClick, style, children}) => {
	
		return (
			<Butt
			 type= 'button'
			 id ={id}
			 className ='btn ripple' 
			 data-ripple ={ripple}
			 onClick ={onClick}
			 style= {style}
			 >
			   {children}</Butt>
		)
	}


export default Button



