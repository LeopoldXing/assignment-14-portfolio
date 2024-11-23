import React from 'react';
import styled from 'styled-components';
import { Text, Img, Button } from '@leopoldxing/react-component-library';

const Section = styled.section`
  padding: 1rem 0;
  color: #3f3f3f;
  max-width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-bottom: 2rem;
  max-width: 60%;
  @media (max-width: 768px) {
    margin-bottom: 0;
    text-align: center;
    max-width: 100%
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 2rem;
  max-width: 50%;
  max-height: 50%;
  @media (max-width: 768px) {
    display:none;
  }
`;


export default function BasicInformation() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Text types="header" bold text="Hi, I'm Luping Xing. "/>
          <br />
          <Text types="paragraph" text="Full Stack Web Development student at RRC Polytech, passion about technologies and web development, I'm proficiant in Java / Kotlin development, as well as Python and C#" />
          <div style={{margin: '1rem 0rem'}}>
            <Button primary as="a" href="#projects" text="SEE MY PAST WORK" style={{textDecoration: 'none'}}/>
          </div>
        </Content>
        <ImageWrapper>
          <Img src="./hero.png" height="300px" alt="Hero Image"/>
        </ImageWrapper>
      </Container>
    </Section>
  );
}
