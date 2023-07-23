import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../components/contacts';

const IconList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const IconItem = styled.li`
  font-size: 3rem; // adjust the size as you need
  padding: 1rem;   // adjust the space between icons as you need
`;

const ContactIcons = () => (
  <IconList className="icons">
    {data.map((s) => (
      <IconItem key={s.label}>
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </IconItem>
    ))}
  </IconList>
);

export default ContactIcons;
