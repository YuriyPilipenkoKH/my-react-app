import styled from 'styled-components';

export const Mform = styled.form`
    
    display: flex;
    flex-direction: column;
    gap: 12px;

    >label {
        display: flex;
        flex-direction: column;
        gap: 4px;

        >input {
            border: transparent;
            font-size: 22px;
            border-radius: 10px;
            padding: 8px;
        }
    }
`

export const Mbtn = styled.button`
width: 160px;

 font-family: inherit;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 8px 36px;

    height: 40px;
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
  }
    

`