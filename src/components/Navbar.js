import React from 'react';
import styled, { css } from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const Nav = styled.nav`
    heigth: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #222831;
`;

const NavLink = css`
    color: #fff;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #f05454;
    }
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-size: 18px;
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
    }
`;

const NavMenu = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavBtn = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const Navbar = () => {

    return (
        <Nav>
            <Logo to="/">Matheo.fr</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Me contacter</Button>
            </NavBtn>
        </Nav>
    )

}

export default Navbar;