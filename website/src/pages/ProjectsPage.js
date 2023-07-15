import React, { useState } from 'react';
import styled from 'styled-components';



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

    {activeButton === 'home' && (
  <React.Fragment>
    <MainImage src= "https://source.unsplash.com/random?coding" alt="Random" />
   
    <style>{`body { background-color: #282c34; }`}</style>
  </React.Fragment>
)}


    </div>
  );
};

export default HomePage;
