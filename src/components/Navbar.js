import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #1e90ff;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
`;

const Container = styled.div`
    max-width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    justify-content: space-between;
    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
`;

const NavLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    white-space: nowrap;
    transition: font-weight 0.2s linear;

    &:hover {
        font-weight: bold;
    }
`;

const Divider = styled.span`
    height: 1.5rem;
    width: 1px;
    background-color: #ffffff;
    display: inline-block;
    margin: 0 0.5rem;
`;

function Navbar() {
  return (
      <StyledHeader>
        <Container>
          <NavLink href="#about" style={{ fontSize: '1.5rem' }}>
            My Portfolio
          </NavLink>
          <Navigation>
            <NavLink href="#work">Work</NavLink>
            <Divider/>
            <NavLink href="#skills">Skills</NavLink>
            <Divider/>
            <NavLink href="#resources">Resources</NavLink>
            <Divider/>
            <NavLink href="#setup">Set up</NavLink>
          </Navigation>
        </Container>
      </StyledHeader>
  );
}

export default Navbar;
