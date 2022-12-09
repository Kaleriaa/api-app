import React from "react";
import styled from "styled-components";
import FireIcon from "./fire-icon";

const ErrorBlock = () => {
    return (
        <>
            <FireIcon />
            <ErrorMessage>Something went wrong</ErrorMessage>
        </>
    )
}
const ErrorMessage = styled.span`
    font-size: 14px;
`

export default ErrorBlock