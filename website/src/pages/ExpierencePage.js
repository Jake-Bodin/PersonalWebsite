import React from 'react';
import styled from 'styled-components';
import profilePic from '../photos/starclouds.jpg';

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
  width: 100px; // You can change this to suit your needs
  height: 100px; // You can change this to suit your needs
  border-radius: 50%; // This will make the image circular, you can remove this if you prefer a different shape
  object-fit: cover; // This will ensure the image covers the whole area of the img element without stretching
  margin-bottom: 20px; // Add some spacing below the image
`;


const AboutPage = () => {
  return (
    <AboutWrapper>
      <ProfileImage src={profilePic} alt="Profile" />
      <h2>About Me</h2>
      <p>
        Expierence
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
