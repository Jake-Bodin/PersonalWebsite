import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContactIcons from '../components/contactIcons';

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

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Contact = () => (
  <AboutWrapper>
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: bodinj2@rpi.edu</p>
      </div>
      <IconsWrapper>
        <ContactIcons />
      </IconsWrapper>
    </article>
  </AboutWrapper>
);

export default Contact;
