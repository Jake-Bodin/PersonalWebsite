import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/AboutPage';
import Experience from './pages/ExpierencePage';
import Contacts from './pages/ContactsPage';
import randomImage from './photos/starclouds.jpg';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }
`;

const MainImage = styled.img`
  width: 100%;
`;

const HomePageText = styled.div`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <MainImage src={randomImage} alt="Random" />
      <HomePageText>
      <h1>Welcome to My Website!</h1>
      </HomePageText>
    </div>
  );
};

export default HomePage;
