import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 15px 20px;
   align-items: center;
   border-bottom: 1px solid #cccccc;  
`

export const Title = styled.p`
   font-size: 18px;
   font-weight: bold;
`

export const SearchInput = styled.input`
    border-radius: 30px;
    min-width: 200px;
    padding: 10px 20px;
    border: none;
    background: #e7e7e7;
    height: 25px;
`

export const AddBtn = styled.button`
    padding: 8px;
    background: #f9f9f9;
    border: 1px solid #cdcdcd;
    margin-left: 25px;
    
    :hover {
        background: #e0e0e0;
        cursor: pointer;
    }
`

export const LeftContainer = styled.div`
  display: flex;
   align-items: center;
`