import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IaFService from '../../services/IaFService'
import ErrorMessage from '../error-message'
import LoadingBalls from '../loading-balls'
import View from './view'

function RandomChar() {
    const [char, setChar] = useState({})
    const [spinner, setSpinner] = useState(true)
    const [error, setError] = useState(false)

    const onLoadingChar = (item) => {
        setChar(item)
        setSpinner(false)
    }
    const onError = () => {
        setError(true)
        setSpinner(false)
    }
    const iafService = new IaFService()
    const updateChar = () => {
        const id = Math.floor(Math.random() * 820 + 40)
        iafService.getCharacter(id)
            .then((item) => { onLoadingChar(item) })
            .catch(() => { onError() })
    }
    useEffect(() => { updateChar() }, [])

    return (
        <RandomCharCard>
            {error && <ErrorMessage />}
            {spinner && <LoadingBalls />}
            {!(spinner || error) && <View char={char} />}
        </RandomCharCard>
    )
}
const RandomCharCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    width: 350px;
    min-height: 240px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 1px rgba(37, 37, 37, 0.2);
    border-radius: 7px;
    padding: 15px 10px;
`

export default RandomChar