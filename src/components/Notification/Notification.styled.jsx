import styled from 'styled-components';

export const Wrapper = styled.div`

position: fixed;
top: 100px;
left: 50%;
transform: translateX(-50% );
z-index: 10;


width: 280px;
 padding: 8px; 
background-color: var(--beige);
border-radius: 18px;


.alert-enter {
  opacity: 0;
  transform: scale(0.9);

}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 1500ms, transform 1500ms ;
  
}


.alert-exit {
  opacity: 1;
}

.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 1500ms, transform 1500ms ;
}

 &>div{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 3px;
    border: 5px solid ;
    border-color: #777;
    border-radius: 14px;
    background-color: var(--beige);

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
