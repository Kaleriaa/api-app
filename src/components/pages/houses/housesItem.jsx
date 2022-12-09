import React from "react"
import ItemDetails from "../../item-details"
import Field from "../../item-details/fileds"
import IaFService from "../../../services/IaFService"
import { useParams } from 'react-router-dom'

const HousesItem = () => {
    const { id } = useParams()
    const service = new IaFService()

    return (
        <ItemDetails
            getId={id}
            getItem={service.getHouse}>
            <Field label='Region' value='region' />
            <Field label='Coat of Arms' value='coatOfArms' />
            <Field label='Titles' value='titles' />
            <Field label='Founded' value='founded' />
        </ItemDetails>
    )
}
export default HousesItem