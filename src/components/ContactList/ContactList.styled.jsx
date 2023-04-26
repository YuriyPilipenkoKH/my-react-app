import styled from 'styled-components';
import baseLiStyles from '../ContactForm/ContactForm.styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: disc;


  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;
 

`;

export const ListItem = styled.li`


  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 10px;  
  list-style-type: disc;


  /* position: absolute;
	height: 100vh;
	width: 100%;
	top: 0;
	left: 0;
	padding: 1rem; */
`;

export const ItemCard = styled.span`
  display: flex;
  align-items: center;
  

  height: 40px;
  border-radius: 10px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);
  /* border: 3px solid var(--teal); */
  box-shadow: var(--shadow-four);    
`

export const ContactContainer = styled.div`
  position: relative;
  width: 550px;
  max-height: 280px;
  padding: 4px 20px;
  border: 3px solid var(--teal);
  border-radius: 10px;
  box-shadow: var(--shadow-four);
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
}
`;

export const BtnDelete = styled.button`
   ${baseLiStyles};
   justify-content: center;
   width: 110px;
   cursor: pointer;
    transition: all 0.4s;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: #fbf7f3;
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
  }
`
