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

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; // Add this to vertically center content
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
`;

const ExperienceItem = styled.div`
  margin: 0 20px;
  min-width: 200px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 60px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :before {
    content: "";
    border-top: 1px solid white; // Create a line
    width: 20px; // length of line
    margin-right: 5px;  // Adjust spacing between line and tip
  }

  :after {
    content: "";
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid white; // arrow pointing to the right
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
          <React.Fragment key={index}>
            <ExperienceItem>
              <h4>{job.title}</h4>
              <p>{job.company}</p>
              <p>{job.duration}</p>
            </ExperienceItem>
            {index !== experience.length - 1 && <ArrowContainer />}
          </React.Fragment>
        ))}
      </ExperienceWrapper>
    </AboutWrapper>
  );
};

export default AboutPage;