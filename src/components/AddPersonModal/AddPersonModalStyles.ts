import styled from "styled-components";

export const AddBtn = styled.button`
    padding: 8px;
    background: #f9f9f9;
    border: 1px solid #cdcdcd;
    
    :hover {
        background: #e0e0e0;
        cursor: pointer;
    }
`

export const Input = styled.input<{hasError: boolean}>`
    padding: 7px 15px;
    min-width: 200px;
    border: 1px solid ${p => p.hasError ? "red" : "#c8c8c8"};
    border-radius: 20px;
`

export const PropertyContainer = styled.div`
    margin: 10px;
`

export const Label = styled.div`
    padding: 5px 10px;
`