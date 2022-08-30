import styled from "styled-components";

export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0 20px;
`

export const Name = styled.div`
    font-weight: bold;
    margin: 15px 0 10px;
`

export const Phone = styled.div`
    color: #30cf2e;
`

export const AdditionalInfo = styled.div`
    border-top: 1px solid #cdcdcd;
    padding-top: 20px;
`

export const PairProperty = styled.div`
  display: flex; 
  margin: 10px 0; 
`

export const Key = styled.div`
    color: #707070;
`

export const Value = styled.div`
    margin-left: 20px;
    color: #c4c4c4;;

`

export const DeleteBtn = styled.button`
    padding: 8px;
    background: #f9f9f9;
    border: 1px solid #cdcdcd;
    
    :hover {
        background: #e0e0e0;
        cursor: pointer;
    }
`