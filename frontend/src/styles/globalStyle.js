import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`


:root {
    --darkest-bg: #ffd8be;
    --dark-bg: #ffeedd;
    --li-purple-bg: #b8b8ff;
    --da-purple-bg: #9381ff;
    --lightest-bg: #f8f7ff;

    --darkest-tx: #001233;
    --dark-tx: #001845;
    --medium-tx: #002855;
    --light-tx: #023e7d;
    --lightest-tx: #0466c8;

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

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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