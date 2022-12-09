import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AppHeader() {
    return (
        <HeaderWrapper>
            <Title><Link to='/'>Ice and fire</Link></Title>
            <Nav>
                <Menu>
                    <NavItem><Link to='/characters/'>Characters</Link></NavItem>
                    <NavItem><Link to='/books/'>Books</Link></NavItem>
                    <NavItem><Link to='/houses/'>Houses</Link></NavItem>
                </Menu>
            </Nav>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Nav = styled.nav`
    width: 256px;
`
const Menu = styled.ul`
    padding-left: 0;
    display: flex;
    justify-content: space-between;
`
const NavItem = styled.li`
    list-style-type: none;
    a {
        color: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        text-decoration: none;
    }
`
const Title = styled.h1`
    font-size: 24px;
    a {
        color: #fff;
        text-decoration: none;
    }
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export default AppHeader