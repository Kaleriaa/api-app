import React, { useEffect, useState } from 'react'
import LoadingBalls from '../loading-balls'
import ErrorMessage from '../error-message'
import ItemIdFromUrl from '../../lib/item-url'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function ItemList({ onItemSelected, getData, renderContent }) {
    const [itemsList, setItemList] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const onLoadingList = (items) => {
        setItemList(items)
        setLoading(false)
    }
    const updateItemList = () => {
        getData()
            .then((item) => { onLoadingList(item) })
            .catch(() => { setError(true) })
    }
    useEffect(() => { updateItemList() }, [])
    return (
        <ItemListCard>
            {loading && <LoadingBalls />}
            {error && <ErrorMessage />}
            {!(loading || error) && itemsList.map((item) => {
                const { url } = item
                const label = renderContent(item)
                return (
                    <ItemName key={url}
                        onClick={() => onItemSelected(ItemIdFromUrl(url))}>
                        {label}
                    </ItemName>
                )
            })}
        </ItemListCard>
    )
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    getId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    getData: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ])
}

const ItemName = styled.span`
    cursor: pointer;
    font-size: 15px;
    color: #8f8f8f;
    font-weight: 400;
`
const ItemListCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    width: 350px;
    min-height: 350px;
    background-color: #fff;
    box-shadow: 2px 2px 2px 1px rgba(37, 37, 37, 0.2);
    border-radius: 7px;
    padding: 15px 15px 20px 25px;
`

export default ItemList