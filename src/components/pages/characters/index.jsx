import React, { useState } from "react"
import ItemDetails from '../../item-details'
import ItemList from '../../item-list'
import IaFService from '../../../services/IaFService'
import WrapperBlock from "../../wrapper-items"
import Field from "../../item-details/fileds"

function CharacterPage() {
    const gotservice = new IaFService()
    const [charId, setCharId] = useState(160)
    const onCharSelected = (id) => {
        setCharId(id)
    }
    const list = (
        <ItemList
            onItemSelected={onCharSelected}
            getData={gotservice.getAllCharacters}
            renderContent={({ name, gender }) => `${name} (${gender})`} />
    )
    const details = (
        <ItemDetails
            getId={charId}
            getItem={gotservice.getCharacter}>
            <Field label='Gender' value='gender' />
            <Field label='Born' value='born' />
            <Field label='Died' value='died' />
            <Field label='Culture' value='culture' />
        </ItemDetails>
    )
    return (
        <WrapperBlock list={list} details={details} />
    )
}

export default CharacterPage