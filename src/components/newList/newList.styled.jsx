import styled from "styled-components";

export const NListItem = styled.li`
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

  &.deleted {
    transform: translateX(200px);
    opacity: 0;
    transition: all 0.5s;
  }
`;