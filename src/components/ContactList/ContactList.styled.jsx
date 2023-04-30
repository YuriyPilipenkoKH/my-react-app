import styled from 'styled-components'; 

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

`
export const List  =styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LItem = styled.li`
    width: 400px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    >span {
        background-color: var(--lauren);
        padding: 8px 12px;
        border-radius: 4px;

}
`