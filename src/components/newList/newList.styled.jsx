import styled from "styled-components";
import { listItemsAnimation } from "../ContactList/ContactList.styled";

export const NListItem = styled.li`
animation: ${listItemsAnimation} 0.8s ease 1 both;
    width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.5s;

  

:nth-child(2) {
animation-delay: 0.3s;
}
:nth-child(3) {
animation-delay: 0.6s;
}


  &.deleted {
    transform: translateX(200px);
    opacity: 0;
    transition: all 0.5s;
  }
`;