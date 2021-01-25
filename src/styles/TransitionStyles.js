import { css } from 'styled-components'

const TransitionStyles = css`

.fadeup-enter {
    opacity: 0.01;
    transform: translateY(40px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fadedown-enter {
    opacity: 0.01;
    transform: translateY(-40px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fadedown-enter-active {
    opacity: 0.01;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
}

.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
}

.fade-exit {
    opacity: 1;
}

.fade-exit-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
}
`

export default TransitionStyles