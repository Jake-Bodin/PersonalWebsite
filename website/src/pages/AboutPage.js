import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
  color: white;
  padding: 0 20px;
  text-align: center;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  width: 200px; // Increased the width
  height: 240px; // Increased the height
  border-radius: 50%; 
  object-fit: cover; 
  margin-bottom: 20px; 
`;

const AboutPage = () => {
  const randomImage = "https://source.unsplash.com/random?portrait";
  return (
    <AboutWrapper>
      <ProfileImage src={randomImage} alt="Profile" />
      <h2>About Me</h2>
      <p>
        Hello, my name is Jake Bodin. I am majoring in Computer Science and minoring in Economics
        at Rensselaer Polytechnic Institute, class of 2025. I am currently creating this website as part
        of the RCOS project group How2Website, where I am creating my own personal website.
      </p>
      <h3>Skills:</h3>
      <ul>
        <li>Python, C, C++, and Java</li>
        <li>JavaScript, React, and Node.js</li>
      </ul>
    </AboutWrapper>
  );
};

export default AboutPage;
