import React, { useEffect } from 'react';
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

justify-content: center;
align-items: center;
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
  height: 100vh;
  align-items: center;
  justify-content: center;
  
}

.containerleft {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-image: linear-gradient(#ff0a54, #f77f00);
  height: 80vh;
  width: 40vw;
  border-radius: 40px 0px 0px 40px;
}

.containerright {
  grid-column: 2/3;
  grid-row: 1/3;
  background-color: white;
  height: 80vh;
  width: 40vw;
  border-radius: 0px 40px 40px 0px;
}

.nikelogo {
  grid-row: 1/2;
  grid-column: 1/2;
  width: 200px;
  margin: 50px 80px;
}

.shoe1 {
  align-items: center;
  grid-row: 3/4;
  grid-column: 1 / 2;
  margin-left: -3em;
  margin-top: -2em;
}

.title {
  grid-row: 2/3;
  grid-column: 1/2;
  font-size: var(--fz-xl);
  letter-spacing: -0.07em;
  text-align: left;
  margin-left: 80px;
}



`;

const HeroScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
};

function Hero({ product }) {
  return (
    <>
      <Meta />
      <StyledHeroSection>
        <div className="container">
          <div className="containerleft">
            <img src={Nike} alt="nike air max" className="nikelogo" />
            <h1 className="title">
              AIR FORCE <b>1</b>
            </h1>
            <img src={Shoe} alt="nikeair" className="shoe1" />
          </div>
          <div className="containerright"></div>
        </div>
      </StyledHeroSection>
    </>
  );
}

export default Hero;
