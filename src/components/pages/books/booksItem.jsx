import React from "react"
import ItemDetails from "../../item-details"
import Field from "../../item-details/fileds"
import IaFService from "../../../services/IaFService"
import { useParams } from 'react-router-dom'

const BooksItem = () => {
    let { id } = useParams();

    const service = new IaFService()
    return (
        <ItemDetails
            getId={id}
            getItem={service.getBook}>
            <Field label='Authors' value='authors' />
            <Field label='Publiser' value='publiser' />
            <Field label='Country' value='country' />
            <Field label='Number of Pages' value='numberOfPages' />
        </ItemDetails>
    )
}

export default BooksItem
