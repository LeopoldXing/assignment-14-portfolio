import React from 'react';
import styled from 'styled-components';
import { Text } from '@leopoldxing/react-component-library';
import { skills } from '../data';

const SkillsSection = styled.section`
    color: #111;
    margin-top: 3rem;
`;

const Container = styled.div`
    max-width: 70%;
    margin: auto;
    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

const Header = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const SkillsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
`;

const SkillsCard = styled.div`
    background-color: #1e90ff;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: calc(20% - 1rem);
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 640px) {
        width: 45%;
    }
`;

const SkillText = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;

export default function Skills() {
  return (
      <SkillsSection id="skills">
        <Container>
          <Header>
            <Text types="header" bold text="My Skills" />
            <br />
            <Text
                types="paragraph"
                text="These are some of the technologies and tools I have experience with:"
            />
          </Header>
          <SkillsGrid>
            {skills.map((skill) => (
                <SkillsCard key={skill}>
                  <SkillText>{skill}</SkillText>
                </SkillsCard>
            ))}
          </SkillsGrid>
        </Container>
      </SkillsSection>
  );
}
