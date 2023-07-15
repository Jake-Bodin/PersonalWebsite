import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Jake Bodin. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
