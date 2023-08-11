import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/AboutPage';
import Experience from './pages/ExpierencePage';
import Contacts from './pages/ContactsPage';
import randomImage from './photos/starclouds.jpg';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f7f7f7;
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #e0eafc 0%, #cfdef3 100%);
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const HomePageText = styled.div`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HomePageHeading = styled.h1`
  font-size: 36px;
  margin: 0;
  padding: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Box = styled(Link)`
  display: inline-block;
  width: calc(33% - 20px);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const BoxTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  padding: 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const BoxContent = styled.p`
  font-size: 16px;
`;

const HomePage = () => {
  return (
    <Router>
      <GlobalStyle />
      <HomePageWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </HomePageWrapper>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <MainImage src={randomImage} alt="Random" />
      <HomePageText>
        <HomePageHeading>Welcome to My Website!</HomePageHeading>
        <p>Feel free to explore the site and learn more about me.</p>
      </HomePageText>
      <Box to="/about"><BoxTitle>About</BoxTitle><BoxContent>Discover more about me</BoxContent></Box>
      <Box to="/experience"><BoxTitle>Experience</BoxTitle><BoxContent>See where I've worked and projects I've done</BoxContent></Box>
      <Box to="/contacts"><BoxTitle>Contacts</BoxTitle><BoxContent>Get in touch with me</BoxContent></Box>
    </div>
  );
};

export default HomePage;
