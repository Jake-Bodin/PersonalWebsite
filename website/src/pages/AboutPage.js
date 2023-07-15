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

const AboutPage = () => {
  return (
    <AboutWrapper>
      <h2>About Me</h2>
      <p>
        Hello, my name is Jake Bodin. I am majoring in Computer Science while also minoring in Econcomics 
         at Rensselaer Polytechnic Institute, class of 2025. I am currently creating this website as apart 
         of the RCOS prjoect group How2Website, where each of us are learning to create are own website.
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
