import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.baseText};
    }

    body, input, text-area, button {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --yellow: #DBAC2C;
        --yellowDark: #C47F17;
        --yellowLight: #F1E9C9;
        --purple: #8047F8;
        --purpleDark: #4B2995;
        --purpleLight: #EBE5F9;

        --baseTitle: #272221;
        --baseSubtitle: #403937;
        --baseText: #574F4D;
        --baseLabel: #8D8686;
        --baseHover: #D7D5D5;
        --baseButton: #E6E5E5;
        --baseInput: #EDEDED;
        --baseCard: #F3F2F2;
        --background: #FAFAFA;
        --white: #FFFFFF;

        --warning: #EF3E36;
    }

`