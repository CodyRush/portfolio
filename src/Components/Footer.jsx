import React from 'react';
import styled from 'styled-components';

const Tag = styled.p`
  background: #222831;
  color: #f2f2f2;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  return (
    <div>
      <Tag>All Rights reserved &copy; Cody Rush</Tag>
    </div>
  );
};

export default Footer;
