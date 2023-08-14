import React from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%) rotate(90deg);
`;

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

const ExperienceItem = styled.div`
  margin: 0 20px;
  min-width: 200px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  :before {
    content: '';
    width: 2px;
    height: 15px;
    background-color: white;
    position: absolute;
    top: 50%; // Centered on the timeline
    transform: translateY(-50%); // To ensure it's centered
    left: 50%;
    z-index: 0;
  }

  h4, p {
    position: relative;
    z-index: 2;
  }

  h4 {
    margin: 20px 0 5px 0; // Adjusted top margin to avoid overlapping with the dash
  }

  p {
    margin: 0; // Removed margin-bottom
  }

  p:first-of-type {
    margin-top: 15px; // Added top margin to the first paragraph (company) to separate it from the dash
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  // Main timeline
  :before {
    content: '';
    width: calc(100% - 30px);
    height: 2px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 15px;
  }

  // Tail (fletching) on the left side of the timeline
  :after {
    content: '';
    width: 2px; 
    height: 10px; // Adjust for desired length
    background-color: white;
    position: absolute;
    top: 50%;
    left: 5px; // Adjust based on where you want it to be in relation to the main line
    transform: translateY(-50%);
  }

  // Arrowhead on the right side of the timeline
  ::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%) rotate(90deg);
  }
`;



const AboutPage = () => {
  const experience = [
    {
      title: 'Referee',
      company: 'USA Hockey',
      duration: 'Jan 2018 - Dec 2019'
    },
    {
      title: 'Waiter',
      company: 'Addison Park',
      duration: 'Jan 2018 - Dec 2019'
    },
    {
      title: 'Sorter',
      company: 'UPS',
      duration: 'Jan 2019 - Dec 2020'
    },
    {
      title: 'Internship',
      company: 'Searching',
      duration: 'Jan 2020 - Dec 2020'
    },
  ];

  return (
    <AboutWrapper>
      <h3>Experience:</h3>
      <ExperienceWrapper>
        {experience.map((job, index) => (
          <ExperienceItem key={index}>
            <h4>{job.title}</h4>
            <p>{job.company}</p>
            <p>{job.duration}</p>
          </ExperienceItem>
        ))}
        <Arrow /> {/* Add the arrow here */}
      </ExperienceWrapper>
    </AboutWrapper>
  );
};
export default AboutPage;