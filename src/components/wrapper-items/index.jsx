import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const WrapperBlock = ({ list, details }) => {
    return (
        <WrapperItem>
            {list}
            {details}
        </WrapperItem>
    )
}

WrapperBlock.propTypes = {
    list: PropTypes.node,
    details: PropTypes.node
}

const WrapperItem = styled.div`
	display: flex;
	justify-content: space-between;
    gap: 35px;
	align-items: flex-start;
`

export default WrapperBlock