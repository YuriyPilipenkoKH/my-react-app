import styled from 'styled-components';

export const Wrapper = styled.div`
    
width: 280px;
padding: 10px;
background-color: var(--beige);
border-radius: 16px;

/* box-shadow:inset 0px 0px 0px 10px #555; */

 &>div{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 3px;
    border: 4px solid #555;
    border-radius: 12px;

    &>span, p{
    width: 100%;
    text-align: center;
    padding: 20px 12px;
    /* background-color:var(--green); */
    background-color: ${props => props.color};
    color: #eee;
    font-size: 20px;
    font-weight: 600;
    border-radius: 6px 6px 0 0 ;
 }

   &>p{
    border-radius:0 0 6px 6px  ;
    font-size: 16px;
   }
 }
`
export const TabWrapper =({stat}) => {
    return <Wrapper stat = {stat}></Wrapper>
}