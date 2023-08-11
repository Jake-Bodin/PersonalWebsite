import React from 'react';
import styled from 'styled-components';
import ContactIcons from '../components/contactIcons';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: gray;
  color: #333; 
  padding: 0 20px;
  text-align: center;
  box-sizing: border-box;
`;

const ContactHeader = styled.h2`
  margin-bottom: 30px;
`;

const EmailText = styled.p`
  margin-bottom: 20px;
`;

const Contact = () => (
  <AboutWrapper>
    <article className="post" id="contact">
      <ContactHeader>
        <h3>Contacts:</h3>
      </ContactHeader>
      <EmailText>
        Feel free to get in touch. You can email me at: <a href="mailto:bodinj2@rpi.edu">bodinj2@rpi.edu</a>
      </EmailText>
      <ContactIcons />
    </article>
  </AboutWrapper>
);

export default Contact;
