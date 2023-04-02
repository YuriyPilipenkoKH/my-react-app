import styled from "@emotion/styled";

export const Card  = styled.div`
    position: relative;
    border: 2px solid orange ;
    padding: 8px;
    border-radius:8px;
    display: flex;
    flex-direction: column;
    gap:8px;
    background-color: #fbe3ce;
`;

export const EventName = styled.h2`
    margin-top: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    height: 20px;
`; 

export const Info = styled.p`
    display: flex;
    gap:8px; 
    align-items: center;
    margin: 0;
    color: var(--color-primary-text);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
    height: 20px;
`;

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${props => {
    switch (props.type) {
      case 'free':
        return 'var(--color-green)';
      case 'paid':
        return 'var(--color-blue)';
      case 'vip':
        return 'var(--color-red)';
      default:
        return 'black';
    }
  }};
`;