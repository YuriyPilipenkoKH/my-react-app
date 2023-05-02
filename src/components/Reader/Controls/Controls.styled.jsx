import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-color: #29f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: #2da;
    color: #444;
  }

  &:active {
    transform: scale(0.98);
  }



  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }

  &:disabled {
    background-color: #888;
    color: #fff;
    cursor: none;

    &:after {
        transition: none;
    }
  }
`;

export const Csection = styled.section`
    
    display: flex;
    gap: 10px;
`