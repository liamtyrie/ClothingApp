import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


:root {
    --darkest-bg: ;
    --dark-bg: ;
    --medium-bg: ;
    --light-bg: ;
    --lightest-bg: ;

    --darkest-tx: ;
    --dark-tx: ;
    --medium-tx: ;
    --light-tx: ;
    --lightest-tx: ;

    --font-sans: ;
    --font-mono: ;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 6px;
}

html {
    box-sizing: border-box;
    width: 100%;
}

body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--darkest);
    color: var(--lightest-tx);
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    line-height: 1.2;
}

main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 100px 75px;
}



h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 10px 0;
    font-weight: 400;
    color: var(--lightest-text);
    line-height: 1.1;
}

img,
svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
}

img[alt""],
img:not([alt]) {
    filter: blur(5px);
}

svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
}

a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    cursor: pointer;

    &:hover,
    &:focus {
        color: var(--lightest-tx)
    }
}
`

export default GlobalStyle;