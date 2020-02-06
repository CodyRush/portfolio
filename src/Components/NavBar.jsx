import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.ul`
  background: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

const Logo = styled.li`
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
`;

const Menu = styled.li`
  width: 3rem;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <nav>
      <NavContainer>
        <Logo>Logo</Logo>
        <Menu>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='bars'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
          >
            <path
              fill='#F96D00'
              d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
            ></path>
          </svg>
        </Menu>
      </NavContainer>
    </nav>
  );
};

export default NavBar;
