import React from 'react';
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard';

const Container = styled.div`
  background: #393e46;
  padding: 0 1.5rem 4.4rem;
`;

const Heading = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  color: #f2f2f2;
  margin-top: -1rem;
  margin-bottom: 3.5rem;
`;

const Carousel = styled.div``;

const PortfolioMain = () => {
  return (
    <Container>
      <Heading>Portfolio</Heading>
      <Carousel>
        <PortfolioCard />
      </Carousel>
    </Container>
  );
};

export default PortfolioMain;
