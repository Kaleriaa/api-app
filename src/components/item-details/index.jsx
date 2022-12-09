import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from 'prop-types'

function ItemDetails({ getId, getItem, children}) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const onLoading = (items) => {
        setLoading(false)
        setData(items)
    }
    const onUpdateItem = () => {
        getItem(getId)
            .then((item) => { onLoading(item) })
    }
    useEffect(() => onUpdateItem(), [getId])
    const { name } = data
    return (
        <ItemDetailsCard>
            <Label>{name}</Label>
            {
                React.Children.map(children, (child) => {
                    return React.cloneElement(child, {data})
                })
            }
        </ItemDetailsCard>
    )
}

ItemDetails.propTypes = {
    getItem: PropTypes.func,
    getId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

const ItemDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    min-width: 410px;
    max-width: 600px;
    min-height: 260px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 1px rgba(37, 37, 37, 0.2);
    border-radius: 7px;
    padding: 15px 10px 30px 10px;
`
const Label = styled.h2`
    font-size: 17px;
    margin-top: 5px;
    margin-bottom: 6px;
`

export default React.memo(ItemDetails)