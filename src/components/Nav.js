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
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    

    font-family: Belleza, sans-serif;
    text-align: center;

    a {
      margin: 3%;
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