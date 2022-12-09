import React from "react"
import ItemList from '../../item-list'
import IaFService from '../../../services/IaFService'
import { useNavigate } from "react-router-dom"

function HousePage() {
    const service = new IaFService()
    const navigate = useNavigate()

    return (
        <ItemList
            getData={service.getAllHouses}
            onItemSelected={(itemId) => {
                navigate(`${itemId}`)
            }}
            renderContent={({ name, region }) => `${name} (${region})`} />
    )
}

export default HousePage