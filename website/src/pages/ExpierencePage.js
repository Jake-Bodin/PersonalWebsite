import React, { useState } from 'react';
import styled from 'styled-components';
import randomImage from '../src/photos/starclouds.jpg';
import About from '../src/pages/AboutPage.js';
import Projects from '../src/pages/ProjectsPage.js';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #282c34;
  color: red;
`;

const HeaderName = styled.h1`
  font-family: 'Arial', sans-serif;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavButton = styled.button`
  margin-right: 20px;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

const MainImage = styled.img`
  width: 100%;
`;

const ProjectPreview = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const ProjectCard = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectDescription = styled.p`
  padding: 10px;
`;

const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const HomePage = () => {
  const [activeButton, setActiveButton] = useState('home');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Header>
        <HeaderName>Jake Bodin</HeaderName>
        <Navigation>
          <NavButton
            isActive={activeButton === 'home'}
            onClick={() => handleButtonClick('home')}
          >
            Home
          </NavButton>
          <NavButton
            isActive={activeButton === 'about'}
            onClick={() => handleButtonClick('about')}
          >
            About Me
          </NavButton>
          <NavButton
            isActive={activeButton === 'projects'}
            onClick={() => handleButtonClick('projects')}
          >
            Projects
          </NavButton>
          <NavButton
            isActive={activeButton === 'experience'}
            onClick={() => handleButtonClick('experience')}
          >
            Experience
          </NavButton>
        </Navigation>
      </Header>

      {activeButton === 'home' && (
  <React.Fragment>
    <MainImage src={randomImage} alt="Random" />

    <ProjectPreview>
      <ProjectCard>
        <ProjectImage
          src="https://source.unsplash.com/random?coding"
          alt="Project 1"
        />
        <ProjectDescription>
          Project 1: A short description of the project goes here.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage
          src="https://source.unsplash.com/random?coding"
          alt="Project 2"
        />
        <ProjectDescription>
          Project 2: A short description of the project goes here.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage
          src="https://source.unsplash.com/random?coding"
          alt="Project 3"
        />
        <ProjectDescription>
          Project 3: A short description of the project goes here.
        </ProjectDescription>
      </ProjectCard>
    </ProjectPreview>

    <Footer>
      © {new Date().getFullYear()} Jake Bodin. All rights reserved.
    </Footer>
    <style>{`body { background-color: #282c34; }`}</style>
  </React.Fragment>
)}


    </div>
  );
};

export default HomePage;
