import React from 'react'
import styled from 'styled-components'
import { Line, FieldWrapper, FieldContent, FieldLabel} from '../cards-style'

const Field = ({label, value, data}) => {
    return (
        <>
            <Line />
            <FieldWrapper>
                <FieldLabel>{label}</FieldLabel>
                <AlignItem>
                    <FieldContent>{data[value] || '...'}</FieldContent>
                </AlignItem>
            </FieldWrapper>
        </>
    )
}
const AlignItem = styled.div`
    display: flex;
    width: 60%;
    justify-content: flex-end;
`
export default Field