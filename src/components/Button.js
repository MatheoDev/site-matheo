import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#f05454' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 5px;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '000d1a')};
    font-sier: ${({big}) => (big ? '20px' : '14px')};
    -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
            box-shadow: 0 8px 6px -6px black;

    &:hover {
        transform: translateY(-2px);
    }
`;