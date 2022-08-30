import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #4142428c;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PersonCard = styled.div`
    width: 400px;
    background: white;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    background: #e8e8e7;
    border-bottom: 1px solid #cdcdcd;
`

export const CardHeaderTitle = styled.div`
   font-weight: bold;
`

export const CloseIcon = styled.div`
    color: #707070;
    font-weight: bold;
    cursor: pointer; 
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const CardFooter = styled.div`
    padding: 25px;
    background: #e8e8e7;
    border-top: 1px solid #cdcdcd;
`
