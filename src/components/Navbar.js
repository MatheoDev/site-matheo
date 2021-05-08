import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav`
    width: 80vw;
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navmenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
`

const Navitem = styled(NavLink)`
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        color: #f9f9fa;
    }
`

const Btn = styled(NavLink)`
    text-decoration: none;
    background-color: rgba(106,105,245,255);
    color: #f9f9fa;
    padding: 15px 20px;
    border-radius: 15px;
    transition: all 0.5s ease;
    &:hover {
        background-color: rgba(106,105,245,0.7);
    }
`

const Navbar = () => {
    return(
        <Nav>
            <h1>Mathéo</h1>
            <Navmenu>
                <Navitem to="/">Home</Navitem>
                <Navitem to="/">A propos</Navitem>
                <Navitem to="/">Projets</Navitem>
                <Btn to="/contact">Contact</Btn>
            </Navmenu>
        </Nav>
    )
}

export default Navbar;