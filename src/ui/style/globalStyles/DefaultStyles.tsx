import { createGlobalStyle } from 'styled-components';

// import Varela_Round from './fontFamilies/Varela_Round/varelaRound-Regular.ttf';

export default createGlobalStyle`
    a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
    }
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        margin-top: 0;
        margin-bottom: 0;
    }
`;