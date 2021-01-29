import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '../utils/index';

import theme from '../../styles/theme';

import Shoe from '../../images/nikeairforce1.png';

const StyledHeroSection = styled.section`

${{ theme }} => theme.mixins.flexCenter};

justify-content: center;
align-items: center;



  h1 {
    margin: 0 0 30px 4px;
    color: var(--text);
    font-family: var(--font-sans);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--text2);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }


.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 200vh;
  background-color: #a4161a;
  justify-content: center;
  align-items: center;
}

.shoe1 {
  height: 100vh;
  width: auto;
  align-items: center;
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.title {
  grid-row: 1/2;
  grid-column: 1/3;
  font-size: 100px;
  letter-spacing: -0.06em;
}

`;

function Hero() {
  return (
    <StyledHeroSection>
      <div className="container">
        <img src={Shoe} alt="nikeair" className="shoe1" />
        <h1 className="title">NIKE AIR FORCE 1</h1>
      </div>
    </StyledHeroSection>
  );
}

export default Hero;
