import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'

import GlobalStyle from './styles/globalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
              </header>
        <Home />
    </div>
  );
}

export default App;
