import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

import styled from 'styled-components';

const NavContainer = styled.ul`
  background: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  height: 6rem;
`;

const Logo = styled.li`
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
`;

const MenuButton = styled.li`
  width: 2.6rem;
  cursor: pointer;

  @media (min-width: 767px) {
    display: none;
  }
`;

const DesktopMenu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
  }
`;

const DesktopMenuItem = styled.li`
  color: white;
  font-size: 1.4rem;

  &:hover {
    cursor: pointer;
    color: #f96d00;
  }
`;

const NavBar = () => {
  const [isVisable, setIsVisable] = useState(false);

  function handleClick() {
    console.log(isVisable);

    if (!isVisable) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  }

  return (
    <nav>
      <NavContainer>
        <Logo>Logo</Logo>
        <MenuButton>
          <svg
            onClick={handleClick}
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
        </MenuButton>
        <DesktopMenu>
          <DesktopMenuItem>Portfolio</DesktopMenuItem>
          <DesktopMenuItem>Skills</DesktopMenuItem>
          <DesktopMenuItem>Contact</DesktopMenuItem>
        </DesktopMenu>
      </NavContainer>
      {isVisable ? <MobileMenu /> : ''}
    </nav>
  );
};

export default NavBar;
