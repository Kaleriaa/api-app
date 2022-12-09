import React from "react"
import { Title, Line, FieldContent, FieldWrapper, FieldLabel } from '../cards-style'

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char
    return (
        <>
            <Title>Random Character: {name}</Title>
            <Line />
            <FieldWrapper>
                <FieldLabel>Gender</FieldLabel>
                <FieldContent>{(gender || '...')}</FieldContent>
            </FieldWrapper>
            <Line />
            <FieldWrapper>
                <FieldLabel>Born</FieldLabel>
                <FieldContent>{(born || '...')}</FieldContent>
            </FieldWrapper>
            <Line />
            <FieldWrapper>
                <FieldLabel>Died</FieldLabel>
                <FieldContent>{(died || '...')}</FieldContent>
            </FieldWrapper>
            <Line />
            <FieldWrapper>
                <FieldLabel>Culture</FieldLabel>
                <FieldContent>{(culture || '...')}</FieldContent>
            </FieldWrapper>
        </>
    )
}

export default View