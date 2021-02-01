import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../styles/theme';

import Rating from './Rating';

import Meta from './Meta';

const StyledProductCard = styled.div`

${{ theme }} => theme.mixins.flexCenter};

.container
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, 1fr);
  background-image: linear-gradient(white, grey);
  border-radius: 10px 10px 10px 10px;
  height: 50vh;
  width: 30vw;

`;

const Product = ({ product }) => {
  return (
    <>
      <Meta />
      <StyledProductCard>
        <div className="container">
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.name} />
            <title>{product.name}</title>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <h3>£{product.price}</h3>
          </Link>
        </div>
      </StyledProductCard>
    </>
  );
};

export default Product;
