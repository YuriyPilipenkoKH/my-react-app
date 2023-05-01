
// import { Butt } from "./buttons.styled"; 
import { Btns } from "../ContactList/ContactList.styled";

export const Button1 = ({type, id, className, ripple , onClick, style, children}) => {
	

		return (
			<Btns
			 type= 'button'
			 id ={id}
			 className ='btn ripple' 
			 data-ripple ={ripple}
			 onClick ={onClick}
			 style= {style}
			 ><div className="ripple2"></div>
			   {children}</Btns>
		)
	}






