import styled from "styled-components";

export const MBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0008;

`
export const MContent = styled.div`
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 300px;
    min-width: 600px;
    width: 100px;
    padding: 12px;
    background-color: #fff;
    
`