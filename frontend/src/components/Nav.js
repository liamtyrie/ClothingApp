import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useScrollDirection from '../components/utils/scrollDirection';
import styled, { css } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { loaderDelay } from './utils/index';
import { navLinks } from '../config.js';

import Menu from '../components/Menu';

import IconLogo from '../images/logo1.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100vw;
  height: var(--nav-height);
  background-color: var(--pri-back);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  ${(props) =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: rgba(10, 25, 47, 0.85);
      box-shadow: 0 10px 30px -10px var(--pri-back);
    `}

  ${(props) =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: 0 10px 30px -10px var(--pri-back);
    `};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100vw;
  color: var(--orange);
  font-family: var(--font-sans);
  z-index: 12;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: var(--tri-orange);
      &:hover {
        color: var(--tri-orange);
      }
      width: 42px;
      height: 42px;
      &:hover,
      &:focus {
        svg {
          fill: var(--tri-orange);
        }
      }
      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-md);
      a {
        padding: 10px;
        &:before {
          margin-right: 5px;
          color: var(--white);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    color: var(--orange);
    background-color: transparent;
    border: 1px solid var(--orange);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-md);
    font-family: var(--font-ropa);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--tri-orange);
    }
    &:after {
      display: none !important;
    }
    margin-left: 15px;
    font-size: var(--fz-md);
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div
                className={IconLogo}
                tabIndex="-1"
                style={{ width: '200px' }}
              >
                {isHome ? (
                  <a href="/" aria-label="home">
                    <img src={IconLogo} alt="logo" style={{ width: '10px' }} />
                  </a>
                ) : (
                  <Link to="/" aria-label="home">
                    <img src={IconLogo} alt="logo" style={{ width: '100px' }} />
                  </Link>
                )}
                <p>SHU-72</p>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={i}
                      style={{
                        transitionDelay: `${isHome ? i * 100 : 0}ms`
                      }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`
                  }}
                >
                  <a
                    className="resume-button"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool
};

export default Nav;
