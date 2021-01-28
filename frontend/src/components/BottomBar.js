import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{ 
        height: 60px; 
    }



`;

export const BottomBar = () => (
    <Styles>
      <Navbar expand="lg" fixed="bottom" display="block">


      </Navbar>
    </Styles>
  )