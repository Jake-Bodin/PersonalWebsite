import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Experience from './pages/ExpierencePage';
import randomImage from './photos/starclouds.jpg';
import styled from 'styled-components';

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
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
      <h1>Welcome to the Home Page!</h1>
      </HomePageText>
    </div>
  );
};

export default HomePage;