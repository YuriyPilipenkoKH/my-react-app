import styled, {keyframes} from 'styled-components'; 


const listItemsAnimation = keyframes`
        from {
       opacity: 0;
       transform: translateX(-5rem);
       /* margin-left: -3rem; */
    }
  
    to {
       opacity: 1;
       transform: translateX(0);
       /* margin-left: 0; */
    }
` 

// const ripple1 = keyframes`
//     0% {
//         transform: scale(0);
//     }
//     20% {
//         transform: scale(1);
//         opacity: 0.3;
//     }
//     100% {
//         transform: scale(1);
//         opacity: 0;
//     }
// ` 
    
const ripple2 = keyframes`
    0% {
        transform: scaleX(0);
    }
    20% {
        transform: scaleX(1);
        opacity: 0.3;
    }
    100% {
        transform: scaleX(1);
        opacity: 0;
    }
`

export const Btns  = styled.button`
    
    position: relative;
	font-family: inherit;
	font-size: 1rem;
	font-weight: 500;
	line-height: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	text-transform: uppercase;
	text-rendering: optimizeLegibility;
    margin: 0;

  padding: 8px 22px;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  color: var(--color-white);
  background: var(--color-indigo);
  box-shadow: var(--shadow-large);
  cursor: pointer;

  >.ripple2 {
    position: absolute;
    width: 530px;
    height: 70px;
    background-color: #FFF;
    top: -14px;
    left: -10px;
    transform: scale(0);
    opacity: 0.5;
  }


  :hover > .ripple2 {
    animation: ${ripple2} 2s;
  }
`
export const List  =styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    clear: both;
`

export const LItem = styled.li`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.deleted {
    transform: translateX(200px);
    opacity: 0;
    transition: all 0.3s;
  }

    animation: ${listItemsAnimation} 0.8s ease 1 both;

    :nth-child(2) {
    animation-delay: 0.3s;
    }
    :nth-child(3) {
    animation-delay: 0.6s;
    }
    :nth-child(4) {
    animation-delay: 0.9s;
    }

    >span {
        background-color: var(--lauren);
        padding: 8px 12px;
        border-radius: 4px;

}
`