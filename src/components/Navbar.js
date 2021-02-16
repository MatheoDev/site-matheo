import React from 'react';
import styled from 'styled-components';
import {info} from '../data/info';
import Skills from '../components/Skills';
import {skills} from '../data/skills';

const Nav = styled.nav`
    width: 350px;
    height: 100vh;
    background: rgb(45,49,57);
    color: white;
`

const HeaderNav = styled.div`
    display: grid;
    grid-gap: 15px;
    justify-content: center;
    padding: 40px 50px;
    background: #383d47;
    text-align: center;
`

const HeaderImg = styled.img`
    width: 80px;
    border-radius: 50%;
    margin: 0 auto;
`

const Name = styled.h1`
    font-size: 1em;
`

const Job = styled.p`
    font-size: 0.9em;
    color: #cccccc;
`

const InfoNav = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 30px 0;
`

const ListeInfo = styled.ul`
    list-style: none;
    font-weight: 400;
    line-height: 1.15em;
    
    > li {
        display: flex;
        justify-content: space-between;
        font-size: 0.85em;

        .item { font-weight: 600; }
        .item-value { color: #cccccc; }
    }
`


const Navbar = () => {
    return(
        <Nav>
            <HeaderNav>
                <HeaderImg src={info.img} />
                <div>
                    <Name>{info.name}</Name>
                    <Job>{info.job}</Job>
                </div>
            </HeaderNav>
            <InfoNav>
                <ListeInfo>
                    <li><span className="item">Ville :</span><span className="item-value">{info.city}</span></li>
                    <li><span className="item">Age :</span><span className="item-value">{info.age}</span></li>
                    <li><span className="item">Email :</span><span className="item-value">{info.email}</span></li>
                </ListeInfo>
            </InfoNav>
            <Skills skills={skills} />
        </Nav>
    )
}

export default Navbar;