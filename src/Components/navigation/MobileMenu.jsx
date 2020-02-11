import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  background: gray;
  color: white;
  padding: 2rem;
`;

const Menu = styled.ul``;

const MenuItem = styled.li`
  padding: 1.5rem 0;
  color: #f2f2f2;
  text-align: center;
  font-size: 1.3rem;

  &:hover {
    background: silver;
    cursor: pointer;
  }
`;

const MobileMenu = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>Portfolio</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Container>
  );
};

export default MobileMenu;
