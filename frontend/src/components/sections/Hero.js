import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '../utils/index';
import theme from '../../styles/theme';

import Product from '../Product';
import Message from '../Message';
import Loader from '../Loader';
import Paginate from '../Paginate';
import Meta from '../Meta';

import { listProducts } from '../../actions/productActions';

import Shoe from '../../images/nikeairforce1.png';
import Nike from '../../images/nikeswoosh.png';

const StyledHeroSection = styled.section`

${{ theme }} => theme.mixins.flexCenter};

margin-top: 80px;
height: 200vh;




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
  grid-template-rows: repeat(3, auto);
  background-image: linear-gradient(#ff0a54, #f77f00);
  border-radius: 40px 40px 40px 40px;
  height: 80vh;
  width: 80vw;
  
}

.nikelogo {
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: left;
  width: 3em;
  margin: 50px 80px;

    @media (max-width: 930px) {
    justify-self: center;
  }
}
}

.nikeairmax {
  grid-row: 3/4;
  grid-column: 1 / 3;
}

.shoe1 {
  grid-row: 3/4;
  grid-column: 1/3;
  max-width: 12em;
  justify-self: right;
}

.title {
  grid-row: 1/2;
  grid-column: 1/3;
  justify-self: right;
  padding-top: 30px;
  padding-right: 80px;
  font-size: var(--fz-xl);
  letter-spacing: -0.07em;
  text-align: center;
  margin-left: 80px;

  @media (max-width: 930px) {
    padding-top: 150px;
  }
}



`;

const Hero = () => {
  return (
    <>
      <Meta />
      <StyledHeroSection>
        <div className="container">
          <img src={Nike} alt="nike air max" className="nikelogo" />
          <h1 className="title">
            AIR FORCE <b>1</b>
          </h1>
          <img src={Shoe} alt="nikeair" className="shoe1" />
        </div>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
