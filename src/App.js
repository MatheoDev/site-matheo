import React from 'react';
import GlobalStyle from './globalStyle';
import Navbar from './components/Navbar';
import { Route } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Route path="/" component={Home} /> 
    </>
  );
}

export default App;
