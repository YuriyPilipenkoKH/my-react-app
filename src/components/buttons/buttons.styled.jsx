import styled from 'styled-components';

export const Butt = styled.button`
    position: relative;
    overflow: hidden;
   
    display: flex;
    align-items: center;
    gap: 15px;

    font-family: inherit;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 36px;

    height: 50px;
    color: var(--black);
    background-color: var(--yellow);
    border:  transparent;
    border-radius: 10px;
    box-shadow: var(--shadow-four);

    cursor: pointer;
    transition: all 0.4s;

    &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    & >svg {
      fill : #eee;
    }
  }


`