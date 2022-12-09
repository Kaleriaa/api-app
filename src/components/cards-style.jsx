import styled from "styled-components"

const Title = styled.h2`
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 10px;
`
const Line = styled.span`
    margin-top: 10px;
    margin-bottom: 15px;
    height: 2px;
    width: 90%;
    background-color: #e4e2e2;
`
const FieldContent = styled.span`
    font-size: 14px;
    color: #8f8f8f; 
    font-weight: 400;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const FieldWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`
const FieldLabel = styled.span`
    color: #000;
    font-size: 14px;
    font-weight: 500;
`

export { Title, Line, FieldContent, FieldWrapper, FieldLabel }