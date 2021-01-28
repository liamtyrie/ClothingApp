import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
      </Router>
    </React.Fragment>
  );
}

export default App;
