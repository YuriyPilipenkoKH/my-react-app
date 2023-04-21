import styled from '@emotion/styled';
import { randomColor } from 'utils/randomColor';

export const StItem = styled.li`
  width: 100%;
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  border-right: 1px solid #000 ;
  /* background-color: ${randomColor()}; */

  :first-of-type {
    border-radius: 0 0 0 8px ;
  }
  
  :last-child {
  border-right: none;
  border-radius: 0 0 8px 0 ;
  }


`
export const StLabel = styled.span`
    font-weight: 500;
`
export const StPercentage = styled.span`
    font-weight: 700;
`
