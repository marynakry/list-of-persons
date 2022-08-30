import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #e1e1e1;
    padding: 15px 20px;
    margin: 10px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    :hover {
       background: #e8e8e7; 
    }
`

export const Name = styled.div`
    font-weight: bold;
`

export const Organisation = styled.div`
    font-size: 12px;
    color: #676c70;
`