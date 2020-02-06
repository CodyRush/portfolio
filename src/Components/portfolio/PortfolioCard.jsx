import React from 'react';
import styled from 'styled-components';

import placeholder from '../../Images/placeholder-img.jpg';
const Card = styled.div`
  background: #f2f2f2;
  padding: 1rem 1.5rem;
`;

const Screenshot = styled.img`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: #222831;
  font-size: 1.4rem;
`;

const Bullet = styled.p`
  line-height: 1.5;
  padding: 0.3rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CTAButton = styled.a`
  background: #222831;
  color: #f2f2f2;
  font-size: 1rem;
  text-decoration: none;
  padding: 0.5rem 0.9rem;
  border: none;
  border-radius: 25px;
  margin: 2rem 0;
  cursor: pointer;
`;

const CTAButtonAlt = styled(CTAButton)`
  background: #f2f2f2;
  border: 1px solid #222831;
  color: #222831;
`;

const PortfolioCard = () => {
  return (
    <Card>
      <Screenshot src={placeholder} alt='Placeholder' />
      <Title>React Weather App</Title>
      <Bullet>- Created with OpenWeatherMap API</Bullet>
      <Bullet>- Built with React and the Context API</Bullet>
      <Bullet>- Styled using Styled Components</Bullet>
      <ButtonContainer>
        <CTAButton href='#'>Live Preview</CTAButton>
        <CTAButtonAlt href='#'>Github Repo</CTAButtonAlt>
      </ButtonContainer>
    </Card>
  );
};

export default PortfolioCard;
