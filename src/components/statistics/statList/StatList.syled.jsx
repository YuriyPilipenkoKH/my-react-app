import styled from '@emotion/styled';

let randomColor = Math.floor(Math.random()*16777215).toString(16);

export const Item = styled.li`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-right: 1px solid #999 ;
  background-color: #${randomColor} ;
`