import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body {
        overflow-x: hidden; 
        background-color: rgba(37,45,64,255);
    }

    h1 {
        color: #f9f9fa;
        font-weight: 300;
    }
    
    h2 {
        color: #f9f9fa;
        font-weight: 300;
    }

    a, p {
        color: #6d727a;
        font-weight: 400;
    }
`;

export default GlobalStyle;