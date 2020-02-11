import React from 'react';
import NavBar from './Components/navigation/NavBar';
import Header from './Components/Header';
import PortfolioMain from './Components/portfolio/PortfolioMain';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import styled from 'styled-components';
import 'minireset.css';

const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`;

function App() {
  return (
    <AppContainer className='App'>
      <NavBar />
      <Header />
      <PortfolioMain />
      <About />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
