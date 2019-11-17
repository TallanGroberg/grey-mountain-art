import React from 'react';
import styled from 'styled-components'
import {Link } from 'react-router-dom'
const Nav = () => {
  return (
    <NavStyle>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
    </NavStyle>
  );
};

const NavStyle = styled.div`
    height: 5vh;
    width: 100%;

    font-family: Belleza, sans-serif;
    text-align: center;

    a {
      text-decoration: none;
    }
  
    position: fixed;
    @media only screen and (max-width: 1000px) {
      text-align: center;
      bottom: 0;
    }

    @media only screen and (min-width: 1000px) {
      top: 0;
    }
`

export default Nav;