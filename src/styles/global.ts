import { createGlobalStyle } from 'styled-components'

export const theme = {
  colours: {
    primary: '#0c5a71',
    secondary: '#90c6e7',
    background: '#045a72'
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1440px'
  },
  spacing: {
    '2': '0.125rem',
    '4': '0.25rem',
    '14': '0.875rem',
    '16': '1rem',
    '18': '1.125rem',
    '20': '1.25rem',
    '21': '1.3125rem',
    '24': '1.5rem',
    '25': '1.5625rem',
    '30': '1.875rem',
    '32': '2rem',
    '250': '15.625rem',
    '300': '18.75rem',
    '320': '20rem',
    '720': '45rem'
  }
}

export const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100vh;
    }

    #__next {
        overflow-y: auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: ${theme.colours.background};
        color: white;
        width: 100%;
        min-height: 100%;
        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing['16']};
    }

    a,
    a:hover,
    a:visited {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        color: ${theme.colours.primary};
    }
`
