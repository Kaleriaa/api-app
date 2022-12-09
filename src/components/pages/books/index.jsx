import React, { useEffect } from "react"
import ItemList from '../../item-list'
import IaFService from '../../../services/IaFService'
import { useNavigate } from 'react-router-dom';

function BookPage() {
    const service = new IaFService()
    let navigate = useNavigate()

    return (
        <ItemList
            onItemSelected={(bookId) => {
                navigate(`${bookId}`)
            }}
            getData={service.getAllBooks}
            renderContent={
                ({ name, released }) => `${name} (${new Date(released)
                    .toLocaleString('ru',{ year: 'numeric',month: 'long', day: 'numeric'})})`}
        />
    )
}

export default BookPage