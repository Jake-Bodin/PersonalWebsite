import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #282c34;
`;

const HeaderName = styled.h1`
  color: white;
  margin-right: auto;
`;

const Navigation = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 0 20px;
  color: white;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderName>Jake Bodin</HeaderName>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/experience">Experience</StyledLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
